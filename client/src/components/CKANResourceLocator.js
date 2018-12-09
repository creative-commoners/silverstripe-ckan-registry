import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CKANApi from 'lib/CKANApi';
import i18n from 'i18n';
import { Input } from 'reactstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import debounce from 'lodash/debounce';
import { inject } from 'lib/Injector';
import fieldHolder from 'components/FieldHolder/FieldHolder';
import classNames from 'classnames';
import URLInput from './ResourceLocator/URLInput';

class CKANResourceLocator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Current value of the URL field
      uri: CKANApi.generateURI(props.value) || '',
      // Current parsed CKAN resource specification and the value of this whole field
      spec: props.value || null,
      // Whether the loading indicator should show in the URL input
      validationPending: false,
      // The current dataset that's found through the given URL (containing the packages that can
      // be selected)
      currentDataset: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleResourceSelect = this.handleResourceSelect.bind(this);

    // We assign a debounced version of the validate input function as we want both a debounced
    // and a "normal" version
    this.delayedValidateInput = debounce(this.validateInput.bind(this), 500);
  }

  /**
   * Gets a message to show for an invalid URL input.
   *
   * @returns {string|null}
   */
  getInvalidURLMessage() {
    const { currentDataset, spec } = this.state;
    const message = { type: 'error' };

    // If there's no "spec" then there's no URL that looks valid yet
    // Or if there's a "currentDataset" then the field is valid
    if (!spec || currentDataset) {
      return null;
    }

    // Return a generic "catch all" response
    message.value = i18n._t(
      'CKANResourceLocator.INVALID_DATASET_URL',
      'The provided data source URL does not appear to be a valid CKAN data set'
    );

    return message;
  }

  /**
   * Handle changes in the URL field
   *
   * @param event
   */
  handleChange(event) {
    const uri = event.target.value;

    this.setState({
      uri,
    });

    // Run the debounced validation for the URL input.
    this.delayedValidateInput();
  }

  /**
   * Handle changes with the resource select field
   *
   * @param event
   * @param value
   */
  handleResourceSelect(event, { value }) {
    this.setState({
      spec: {
        ...this.state.spec,
        resource: value,
      },
    });
  }

  /**
   * Validate that the URL input is valid and attempt to verify with the CKAN endpoint.
   * Once valid this method will also load the determined dataset.
   *
   * This method also has a debounced version: "delayedValidateInput"
   */
  validateInput() {
    const { uri } = this.state;
    const { defaultEndpoint } = this.props;

    // Attempt to parse the URL into it's CKAN "parts"
    const spec = CKANApi.parseURI(uri);

    // If an endpoint could not be parsed there's an optional default that can be used.
    if (spec && !spec.endpoint && defaultEndpoint) {
      spec.endpoint = defaultEndpoint;
    }

    // If there's no spec or _still_ no endpoint then we can't continue.
    if (!spec || !spec.endpoint) {
      this.setState({
        spec: null,
      });

      return;
    }

    // Otherwise we'll register the input from here as awaiting validation. This method will run
    // some asynchronous validation
    this.setState({
      validationPending: true,
    });

    // Prepare a handler for error responses from the CKAN API. This will just stop loading and
    // assume the field is invalid.
    const handleErrorResponse = () => this.setState({
      validationPending: false,
      spec: null,
      currentDataset: null,
    });

    if (spec.resource) {
      if (!spec.dataset) {
        // If we have a resource but no dataset then we can determine the dataset from the resource
        // response provided by the API.
        CKANApi.loadResource(spec.endpoint, spec.resource).then(
          resource => {
            // Create a new spec with the updated dataset
            const newSpec = {
              ...spec,
              dataset: resource.package_id,
            };

            // Set the new spec in the state and rewrite the value of the URL input
            this.setState({
              spec: newSpec,
              uri: CKANApi.generateURI(newSpec) || '',
            });

            // Rerun a validate so that the dataset is now loaded
            this.validateInput();
          },
          handleErrorResponse
        );

        // We're revalidating so we'll just breakout here
        return;
      }

      // We strip off the resource from the URL
      const newUri = uri.substring(0, uri.lastIndexOf('/', uri.lastIndexOf('/') - 1));

      this.setState({
        uri: newUri,
      });
    }

    // Now we load the dataset from the CKAN api
    CKANApi.loadDataset(spec.endpoint, spec.dataset).then(
      dataset => this.setState({
        validationPending: false,
        spec,
        currentDataset: dataset || null,
      }),
      handleErrorResponse
    );
  }

  /**
   * Renders a select filled with resources that can be selected
   *
   * @returns {SelectComponent}
   */
  renderResourceSelect() {
    const { uri, currentDataset, spec } = this.state;
    const { SelectComponent } = this.props;

    // Create some props that'll be shared by the disabled input and the select component
    const sharedProps = {
      title: 'Resource name',
      extraClass: 'form-field--no-divider stacked',
    };

    // If we're not valid then we'll render just a simple disabled input in place of the select
    if (!currentDataset || !uri || !uri.length) {
      const Field = fieldHolder(Input);
      return <Field {...sharedProps} type="text" disabled />;
    }

    // Parse the resources out of the current dataset into a list of options
    const resources = currentDataset.resources.map(resource => ({
      value: resource.id,
      title: resource.name || resource.description || null,
      disabled: !resource.datastore_active,
      // Support the possibility that option titles are supported by the admin component (in 1.4)
      description: !resource.datastore_active ? 'Data searching is unavailable for this resource' : null,
    }));

    // Find the current resource that might be selected
    const selectedResource = resources.find(resource => resource.value === spec.resource);
    let message = null;
    // If the user has somehow selected an invalid resource (disabled option) we'll give a message
    if (selectedResource && selectedResource.disabled) {
      message = {
        type: 'error',
        value: i18n._t(
          'CKANResourceLocator.INVALID_RESOURCE_SELECTION',
          'Datastore is not available for the selected resource'
        ),
      };
    }

    return (
      <SelectComponent
        {...sharedProps}
        message={message}
        className={{ 'is-invalid': message }}
        name="now-i-have-a-name"
        source={resources}
        value={spec.resource}
        onChange={this.handleResourceSelect}
      />
    );
  }

  /**
   * Renders a hidden input containing the value of this field to be saved
   *
   * @returns {Input}
   */
  renderHiddenInput() {
    const { spec, validationMessage } = this.state;
    const value = !spec || validationMessage ? null : JSON.stringify(spec);

    return <Input name={this.props.name} type="hidden" value={value} />;
  }

  /**
   * Renders this field in its entirety
   *
   * @returns {DOMElement}
   */
  render() {
    const { uri, validationPending } = this.state;

    // Get any invalid message for the URL field
    const invalidMessage = this.getInvalidURLMessage();
    // And determine validity by the existance of that message
    const invalid = !!invalidMessage;

    // Props for the URLInput
    const inputProps = {
      title: i18n._t('CKANResourceLocator.DATA_SOURCE_URL', 'Data source URL'),
      extraClass: 'form-field--no-divider stacked',
      message: invalidMessage,
      value: uri,
      invalid,
      onChange: this.handleChange,
    };

    const inputContainerClasses = classNames('ckan-resource-locator__uri-input', {
      'ckan-resource-locator__uri-input--loading': validationPending,
    });

    return (
      <div className="ckan-resource-locator">
        <div className={inputContainerClasses}>
          <URLInput {...inputProps} />
        </div>
        <div className="ckan-resource-locator__big-slash">/</div>
        <div className="ckan-resource-locator__resource-select">
          { this.renderResourceSelect() }
        </div>
        { this.renderHiddenInput() }
      </div>
    );
  }
}

CKANResourceLocator.propTypes = {
  // The field name
  name: PropTypes.string.isRequired,
  // A default endpoint to be used in the case that the URL pasted does not provide one
  // This allows things like putting package names and resource names in the URL field
  defaultEndpoint: PropTypes.string,

  // ## Provided by Injector:
  // The component to be used for a Select DOM node
  SelectComponent: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func])
};

export default fieldHolder(inject(
  ['SingleSelectField'],
  (SelectComponent) => ({
    SelectComponent,
  }),
  () => 'ElementEditor.ElementList'
)(CKANResourceLocator));
