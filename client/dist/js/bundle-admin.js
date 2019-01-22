/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle-admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(0);

var _Injector2 = _interopRequireDefault(_Injector);

var _CKANResourceLocatorField = __webpack_require__("./client/src/components/CKANResourceLocatorField.js");

var _CKANResourceLocatorField2 = _interopRequireDefault(_CKANResourceLocatorField);

var _CKANPresentedOptionsField = __webpack_require__("./client/src/components/CKANPresentedOptionsField.js");

var _CKANPresentedOptionsField2 = _interopRequireDefault(_CKANPresentedOptionsField);

var _CKANResultConditionsField = __webpack_require__("./client/src/components/CKANResultConditionsField.js");

var _CKANResultConditionsField2 = _interopRequireDefault(_CKANResultConditionsField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    CKANResourceLocatorField: _CKANResourceLocatorField2.default,
    CKANPresentedOptionsField: _CKANPresentedOptionsField2.default,
    CKANResultConditionsField: _CKANResultConditionsField2.default
  });
};

/***/ }),

/***/ "./client/src/bundles/bundle-admin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/CKANResourceLocatorField-entwine.js");
__webpack_require__("./client/src/legacy/CKANPresentedOptionsField-entwine.js");
__webpack_require__("./client/src/legacy/CKANResultConditionsField-entwine.js");
__webpack_require__("./client/src/legacy/CKANResourceFilterForm-entwine.js");
__webpack_require__("./client/src/legacy/GridFieldResourceTitle.js");
__webpack_require__("./client/src/legacy/ResourceFilter.js");
__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/CKANPresentedOptionsField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = exports.SELECT_TYPE_CUSTOM = exports.SELECT_TYPE_ALL = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(0);

var _reactstrap = __webpack_require__(5);

var _FieldHolder = __webpack_require__(3);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _CKANApi = __webpack_require__("./client/src/lib/CKANApi.js");

var _CKANApi2 = _interopRequireDefault(_CKANApi);

var _i18n = __webpack_require__(8);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SELECT_TYPE_ALL = exports.SELECT_TYPE_ALL = '0';

var SELECT_TYPE_CUSTOM = exports.SELECT_TYPE_CUSTOM = '1';

var CKANPresentedOptionsField = function (_Component) {
  _inherits(CKANPresentedOptionsField, _Component);

  function CKANPresentedOptionsField(props) {
    _classCallCheck(this, CKANPresentedOptionsField);

    var _this = _possibleConstructorReturn(this, (CKANPresentedOptionsField.__proto__ || Object.getPrototypeOf(CKANPresentedOptionsField)).call(this, props));

    var value = props.value || {};
    _this.state = _extends({
      customOptions: [],
      selectType: props.selectTypeDefault,
      selections: [],
      suggestedOptions: [],
      suggestedOptionCache: {},
      loading: false,
      fetchFailure: false,
      separatorDelimiter: ''
    }, value);

    _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSelectTypeChange = _this.handleSelectTypeChange.bind(_this);
    _this.handleDelimiterChange = _this.handleDelimiterChange.bind(_this);
    _this.handleExecuteSeparator = _this.handleExecuteSeparator.bind(_this);
    _this.handleTryAgain = _this.handleTryAgain.bind(_this);
    return _this;
  }

  _createClass(CKANPresentedOptionsField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadSuggestedOptions();
    }
  }, {
    key: 'getFieldName',
    value: function getFieldName(fieldName) {
      return this.props.name + '-' + fieldName;
    }
  }, {
    key: 'getInputValue',
    value: function getInputValue() {
      return this.state.customOptions.join('\n');
    }
  }, {
    key: 'getSelectType',
    value: function getSelectType() {
      if (typeof this.state.selectType !== 'undefined') {
        return String(this.state.selectType);
      }
      return String(this.props.data.selectTypeDefault);
    }
  }, {
    key: 'loadSuggestedOptions',
    value: function loadSuggestedOptions() {
      var _this2 = this;

      var resetFetchFailure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var selectedFields = this.props.selectedFields;

      this.setState({
        suggestedOptions: [],
        loading: false
      });

      if (resetFetchFailure) {
        this.setState({
          fetchFailure: false
        });
      }

      if (!selectedFields.length) {
        return [];
      }

      var options = [];
      var _state = this.state,
          suggestedOptionCache = _state.suggestedOptionCache,
          separatorDelimiter = _state.separatorDelimiter,
          fetchFailure = _state.fetchFailure,
          selections = _state.selections;

      var loadPromises = [];

      selectedFields.forEach(function (field) {
        if (suggestedOptionCache[field]) {
          options = options.concat(suggestedOptionCache[field]);
          return;
        }

        if (!fetchFailure || resetFetchFailure) {
          loadPromises.push(_this2.fetchOptionsForField(field));
        }
      });

      if (!loadPromises.length) {
        options = this.splitOptionsBySeparator(options, separatorDelimiter);

        var suggestedOptions = this.prepOptions(options);

        this.setState({
          suggestedOptions: suggestedOptions,
          selections: selections.length ? selections : suggestedOptions,
          loading: false
        });

        return options;
      }

      this.setState({
        loading: true
      });

      Promise.all(loadPromises).then(function () {
        return _this2.loadSuggestedOptions();
      });
      return null;
    }
  }, {
    key: 'prepOptions',
    value: function prepOptions(options) {
      var trimmed = options.map(function (item) {
        if (item === null) {
          return null;
        }
        return String(item).trim().replace(/\s+/g, ' ');
      });

      return trimmed.filter(function (item, index) {
        if (!item || typeof item !== 'string' || item.length === 0) {
          return false;
        }

        if (trimmed.indexOf(item) !== index) {
          return false;
        }

        return true;
      }).sort();
    }
  }, {
    key: 'fetchOptionsForField',
    value: function fetchOptionsForField(field) {
      var _this3 = this;

      var _props$data = this.props.data,
          endpoint = _props$data.endpoint,
          resource = _props$data.resource;


      return _CKANApi2.default.loadDatastore(endpoint, resource).search([field], null, true).then(function (result) {
        var newOptions = [];

        newOptions = result.records.map(function (record) {
          return record[field];
        });

        _this3.setState(function (state) {
          var _extends2;

          return {
            suggestedOptionCache: _extends({}, state.suggestedOptionCache, (_extends2 = {}, _defineProperty(_extends2, field, newOptions), _defineProperty(_extends2, 'fetchFailure', false), _extends2))
          };
        });
      }).catch(function () {
        _this3.setState(function () {
          return {
            loading: false,
            fetchFailure: true
          };
        });
      });
    }
  }, {
    key: 'splitOptionsBySeparator',
    value: function splitOptionsBySeparator(options, delimiter) {
      if (!delimiter || !delimiter.length) {
        return options;
      }

      return options.reduce(function (accumulator, item) {
        return accumulator.concat(item.split(delimiter));
      }, []);
    }
  }, {
    key: 'handleCheckboxChange',
    value: function handleCheckboxChange(event) {
      var selections = this.state.selections;

      var currentCheckedIndex = selections.indexOf(event.target.value);
      var newSelections = selections;

      if (currentCheckedIndex < 0) {
        newSelections.push(event.target.value);
      } else {
        newSelections.splice(currentCheckedIndex, 1);
      }

      this.setState({
        selections: newSelections
      });
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      this.setState({
        customOptions: event.target.value.split('\n').map(function (value) {
          return value.trim();
        })
      });
    }
  }, {
    key: 'handleSelectTypeChange',
    value: function handleSelectTypeChange(event) {
      this.setState({
        selectType: event.target.value
      });
    }
  }, {
    key: 'handleDelimiterChange',
    value: function handleDelimiterChange(event) {
      this.setState({
        separatorDelimiter: event.target.value
      });
    }
  }, {
    key: 'handleExecuteSeparator',
    value: function handleExecuteSeparator() {
      var separatorDelimiter = this.state.separatorDelimiter;

      var options = this.loadSuggestedOptions();

      if (!separatorDelimiter.length) {
        return;
      }

      if (!options) {
        return;
      }

      var newOptions = this.prepOptions(this.splitOptionsBySeparator(options, separatorDelimiter));

      var selections = this.state.selections;
      if (!this.props.value || !this.props.value.selections || !this.props.value.selections.length) {
        selections = newOptions;
      }

      this.setState({
        suggestedOptions: newOptions,
        selections: selections
      });
    }
  }, {
    key: 'handleTryAgain',
    value: function handleTryAgain() {
      this.loadSuggestedOptions(true);
    }
  }, {
    key: 'isCheckboxChecked',
    value: function isCheckboxChecked(value) {
      return this.state.selections.includes(value);
    }
  }, {
    key: 'renderFreetextInput',
    value: function renderFreetextInput() {
      if (this.getSelectType() !== SELECT_TYPE_CUSTOM) {
        return null;
      }

      var description = _i18n2.default._t('CKANPresentedOptionsField.MANUAL_OPTION_DESCRIPTION', 'Options provided must match the data within the selected column. Each option should be ' + 'placed on a new line.');

      return _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { lg: 9, sm: 12 },
          _react2.default.createElement(_reactstrap.Input, {
            type: 'textarea',
            className: 'ckan-presented-options__manual-options',
            name: this.getFieldName('options-custom'),
            onChange: this.handleInputChange,
            value: this.getInputValue()
          })
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { lg: 3, sm: 12 },
          description
        )
      );
    }
  }, {
    key: 'renderHiddenInput',
    value: function renderHiddenInput() {
      var name = this.props.name;
      var _state2 = this.state,
          selections = _state2.selections,
          customOptions = _state2.customOptions,
          separatorDelimiter = _state2.separatorDelimiter;

      var value = {
        customOptions: customOptions,
        selectType: this.getSelectType(),
        selections: selections,
        separatorDelimiter: separatorDelimiter
      };

      return _react2.default.createElement('input', {
        type: 'hidden',
        name: name,
        value: JSON.stringify(value)
      });
    }
  }, {
    key: 'renderCheckboxList',
    value: function renderCheckboxList() {
      var _this4 = this;

      var fieldName = this.getFieldName('options');
      var LoadingComponent = this.props.LoadingComponent;
      var _state3 = this.state,
          loading = _state3.loading,
          suggestedOptions = _state3.suggestedOptions;


      var innerContent = suggestedOptions.length ? suggestedOptions.map(function (option, index) {
        return _react2.default.createElement(
          _reactstrap.FormGroup,
          { key: option, className: 'ckan-presented-options__option-group' },
          _react2.default.createElement(_reactstrap.Input, {
            id: fieldName + '-' + index,
            type: 'checkbox',
            name: fieldName + '[]',
            onChange: _this4.handleCheckboxChange,
            checked: _this4.isCheckboxChecked(option),
            value: option
          }),
          _react2.default.createElement(
            _reactstrap.Label,
            { 'for': fieldName + '-' + index },
            option
          )
        );
      }) : _react2.default.createElement(
        'div',
        null,
        this.renderBadFetchMessage(),
        _react2.default.createElement(
          'span',
          { className: 'ckan-presented-options__options-list-empty' },
          _i18n2.default._t('CKANPresentedOptionsField.PLEASE_SELECT_COLUMNS', 'Please select columns to be able to select from all options')
        )
      );

      return _react2.default.createElement(
        'fieldset',
        { className: 'ckan-presented-options__options-list' },
        loading ? _react2.default.createElement(LoadingComponent, null) : innerContent
      );
    }
  }, {
    key: 'renderSeparator',
    value: function renderSeparator() {
      return _react2.default.createElement(
        _reactstrap.FormGroup,
        { className: 'ckan-presented-options__option-separator' },
        _react2.default.createElement(
          _reactstrap.Label,
          { 'for': 'optionSeparator' },
          _i18n2.default._t('CKANPresentedOptionsField.DELIMITER', 'Delimiter')
        ),
        _react2.default.createElement(
          _reactstrap.InputGroup,
          null,
          _react2.default.createElement(_reactstrap.Input, { value: this.state.separatorDelimiter, onChange: this.handleDelimiterChange }),
          _react2.default.createElement(
            _reactstrap.InputGroupAddon,
            { addonType: 'append' },
            _react2.default.createElement(
              _reactstrap.Button,
              { onClick: this.handleExecuteSeparator, color: 'primary' },
              _i18n2.default._t('CKANPresentedOptionsField.UPDATE', 'Update')
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form__field-description' },
          _i18n2.default._t('CKANPresentedOptionsField.SPLIT_OPTIONS_DESCRIPTION', 'Split options by characters. eg. comma')
        )
      );
    }
  }, {
    key: 'renderBadFetchMessage',
    value: function renderBadFetchMessage() {
      var selectTypes = this.props.data.selectTypes;

      var manualAdd = selectTypes.find(function (type) {
        return type.value.toString() === SELECT_TYPE_CUSTOM;
      }).title;
      var fetchFailure = this.state.fetchFailure;

      var fetchErrorDescription = _i18n2.default._t('CKANPresentedOptionsField.FETCH_FAILURE', 'There was an issue fetching the available options. ');
      var tryAgain = _i18n2.default._t('CKANPresentedOptionsField.RETRY_FETCH', 'Try again?');
      var orManuallyAdd = _i18n2.default.inject(_i18n2.default._t('CKANPresentedOptionsField.OR_MANUAL', ' Or choose to "{manualAdd}"'), { manualAdd: manualAdd });

      return fetchFailure && _react2.default.createElement(
        'div',
        { className: 'ckan-presented-options__fetch-failure alert alert-danger' },
        fetchErrorDescription,
        _react2.default.createElement(
          'a',
          {
            className: 'ckan-presented-options__try-again alert-link',
            onClick: this.handleTryAgain,
            role: 'button',
            tabIndex: '0'
          },
          tryAgain
        ),
        orManuallyAdd && null
      );
    }
  }, {
    key: 'renderCheckboxListAndSeparator',
    value: function renderCheckboxListAndSeparator() {
      if (this.getSelectType() !== SELECT_TYPE_ALL) {
        return null;
      }

      return _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { lg: 9, sm: 12 },
          this.renderCheckboxList()
        ),
        _react2.default.createElement(
          _reactstrap.Col,
          { lg: 3, sm: 12 },
          this.renderSeparator()
        )
      );
    }
  }, {
    key: 'renderRadioOptions',
    value: function renderRadioOptions() {
      var _this5 = this;

      var selectTypes = this.props.data.selectTypes;

      var selectedValue = this.getSelectType();

      return selectTypes.map(function (option) {
        return _react2.default.createElement(
          _reactstrap.FormGroup,
          { key: option.value, className: 'ckan-presented-options__option-group' },
          _react2.default.createElement(
            _reactstrap.Label,
            { 'for': 'option-' + option.value, check: true },
            _react2.default.createElement(_reactstrap.Input, {
              id: 'option-' + option.value,
              type: 'radio',
              name: _this5.getFieldName('select-type'),
              value: option.value,
              onChange: _this5.handleSelectTypeChange,
              checked: selectedValue === String(option.value)
            }),
            option.title
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var extraClass = this.props.extraClass;


      return _react2.default.createElement(
        'div',
        { className: extraClass },
        this.renderRadioOptions(),
        this.renderCheckboxListAndSeparator(),
        this.renderFreetextInput(),
        this.renderHiddenInput()
      );
    }
  }]);

  return CKANPresentedOptionsField;
}(_react.Component);

CKANPresentedOptionsField.propTypes = {
  selectedFields: _propTypes2.default.arrayOf(_propTypes2.default.string),
  data: _propTypes2.default.shape({
    endpoint: _propTypes2.default.string.isRequired,

    resource: _propTypes2.default.string.isRequired,
    selectTypeDefault: _propTypes2.default.string,
    selectTypes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      value: _propTypes2.default.string,
      title: _propTypes2.default.string
    }))
  }),
  extraClass: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.object,
  LoadingComponent: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired
};

CKANPresentedOptionsField.defaultProps = {
  data: {},
  extraClass: '',
  selectedFields: [],
  value: {}
};

exports.Component = CKANPresentedOptionsField;
exports.default = (0, _FieldHolder2.default)((0, _Injector.inject)(['Loading'], function (LoadingComponent) {
  return {
    LoadingComponent: LoadingComponent
  };
}, function () {
  return 'CKAN.Filter.PresentedOptions';
})(CKANPresentedOptionsField));

/***/ }),

/***/ "./client/src/components/CKANResourceLocatorField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CKANApi = __webpack_require__("./client/src/lib/CKANApi.js");

var _CKANApi2 = _interopRequireDefault(_CKANApi);

var _i18n = __webpack_require__(8);

var _i18n2 = _interopRequireDefault(_i18n);

var _reactstrap = __webpack_require__(5);

var _debounce = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _Injector = __webpack_require__(0);

var _FieldHolder = __webpack_require__(3);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

var _URLInput = __webpack_require__("./client/src/components/CKANResourceLocatorField/URLInput.js");

var _URLInput2 = _interopRequireDefault(_URLInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CKANResourceLocatorField = function (_Component) {
  _inherits(CKANResourceLocatorField, _Component);

  function CKANResourceLocatorField(props) {
    _classCallCheck(this, CKANResourceLocatorField);

    var _this = _possibleConstructorReturn(this, (CKANResourceLocatorField.__proto__ || Object.getPrototypeOf(CKANResourceLocatorField)).call(this, props));

    _this.state = {
      uri: _CKANApi2.default.generateURI(props.value || {}) || '',

      spec: props.value || null,

      validationPending: false,

      forceInvalid: false,

      currentDataset: null,

      forceInvalidTimeout: null,

      changesNotified: false
    };

    _this.valueInput = null;

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleResourceSelect = _this.handleResourceSelect.bind(_this);
    _this.handleNotificationOfChanges = _this.handleNotificationOfChanges.bind(_this);

    _this.delayedValidateInput = (0, _debounce2.default)(_this.validateInput.bind(_this), 500);
    return _this;
  }

  _createClass(CKANResourceLocatorField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var uri = this.state.uri;


      if (uri.length) {
        this.validateInput();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.valueInput && JSON.stringify(prevState.spec) !== JSON.stringify(this.state.spec)) {
        var event = new Event('change', { bubbles: true });
        event.simulated = true;
        this.valueInput.dispatchEvent(event);
      }
    }
  }, {
    key: 'getInvalidURLMessage',
    value: function getInvalidURLMessage() {
      var _state = this.state,
          currentDataset = _state.currentDataset,
          spec = _state.spec,
          forceInvalid = _state.forceInvalid;

      var message = { type: 'error' };

      if (!forceInvalid && (!spec || currentDataset)) {
        return null;
      }

      message.value = _i18n2.default._t('CKANResourceLocatorField.INVALID_DATASET_URL', 'The provided data source URL does not appear to be a valid CKAN data set.');

      return message;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var uri = event.target.value;

      clearTimeout(this.state.forceInvalidTimeout);

      this.setState({
        uri: uri,
        forceInvalid: false,
        forceInvalidTimeout: null
      });

      this.delayedValidateInput();

      this.handleNotificationOfChanges();
    }
  }, {
    key: 'handleResourceSelect',
    value: function handleResourceSelect(event, _ref) {
      var value = _ref.value;

      this.setState({
        spec: _extends({}, this.state.spec, {
          resource: value
        })
      });

      this.handleNotificationOfChanges();
    }
  }, {
    key: 'handleNotificationOfChanges',
    value: function handleNotificationOfChanges() {
      var value = this.props.value;
      var changesNotified = this.state.changesNotified;

      if (changesNotified || !value || value.length === 0) {
        return;
      }

      window.alert(_i18n2.default._t('CKANResourceLocatorField.CHANGES_WARNING', 'Please note: Changing the data source URL or resource will clear all' + ' existing columns and filters when saving the page.'));
      this.setState({ changesNotified: true });
    }
  }, {
    key: 'validateInput',
    value: function validateInput() {
      var _this2 = this;

      var uri = this.state.uri;
      var defaultEndpoint = this.props.defaultEndpoint;

      var spec = _CKANApi2.default.parseURI(uri);

      if (spec && !spec.endpoint && defaultEndpoint) {
        spec.endpoint = defaultEndpoint;

        if (spec.dataset) {
          this.setState({
            uri: _CKANApi2.default.generateURI(spec)
          });
        }
      }

      if (!spec || !spec.endpoint) {
        this.setState({
          spec: null,

          forceInvalidTimeout: setTimeout(function () {
            return _this2.setState({
              forceInvalid: true
            });
          }, 2000)
        });

        return;
      }

      this.setState({
        validationPending: true
      });

      var handleErrorResponse = function handleErrorResponse() {
        return _this2.setState({
          validationPending: false,
          spec: null,
          currentDataset: null
        });
      };

      if (spec.resource) {
        if (!spec.dataset) {
          _CKANApi2.default.loadResource(spec.endpoint, spec.resource).then(function (resource) {
            var newSpec = _extends({}, spec, {
              dataset: resource.package_id
            });

            _this2.setState({
              spec: newSpec,
              uri: _CKANApi2.default.generateURI(newSpec) || ''
            });

            _this2.validateInput();
          }, handleErrorResponse);

          return;
        }
      }

      _CKANApi2.default.loadDataset(spec.endpoint, spec.dataset).then(function (dataset) {
        var newUri = uri;
        if (dataset.name) {
          spec.dataset = dataset.name;
          newUri = _CKANApi2.default.generateURI(spec);
        }

        if (spec.resource && dataset) {
          newUri = newUri.substring(0, newUri.lastIndexOf('/', newUri.lastIndexOf('/') - 1));
        }

        if (!spec.resource && dataset) {
          var resource = dataset.resources.find(function (res) {
            return res.datastore_active;
          });
          spec.resource = resource && resource.id;
        }

        _this2.setState({
          uri: newUri,
          validationPending: false,
          spec: spec,
          currentDataset: dataset || null
        });
      }, handleErrorResponse);
    }
  }, {
    key: 'renderResourceSelect',
    value: function renderResourceSelect() {
      var _state2 = this.state,
          uri = _state2.uri,
          currentDataset = _state2.currentDataset,
          spec = _state2.spec;
      var _props = this.props,
          SelectComponent = _props.SelectComponent,
          name = _props.name;

      var sharedProps = {
        title: _i18n2.default._t('CKANResourceLocatorField.RESOURCE_NAME', 'Resource name'),
        extraClass: 'form-field--no-divider stacked'
      };

      if (!currentDataset || !uri || !uri.length) {
        var Field = (0, _FieldHolder2.default)(_reactstrap.Input);
        return _react2.default.createElement(Field, _extends({}, sharedProps, { type: 'text', disabled: true }));
      }

      var unavailableMessage = _i18n2.default._t('CKANResourceLocatorField.INVALID_RESOURCE_SELECTION', 'Datastore is not available for the selected resource.');

      var resources = currentDataset.resources.map(function (resource) {
        return {
          value: resource.id,
          title: resource.name || resource.description || null,
          disabled: !resource.datastore_active,

          description: !resource.datastore_active ? unavailableMessage : null
        };
      });

      var selectedResource = resources.find(function (resource) {
        return resource.value === spec.resource;
      });
      var message = null;

      if (selectedResource && selectedResource.disabled) {
        message = {
          type: 'error',
          value: unavailableMessage
        };
      }

      return _react2.default.createElement(SelectComponent, _extends({}, sharedProps, {
        message: message,
        className: { 'is-invalid': message, 'no-change-track': true },
        name: name + '-resource-name',
        source: resources,
        value: spec.resource,
        onChange: this.handleResourceSelect
      }));
    }
  }, {
    key: 'renderHiddenInput',
    value: function renderHiddenInput() {
      var _this3 = this;

      var _state3 = this.state,
          spec = _state3.spec,
          validationMessage = _state3.validationMessage;

      var value = !spec || validationMessage ? null : JSON.stringify(spec);

      return _react2.default.createElement(_reactstrap.Input, {
        name: this.props.name,
        type: 'hidden',
        value: value,
        innerRef: function innerRef(input) {
          _this3.valueInput = input;
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          uri = _state4.uri,
          validationPending = _state4.validationPending;

      var invalidMessage = this.getInvalidURLMessage();

      var invalid = !!invalidMessage;

      var inputProps = {
        title: _i18n2.default._t('CKANResourceLocatorField.DATA_SOURCE_URL', 'Data source URL'),
        extraClass: 'form-field--no-divider stacked',
        message: invalidMessage,
        value: uri,
        invalid: invalid,
        onChange: this.handleChange
      };

      var inputContainerClasses = (0, _classnames2.default)('ckan-resource-locator__uri-input', {
        'ckan-resource-locator__uri-input--loading': validationPending
      });

      return _react2.default.createElement(
        'div',
        { className: 'ckan-resource-locator' },
        _react2.default.createElement(
          'div',
          { className: inputContainerClasses },
          _react2.default.createElement(_URLInput2.default, inputProps)
        ),
        _react2.default.createElement(
          'div',
          { className: 'ckan-resource-locator__big-slash' },
          '/'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ckan-resource-locator__resource-select' },
          this.renderResourceSelect()
        ),
        this.renderHiddenInput()
      );
    }
  }]);

  return CKANResourceLocatorField;
}(_react.Component);

CKANResourceLocatorField.propTypes = {
  name: _propTypes2.default.string.isRequired,

  value: _propTypes2.default.object,

  defaultEndpoint: _propTypes2.default.string,

  SelectComponent: _propTypes2.default.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func])
};

exports.Component = CKANResourceLocatorField;
exports.default = (0, _FieldHolder2.default)((0, _Injector.inject)(['SingleSelectField'], function (SelectComponent) {
  return {
    SelectComponent: SelectComponent
  };
}, function () {
  return 'CKAN.ResourceLocatorField';
})(CKANResourceLocatorField));

/***/ }),

/***/ "./client/src/components/CKANResourceLocatorField/URLInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FieldHolder = __webpack_require__(3);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _reactstrap = __webpack_require__(5);

var _classnames = __webpack_require__(7);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var URLInput = function (_Component) {
  _inherits(URLInput, _Component);

  function URLInput(props) {
    _classCallCheck(this, URLInput);

    var _this = _possibleConstructorReturn(this, (URLInput.__proto__ || Object.getPrototypeOf(URLInput)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(URLInput, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var onChange = this.props.onChange;


      if (typeof onChange === 'function') {
        onChange(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          invalid = _props.invalid,
          value = _props.value;

      var props = {
        className: (0, _classnames2.default)(className, 'no-change-track', { 'is-invalid': invalid }),
        value: value,
        type: 'text',
        onChange: this.handleChange
      };

      return _react2.default.createElement(_reactstrap.Input, props);
    }
  }]);

  return URLInput;
}(_react.Component);

URLInput.propTypes = {
  value: _propTypes2.default.string,

  invalid: _propTypes2.default.bool,

  className: _propTypes2.default.oneOf([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),

  onChange: _propTypes2.default.func
};

URLInput.defaultProps = {
  value: '',
  invalid: false
};

exports.default = (0, _FieldHolder2.default)(URLInput);

/***/ }),

/***/ "./client/src/components/CKANResultConditionsField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(0);

var _reactstrap = __webpack_require__(5);

var _FieldHolder = __webpack_require__(3);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CKANResultConditionsField = function (_Component) {
  _inherits(CKANResultConditionsField, _Component);

  function CKANResultConditionsField(props) {
    var _;

    _classCallCheck(this, CKANResultConditionsField);

    var _this = _possibleConstructorReturn(this, (CKANResultConditionsField.__proto__ || Object.getPrototypeOf(CKANResultConditionsField)).call(this, props));

    var value = props.value && props.value[0] ? props.value[0] : {
      'match-select': props.matchTypeDefault,
      'match-test': ''
    };

    _this.state = {
      0: (_ = {}, _defineProperty(_, _this.getFieldName('match-select', props), value['match-select']), _defineProperty(_, _this.getFieldName('match-text', props), value['match-text']), _)
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(CKANResultConditionsField, [{
    key: 'getFieldName',
    value: function getFieldName(fieldName) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var name = props.name || this.props.name;
      return name + '-' + fieldName;
    }
  }, {
    key: 'getSelectValue',
    value: function getSelectValue() {
      return this.state[0][this.getFieldName('match-select')];
    }
  }, {
    key: 'getInputValue',
    value: function getInputValue() {
      return this.state[0][this.getFieldName('match-text')];
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return {
        0: {
          'match-select': this.getSelectValue(),
          'match-text': this.getInputValue()
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var currentState = this.state;

      this.setState({
        0: _extends({}, currentState[0], _defineProperty({}, event.target.name, event.target.value))
      });
    }
  }, {
    key: 'renderSelect',
    value: function renderSelect() {
      var _props = this.props,
          SelectComponent = _props.SelectComponent,
          source = _props.data.source;


      return _react2.default.createElement(SelectComponent, {
        className: ['no-change-track', 'ckan-result-conditions__match-select'],
        name: this.getFieldName('match-select'),
        source: source,
        value: this.getSelectValue(),
        onChange: this.handleChange
      });
    }
  }, {
    key: 'renderTextInput',
    value: function renderTextInput() {
      var TextFieldComponent = this.props.TextFieldComponent;


      return _react2.default.createElement(TextFieldComponent, {
        name: this.getFieldName('match-text'),
        className: ['no-change-track', 'ckan-result-conditions__match-text'],
        onChange: this.handleChange,
        value: this.getInputValue()
      });
    }
  }, {
    key: 'renderHiddenInput',
    value: function renderHiddenInput() {
      var name = this.props.name;


      return _react2.default.createElement('input', {
        type: 'hidden',
        name: name,
        value: JSON.stringify(this.getValue())
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ckan-result-conditions' },
        _react2.default.createElement(
          _reactstrap.Row,
          { form: true },
          _react2.default.createElement(
            _reactstrap.Col,
            { md: 4, className: 'ckan-result-conditions__column-left' },
            this.renderSelect()
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { md: 8, className: 'ckan-result-conditions__column-right' },
            this.renderTextInput()
          )
        ),
        this.renderHiddenInput()
      );
    }
  }]);

  return CKANResultConditionsField;
}(_react.Component);

CKANResultConditionsField.propTypes = {
  name: _propTypes2.default.string,
  value: _propTypes2.default.object,
  data: _propTypes2.default.shape({
    source: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      value: _propTypes2.default.string,
      title: _propTypes2.default.string
    })),
    matchTypeDefault: _propTypes2.default.string
  }),
  TextFieldComponent: _propTypes2.default.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]).isRequired,
  SelectComponent: _propTypes2.default.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]).isRequired
};

CKANResultConditionsField.defaultProps = {
  value: {},
  data: {}
};

exports.Component = CKANResultConditionsField;
exports.default = (0, _FieldHolder2.default)((0, _Injector.inject)(['SingleSelectField', 'TextField'], function (SelectComponent, TextFieldComponent) {
  return {
    SelectComponent: SelectComponent,
    TextFieldComponent: TextFieldComponent
  };
}, function () {
  return 'CKAN.Column.ResultConditionsField';
})(CKANResultConditionsField));

/***/ }),

/***/ "./client/src/legacy/CKANPresentedOptionsField-entwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

_jquery2.default.entwine('ss', function ($) {
  $('.ckan-presented-options__container').entwine({
    FieldIDs: [],
    Mounted: false,

    renderComponent: function renderComponent() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var context = {};
      var PresentedOptionsComponent = (0, _Injector.loadComponent)('CKANPresentedOptionsField', context);
      var schema = this.data('schema');
      var fieldMap = schema.data.fieldMap;

      var fields = this.getFieldIDs().map(function (id) {
        return fieldMap[id] || null;
      });

      var extraClass = schema.extraClass,
          forwardedProps = _objectWithoutProperties(schema, ['extraClass']);

      var props = _extends({
        name: this.attr('name'),
        value: value ? JSON.parse(value) : undefined,
        selectedFields: fields
      }, forwardedProps);

      _reactDom2.default.render(_react2.default.createElement(PresentedOptionsComponent, props), this[0]);

      this.setMounted(true);
    },
    setFields: function setFields(fields) {
      if (!Array.isArray(fields)) {
        return;
      }
      this.setFieldIDs(fields);
      if (this.getMounted()) {
        this.renderComponent();
      }
    }
  });

  $('.js-injector-boot .ckan-presented-options__container').entwine({
    onmatch: function onmatch() {
      var temporaryInput = this.children('input:first');

      if (!temporaryInput.length) {
        return;
      }

      this.renderComponent(temporaryInput.val());
    },
    onunmatch: function onunmatch() {
      _reactDom2.default.unmountComponentAtNode(this[0]);
      this.setMounted(false);
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/CKANResourceFilterForm-entwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('select.ckan-columns__filter-fields').entwine({
    onmatch: function onmatch() {
      if (this.val().length) {
        var presentedOptions = this.closest('form').find('.ckan-presented-options__container');
        presentedOptions.setFields(this.val());
      }
    },
    onchange: function onchange() {
      var presentedOptions = this.closest('form').find('.ckan-presented-options__container');
      presentedOptions.setFields(this.val() || []);
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/CKANResourceLocatorField-entwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.js-injector-boot .ckan-resource-locator__container').entwine({
    onmatch: function onmatch() {
      var context = {};
      var CKANResourceLocatorField = (0, _Injector.loadComponent)('CKANResourceLocatorField', context);
      var schemaData = this.data('schema');

      var value = this.children('input:first').val();
      var props = _extends({
        name: this.attr('name')
      }, schemaData, {
        defaultEndpoint: schemaData.defaultEndpoint || null,
        description: schemaData.description.html || '',
        value: value ? JSON.parse(value) : undefined
      });

      _reactDom2.default.render(_react2.default.createElement(CKANResourceLocatorField, props), this[0]);
    },
    onunmatch: function onunmatch() {
      _reactDom2.default.unmountComponentAtNode(this[0]);
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/CKANResultConditionsField-entwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.js-injector-boot .ckan-result-conditions__container').entwine({
    onmatch: function onmatch() {
      var context = {};
      var CKANResultConditionsField = (0, _Injector.loadComponent)('CKANResultConditionsField', context);

      var temporaryInput = this.children('input:first');

      if (!temporaryInput.length) {
        return;
      }

      var value = temporaryInput.val();
      var props = _extends({
        name: this.attr('name'),
        value: value ? JSON.parse(value) : undefined
      }, this.data('schema'));

      _reactDom2.default.render(_react2.default.createElement(CKANResultConditionsField, props), this[0]);
    },
    onunmatch: function onunmatch() {
      _reactDom2.default.unmountComponentAtNode(this[0]);
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/GridFieldResourceTitle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.ckan-columns__edit-resource').entwine({
    onclick: function onclick(e) {
      e.preventDefault();
      $('.ckan-resource-locator__container').toggleClass('hide');
    }
  });
});

/***/ }),

/***/ "./client/src/legacy/ResourceFilter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.field.ckan-columns__filter-fields').entwine({
    onmatch: function onmatch() {
      var checkbox = this.prev('.ckan-columns__all-columns');
      if (checkbox.length) {
        checkbox.toggleSourcesField();
      }
    }
  });

  $('.form-check-input.ckan-columns__all-columns').entwine({
    onmatch: function onmatch() {
      this.toggleSourcesField();
    },
    onchange: function onchange() {
      this.toggleSourcesField();
    },
    toggleSourcesField: function toggleSourcesField() {
      var sources = this.closest('.field').next('.ckan-columns__filter-fields');
      if (!sources.length) {
        return;
      }

      if (this.is(':checked')) {
        sources.hide();
      } else {
        sources.show();
      }
    }
  });
});

/***/ }),

/***/ "./client/src/lib/CKANApi.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = __webpack_require__(9);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _DataStore = __webpack_require__("./client/src/lib/CKANApi/DataStore.js");

var _DataStore2 = _interopRequireDefault(_DataStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CKAN_VERSION = 3;

var CKANApi = function () {
  function CKANApi() {
    _classCallCheck(this, CKANApi);
  }

  _createClass(CKANApi, null, [{
    key: 'parseURI',
    value: function parseURI(uri) {
      if (typeof uri !== 'string' || !uri.length) {
        return false;
      }

      var preppedUri = uri;

      var protocol = 'https://';

      var protocolMatch = preppedUri.match(/^https?:\/\//);
      if (protocolMatch) {
        protocol = protocolMatch[0];
        preppedUri = preppedUri.substr(protocol.length);
      }

      if (preppedUri.endsWith('/')) {
        preppedUri = preppedUri.substring(0, preppedUri.length - 1);
      }

      var parts = preppedUri.split('/');

      if (parts.length >= 5) {
        parts.splice(0, parts.length - 4, parts.slice(0, parts.length - 4).join('/'));
        return {
          endpoint: '' + protocol + parts[0] + '/',
          dataset: parts[2],
          resource: parts[4]
        };
      }

      if (parts.length === 4) {
        parts.splice(0, 2, parts.slice(0, 2).join('/'));
      }

      if (parts.length === 3) {
        return {
          endpoint: '' + protocol + parts[0] + '/',
          dataset: parts[2],
          resource: null
        };
      }

      if (preppedUri.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)) {
        return {
          endpoint: null,
          dataset: null,
          resource: preppedUri
        };
      }

      if (protocolMatch) {
        return false;
      }

      if (preppedUri.match(/^[\d\w-]+$/i)) {
        return {
          endpoint: null,
          dataset: preppedUri,
          resource: null
        };
      }

      return false;
    }
  }, {
    key: 'generateURI',
    value: function generateURI(spec) {
      if ((typeof spec === 'undefined' ? 'undefined' : _typeof(spec)) !== 'object' || !spec.endpoint || !spec.dataset) {
        return false;
      }

      var endpoint = spec.endpoint;

      try {
        new URL(endpoint);
      } catch (e) {
        return false;
      }

      if (endpoint.slice(-1) !== '/') {
        endpoint += '/';
      }

      var uri = endpoint + 'dataset/' + spec.dataset;

      if (spec.resource) {
        return uri + '/resource/' + spec.resource;
      }

      return uri;
    }
  }, {
    key: 'loadDataset',
    value: function loadDataset(endpoint, dataset) {
      return this.makeRequest(endpoint, 'package_show', {
        id: dataset
      }).then(function (response) {
        return response.json().then(function (json) {
          if (!json.success || !json.result) {
            return false;
          }

          var result = json.result;

          if (result.name !== dataset && result.id !== dataset) {
            return false;
          }

          return result;
        });
      }, function () {
        return Promise.resolve(false);
      });
    }
  }, {
    key: 'loadResource',
    value: function loadResource(endpoint, resource) {
      return this.makeRequest(endpoint, 'resource_show', {
        id: resource
      }).then(function (response) {
        return response.json().then(function (json) {
          if (!json.success) {
            return false;
          }

          return json.result;
        });
      }, function () {
        return Promise.resolve(false);
      });
    }
  }, {
    key: 'validateEndpoint',
    value: function validateEndpoint(endpoint) {
      return this.makeRequest(endpoint, 'site_read').then(function (response) {
        if (!response.ok) {
          return Promise.resolve(false);
        }
        return response.json().then(function (json) {
          return json && json.success;
        });
      }, function () {
        return Promise.resolve(false);
      });
    }
  }, {
    key: 'loadDatastore',
    value: function loadDatastore(endpoint, resource) {
      return new _DataStore2.default(endpoint, resource);
    }
  }, {
    key: 'makeRequest',
    value: function makeRequest(endpoint, action, requestVars) {
      var url = endpoint + 'api/' + CKAN_VERSION + '/action/' + action;

      if (requestVars && Object.values(requestVars).length) {
        url += '?' + Object.entries(requestVars).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return key + '=' + value;
        }).join('&');
      }

      return (0, _isomorphicFetch2.default)(url);
    }
  }]);

  return CKANApi;
}();

exports.default = CKANApi;

/***/ }),

/***/ "./client/src/lib/CKANApi/DataStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CKANApi = __webpack_require__("./client/src/lib/CKANApi.js");

var _CKANApi2 = _interopRequireDefault(_CKANApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class(endpoint, resource) {
    _classCallCheck(this, _class);

    this.endpoint = endpoint;
    this.resource = resource;
  }

  _createClass(_class, [{
    key: 'search',
    value: function search(fields) {
      var term = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var distinct = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
      var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      if (!Array.isArray(fields) || !fields.length) {
        return Promise.reject(false);
      }

      var options = {
        id: this.resource,
        fields: fields.map(encodeURIComponent).join(','),

        include_total: true
      };

      var termType = term === null ? null : typeof term === 'undefined' ? 'undefined' : _typeof(term);
      if (term !== null && termType !== 'string' && termType !== 'object') {
        return Promise.resolve(false);
      }

      if (termType === 'string' && term.length) {
        options.q = term;
      } else if (termType === 'object') {
        var terms = Object.entries(term);

        if (terms.length) {
          options.q = JSON.stringify(term);
        }
      }

      if (distinct) {
        options.distinct = true;
      }
      options.limit = limit;
      options.offset = offset;

      return _CKANApi2.default.makeRequest(this.endpoint, 'datastore_search', options).then(function (response) {
        return response.json().then(function (result) {
          if (!result.success) {
            return false;
          }

          return {
            records: result.result.records,
            total: result.result.total
          };
        });
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    now = __webpack_require__("./node_modules/lodash/now.js"),
    toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = classnames;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = IsomorphicFetch;

/***/ })

/******/ });
//# sourceMappingURL=bundle-admin.js.map