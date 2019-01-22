/* global window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Griddle from 'griddle-react';
import classnames from 'classnames';
import CKANApi from 'lib/CKANApi';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

class CKANRegistryDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true,
      currentPage: 1,
      recordCount: 0,
    };

    this.handleGetPage = this.handleGetPage.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.loadData();
    }
  }

  getGriddleProps() {
    const { pageSize, LoadingIndicator } = this.props;
    const { data, currentPage, recordCount, loading } = this.state;
    const loadingIndicator = this.renderLoading;
    const GriddleLayout = ({ Table, Pagination, Filter }) => (
      <div>
        <div className="ckan-registry__filters">
          <Filter />
        </div>
        <div className="ckan-registry__data">
          <div className="ckan-registry__data-loader">
            <Table />
            { loading && loadingIndicator(LoadingIndicator) }
          </div>
        </div>
        <div className="ckan-registry__pagination">
          <Pagination />
        </div>
      </div>
    );

    return {
      data,
      pageProperties: {
        currentPage,
        recordCount,
        pageSize,
      },
      events: {
        onGetPage: this.handleGetPage,
        onNext: () => { this.handleGetPage(this.state.currentPage + 1); },
        onPrevious: () => { this.handleGetPage(this.state.currentPage - 1); },
        onSort: (...args) => console.log(args),
      },
      components: {
        Layout: GriddleLayout,
      },
    };
  }

  handleGetPage(pageNumber) {
    this.setState({
      currentPage: pageNumber,
    });
  }

  loadData() {
    const { spec: { endpoint, identifier }, fields, pageSize } = this.props;
    const { currentPage } = this.state;

    const recordMapper = record => {
      const newRecord = {};
      Object.entries(record).forEach(([key, value]) => {
        const readableLabel = fields
          .find(field => field.OriginalLabel === key)
          .ReadableLabel;
        newRecord[readableLabel] = value;
      });
      return newRecord;
    };

    this.setState({ loading: true });
    CKANApi
      .loadDatastore(endpoint, identifier)
      .search(
        fields
          .filter(field => parseInt(field.ShowInResultsView, 10) === 1)
          .map(field => field.OriginalLabel), // fields (select)
        null, // search term (where)
        false, // distinct
        pageSize, // limit
        (currentPage - 1) * pageSize // offset
      )
      .then(result => {
        this.setState({
          data: result.records ? result.records.map(recordMapper) : [],
          recordCount: result.total,
          loading: false,
        });
      });
  }

  /**
   * Renders a loading message if "loading" is true in the state
   *
   * @returns {HTMLElement|null}
   */
  renderLoading(LoadingIndicator) {
    return (
      <div className="ckan-registry__loading">
        <div className="ckan-registry__loading-vignette" />
        <div className="ckan-registry__loading-notice">
          <p>{ window.i18n._t('CKANRegistryDisplay.LOADING', 'Loading...') }</p>
          {LoadingIndicator}
        </div>
      </div>
    );
  }

  /**
   * Renders a download/export to CSV link
   *
   * @returns {HTMLElement|null}
   */
  renderDownloadLink() {
    const { downloadLink } = this.props;
    if (!downloadLink) {
      return null;
    }

    return (
      <div className="ckan-registry__export">
        <a
          className="ckan-registry__button ckan-registry__button--export"
          href={downloadLink}
        >
          { window.i18n._t('CKANRegistryDisplay.DOWNLOAD', 'Export results to CSV') }
        </a>
      </div>
    );
  }

  render() {
    const { className, fields } = this.props;

    const invalidConfig = !fields || !fields.length;
    const classes = classnames(
      'ckan-registry',
      { 'ckan-registry__error': invalidConfig },
      className
    );

    if (!fields || !fields.length) {
      const errorMessage = window.i18n._t(
        'CKANRegistryDisplay.NO_FIELDS',
        'There are no columns to show in this table.'
      );

      return (
        <div className={classes}>
          <p>{errorMessage}</p>
        </div>
      );
    }

    return (
      <div className={classes}>
        <Griddle {...this.getGriddleProps()} />
        { this.renderDownloadLink() }

        { /* example for adding a link using react-router */ }
        <Link to={`${this.props.basePath}/view/123`}>Go to item 123</Link>
      </div>
    );
  }
}

CKANRegistryDisplay.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  downloadLink: PropTypes.string,
  pageSize: PropTypes.number,
  LoadingIndicator: PropTypes.element,
};

CKANRegistryDisplay.defaultProps = {
  basePath: '/',
  className: '',
  downloadLink: '',
  pageSize: 30,
  LoadingIndicator: <ReactLoading type="bars" />,
};

export default CKANRegistryDisplay;
