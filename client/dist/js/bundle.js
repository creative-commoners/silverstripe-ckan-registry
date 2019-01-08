!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/bundles/bundle.js")}({"./client/src/boot/index.js":function(e,t,n){"use strict";var o=n("./client/src/boot/registerComponents.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(o);window.document.addEventListener("DOMContentLoaded",function(){(0,r.default)()})},"./client/src/boot/registerComponents.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=o(r),i=n("./client/src/components/CKANResourceLocatorField.js"),l=o(i),u=n("./client/src/components/CKANPresentedOptions.js"),s=o(u),c=n("./client/src/components/CKANResultConditionsField.js"),d=o(c);t.default=function(){a.default.component.registerMany({CKANResourceLocatorField:l.default,CKANPresentedOptions:s.default,CKANResultConditionsField:d.default})}},"./client/src/bundles/bundle.js":function(e,t,n){"use strict";n("./client/src/legacy/CKANResourceLoaderField-entwine.js"),n("./client/src/legacy/CKANPresentedOptions-entwine.js"),n("./client/src/legacy/CKANResultConditionsField-entwine.js"),n("./client/src/legacy/CKANResourceFilterForm-entwine.js"),n("./client/src/legacy/ResourceFilter.js"),n("./client/src/boot/index.js")},"./client/src/components/CKANPresentedOptions.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(1),f=o(d),p=n(4),h=o(p),m=n(0),v=n(5),g=n(3),y=o(g),b=n("./client/src/lib/CKANApi.js"),_=o(b),C=n(8),j=o(C),O=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),o=e.value||{};return n.state=s({customOptions:[],selectType:e.selectTypeDefault,selections:{},suggestedOptions:[],suggestedOptionCache:{},loading:!1,fetchFailure:!1,separatorDelimiter:""},o),n.handleCheckboxChange=n.handleCheckboxChange.bind(n),n.handleInputChange=n.handleInputChange.bind(n),n.handleSelectTypeChange=n.handleSelectTypeChange.bind(n),n.handleDelimiterChange=n.handleDelimiterChange.bind(n),n.handleExecuteSeparator=n.handleExecuteSeparator.bind(n),n.handleTryAgain=n.handleTryAgain.bind(n),n}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadSuggestedOptions()}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedFields,n=e.selectedFields;if((void 0===t?"undefined":u(t))!==(void 0===n?"undefined":u(n))||t.length!==n.length)return void this.loadSuggestedOptions();0!==n.filter(function(e){return!t.includes(e)}).length&&this.loadSuggestedOptions()}},{key:"getFieldName",value:function(e){return this.props.name+"-"+e}},{key:"getInputValue",value:function(){return this.state.customOptions.join("\n")}},{key:"getSelectType",value:function(){return void 0!==this.state.selectType?String(this.state.selectType):String(this.props.data.selectTypeDefault)}},{key:"loadSuggestedOptions",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.props.selectedFields;if(this.setState({suggestedOptions:[],loading:!1}),t&&this.setState({fetchFailure:!1}),!n.length)return[];var o=[],r=this.state,a=r.suggestedOptionCache,i=r.separatorDelimiter,l=r.fetchFailure,u=[];if(n.forEach(function(n){if(a[n])return void(o=o.concat(a[n]));l&&!t||u.push(e.fetchOptionsForField(n))}),!u.length){o=this.splitOptionsBySeparator(o,i);var s=this.prepOptions(o);return this.setState({suggestedOptions:s,loading:!1}),o}return this.setState({loading:!0}),Promise.all(u).then(function(){return e.loadSuggestedOptions()}),null}},{key:"prepOptions",value:function(e){return e.filter(function(t,n){return!(!t||"string"!=typeof t||0===t.length)&&e.indexOf(t)===n}).map(function(e){return e.trim().replace(/\s+/g," ")}).sort()}},{key:"fetchOptionsForField",value:function(e){var t=this,n=this.props.data,o=n.endpoint,a=n.resource;return _.default.loadDatastore(o,a).search([e],null,!0).then(function(n){var o=[];o=n.records.map(function(t){return t[e]}),t.setState(function(t){var n;return{suggestedOptionCache:s({},t.suggestedOptionCache,(n={},r(n,e,o),r(n,"fetchFailure",!1),n))}})}).catch(function(){t.setState(function(){return{loading:!1,fetchFailure:!0}})})}},{key:"splitOptionsBySeparator",value:function(e,t){return t&&t.length?e.reduce(function(e,n){return e.concat(n.split(t))},[]):e}},{key:"handleCheckboxChange",value:function(e){var t=this.state,n=t.selections[e.target.value]||0;this.setState({selections:s({},t.selections,r({},e.target.value,!n||void 0))})}},{key:"handleInputChange",value:function(e){this.setState({customOptions:e.target.value.split("\n").map(function(e){return e.trim()})})}},{key:"handleSelectTypeChange",value:function(e){this.setState({selectType:e.target.value})}},{key:"handleDelimiterChange",value:function(e){this.setState({separatorDelimiter:e.target.value})}},{key:"handleExecuteSeparator",value:function(){var e=this.state.separatorDelimiter,t=this.loadSuggestedOptions();if(e.length&&t){var n=this.prepOptions(this.splitOptionsBySeparator(t,e));this.setState({suggestedOptions:n})}}},{key:"handleTryAgain",value:function(){this.loadSuggestedOptions(!0)}},{key:"isCheckboxChecked",value:function(e){return!!this.state.selections[e]||0}},{key:"renderFreetextInput",value:function(){if("1"!==this.getSelectType())return null;var e=j.default._t("CKANPresentedOptions.MANUAL_OPTION_DESCRIPTION","Options provided must match the data within the selected column. Each option should be placed on a new line.");return f.default.createElement(v.Row,null,f.default.createElement(v.Col,{lg:9,sm:12},f.default.createElement(v.Input,{type:"textarea",className:"ckan-presented-options__manual-options",name:this.getFieldName("options-custom"),onChange:this.handleInputChange,value:this.getInputValue()})),f.default.createElement(v.Col,{lg:3,sm:12},e))}},{key:"renderHiddenInput",value:function(){var e=this.props.name,t=this.state,n=t.selections,o=t.customOptions,r=t.separatorDelimiter,a={customOptions:o,selectType:this.getSelectType(),selections:n,separatorDelimiter:r};return f.default.createElement("input",{type:"hidden",name:e,value:JSON.stringify(a)})}},{key:"renderCheckboxList",value:function(){var e=this,t=this.getFieldName("options"),n=this.props.LoadingComponent,o=this.state,r=o.loading,a=o.suggestedOptions,i=a.length?a.map(function(n,o){return f.default.createElement(v.FormGroup,{key:n,className:"ckan-presented-options__option-group"},f.default.createElement(v.Input,{id:t+"-"+o,type:"checkbox",name:t+"[]",onChange:e.handleCheckboxChange,checked:e.isCheckboxChecked(n),value:n}),f.default.createElement(v.Label,{for:t+"-"+o},n))}):f.default.createElement("div",null,this.renderBadFetchMessage(),f.default.createElement("span",{className:"ckan-presented-options__options-list-empty"},j.default._t("CKANPresentedOptions.PLEASE_SELECT_COLUMNS","Please select columns to be able to select from all options")));return f.default.createElement("fieldset",{className:"ckan-presented-options__options-list"},r?f.default.createElement(n,null):i)}},{key:"renderSeparator",value:function(){return f.default.createElement(v.FormGroup,{className:"ckan-presented-options__option-separator"},f.default.createElement(v.Label,{for:"optionSeparator"},"Delimiter"),f.default.createElement(v.InputGroup,null,f.default.createElement(v.Input,{value:this.state.separatorDelimiter,onChange:this.handleDelimiterChange}),f.default.createElement(v.InputGroupAddon,{addonType:"append"},f.default.createElement(v.Button,{onClick:this.handleExecuteSeparator,color:"primary"},j.default._t("CKANPresentedOptions.UPDATE","Update")))),f.default.createElement("div",{className:"form__field-description"},j.default._t("CKANPresentedOptions.SPLIT_OPTIONS_DESCRIPTION","Split options by characters. eg. comma")))}},{key:"renderBadFetchMessage",value:function(){var e=this.props.data.selectTypes,t=e.find(function(e){return"1"===e.value.toString()}).title,n=this.state.fetchFailure,o=j.default._t("CKANPresentedOptions.FETCH_FAILURE","There was an issue fetching the available options. "),r=j.default._t("CKANPresentedOptions.RETRY_FETCH","Try again?"),a=j.default.inject(j.default._t("CKANPresentedOptions.OR_MANUAL",' Or choose to "{manualAdd}"'),{manualAdd:t});return n&&f.default.createElement("div",{className:"ckan-presented-options__fetch-failure alert alert-danger"},o,f.default.createElement("a",{className:"ckan-presented-options__try-again alert-link",onClick:this.handleTryAgain,role:"button",tabIndex:"0"},r),a&&null)}},{key:"renderCheckboxListAndSeparator",value:function(){return"0"!==this.getSelectType()?null:f.default.createElement(v.Row,null,f.default.createElement(v.Col,{lg:9,sm:12},this.renderCheckboxList()),f.default.createElement(v.Col,{lg:3,sm:12},this.renderSeparator()))}},{key:"renderRadioOptions",value:function(){var e=this,t=this.props.data.selectTypes,n=this.getSelectType();return t.map(function(t){return f.default.createElement(v.FormGroup,{key:t.value,className:"ckan-presented-options__option-group"},f.default.createElement(v.Label,{for:"option-"+t.value,check:!0},f.default.createElement(v.Input,{id:"option-"+t.value,type:"radio",name:e.getFieldName("select-type"),value:t.value,onChange:e.handleSelectTypeChange,checked:n===String(t.value)}),t.title))})}},{key:"render",value:function(){var e=this.props.extraClass;return f.default.createElement("div",{className:e},this.renderRadioOptions(),this.renderCheckboxListAndSeparator(),this.renderFreetextInput(),this.renderHiddenInput())}}]),t}(d.Component);O.propTypes={selectedFields:h.default.arrayOf(h.default.string),data:h.default.shape({endpoint:h.default.string.isRequired,resource:h.default.string.isRequired,selectTypeDefault:h.default.string,selectTypes:h.default.arrayOf(h.default.shape({value:h.default.string,title:h.default.string}))}),extraClass:h.default.string,name:h.default.string,value:h.default.object,LoadingComponent:h.default.oneOfType([h.default.string,h.default.func]).isRequired},O.defaultProps={data:{},extraClass:"",selectedFields:[],value:{}},t.Component=O,t.default=(0,y.default)((0,m.inject)(["TextField","FormAction","Loading"],function(e,t,n){return{TextFieldComponent:e,FormActionComponent:t,LoadingComponent:n}},function(){return"CKAN.Filter.PresentedOptions"})(O))},"./client/src/components/CKANResourceLocatorField.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(1),c=o(s),d=n(4),f=o(d),p=n("./client/src/lib/CKANApi.js"),h=o(p),m=n(8),v=o(m),g=n(5),y=n("./node_modules/lodash/debounce.js"),b=o(y),_=n(0),C=n(3),j=o(C),O=n(7),S=o(O),k=n("./client/src/components/CKANResourceLocatorField/URLInput.js"),N=o(k),T=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={uri:h.default.generateURI(e.value||{})||"",spec:e.value||null,validationPending:!1,forceInvalid:!1,currentDataset:null,forceInvalidTimeout:null},n.handleChange=n.handleChange.bind(n),n.handleResourceSelect=n.handleResourceSelect.bind(n),n.delayedValidateInput=(0,b.default)(n.validateInput.bind(n),500),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.state.uri.length&&this.validateInput()}},{key:"getInvalidURLMessage",value:function(){var e=this.state,t=e.currentDataset,n=e.spec,o=e.forceInvalid,r={type:"error"};return o||n&&!t?(r.value=v.default._t("CKANResourceLocatorField.INVALID_DATASET_URL","The provided data source URL does not appear to be a valid CKAN data set."),r):null}},{key:"handleChange",value:function(e){var t=e.target.value;clearTimeout(this.state.forceInvalidTimeout),this.setState({uri:t,forceInvalid:!1,forceInvalidTimeout:null}),this.delayedValidateInput()}},{key:"handleResourceSelect",value:function(e,t){var n=t.value;this.setState({spec:l({},this.state.spec,{resource:n})})}},{key:"validateInput",value:function(){var e=this,t=this.state.uri,n=this.props.defaultEndpoint,o=h.default.parseURI(t);if(o&&!o.endpoint&&n&&(o.endpoint=n,o.dataset&&this.setState({uri:h.default.generateURI(o)})),!o||!o.endpoint)return void this.setState({spec:null,forceInvalidTimeout:setTimeout(function(){return e.setState({forceInvalid:!0})},2e3)});this.setState({validationPending:!0});var r=function(){return e.setState({validationPending:!1,spec:null,currentDataset:null})};if(o.resource&&!o.dataset)return void h.default.loadResource(o.endpoint,o.resource).then(function(t){var n=l({},o,{dataset:t.package_id});e.setState({spec:n,uri:h.default.generateURI(n)||""}),e.validateInput()},r);h.default.loadDataset(o.endpoint,o.dataset).then(function(n){var r=t;if(n.name&&(o.dataset=n.name,r=h.default.generateURI(o)),o.resource&&n&&(r=r.substring(0,r.lastIndexOf("/",r.lastIndexOf("/")-1))),!o.resource&&n){var a=n.resources.find(function(e){return e.datastore_active});o.resource=a&&a.package_id}e.setState({uri:r,validationPending:!1,spec:o,currentDataset:n||null})},r)}},{key:"renderResourceSelect",value:function(){var e=this.state,t=e.uri,n=e.currentDataset,o=e.spec,r=this.props,a=r.SelectComponent,i=r.name,u={title:"Resource name",extraClass:"form-field--no-divider stacked"};if(!n||!t||!t.length){var s=(0,j.default)(g.Input);return c.default.createElement(s,l({},u,{type:"text",disabled:!0}))}var d=v.default._t("CKANResourceLocatorField.INVALID_RESOURCE_SELECTION","Datastore is not available for the selected resource."),f=n.resources.map(function(e){return{value:e.id,title:e.name||e.description||null,disabled:!e.datastore_active,description:e.datastore_active?null:d}}),p=f.find(function(e){return e.value===o.resource}),h=null;return p&&p.disabled&&(h={type:"error",value:d}),c.default.createElement(a,l({},u,{message:h,className:{"is-invalid":h,"no-change-track":!0},name:i+"-resource-name",source:f,value:o.resource,onChange:this.handleResourceSelect}))}},{key:"renderHiddenInput",value:function(){var e=this.state,t=e.spec,n=e.validationMessage,o=!t||n?null:JSON.stringify(t);return c.default.createElement(g.Input,{name:this.props.name,type:"hidden",value:o})}},{key:"render",value:function(){var e=this.state,t=e.uri,n=e.validationPending,o=this.getInvalidURLMessage(),r=!!o,a={title:v.default._t("CKANResourceLocatorField.DATA_SOURCE_URL","Data source URL"),extraClass:"form-field--no-divider stacked",message:o,value:t,invalid:r,onChange:this.handleChange},i=(0,S.default)("ckan-resource-locator__uri-input",{"ckan-resource-locator__uri-input--loading":n});return c.default.createElement("div",{className:"ckan-resource-locator"},c.default.createElement("div",{className:i},c.default.createElement(N.default,a)),c.default.createElement("div",{className:"ckan-resource-locator__big-slash"},"/"),c.default.createElement("div",{className:"ckan-resource-locator__resource-select"},this.renderResourceSelect()),this.renderHiddenInput())}}]),t}(s.Component);T.propTypes={name:f.default.string.isRequired,value:f.default.object.isRequired,defaultEndpoint:f.default.string,SelectComponent:f.default.oneOfType([c.default.PropTypes.string,c.default.PropTypes.func])},t.default=(0,j.default)((0,_.inject)(["SingleSelectField"],function(e){return{SelectComponent:e}},function(){return"CKAN.ResourceLocatorField"})(T))},"./client/src/components/CKANResourceLocatorField/URLInput.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),s=o(u),c=n(4),d=o(c),f=n(3),p=o(f),h=n(5),m=n(7),v=o(m),g=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return i(t,e),l(t,[{key:"handleChange",value:function(e){var t=this.props.onChange;"function"==typeof t&&t(e)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.invalid,o=e.value,r={className:(0,v.default)(t,"no-change-track",{"is-invalid":n}),value:o,type:"text",onChange:this.handleChange};return s.default.createElement(h.Input,r)}}]),t}(u.Component);g.propTypes={value:d.default.string,invalid:d.default.bool,className:d.default.oneOf([d.default.string,d.default.array,d.default.object]),onChange:d.default.func},g.defaultProps={value:"",invalid:!1},t.default=(0,p.default)(g)},"./client/src/components/CKANResultConditionsField.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),d=o(c),f=n(4),p=o(f),h=n(0),m=n(5),v=n(3),g=o(v),y=function(e){function t(e){var n;a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),l=e.value&&e.value[0]?e.value[0]:{"match-select":e.matchTypeDefault,"match-test":""};return o.state={0:(n={},r(n,o.getFieldName("match-select",e),l["match-select"]),r(n,o.getFieldName("match-text",e),l["match-text"]),n)},o.handleChange=o.handleChange.bind(o),o}return l(t,e),s(t,[{key:"getFieldName",value:function(e){return((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).name||this.props.name)+"-"+e}},{key:"getSelectValue",value:function(){return this.state[0][this.getFieldName("match-select")]}},{key:"getInputValue",value:function(){return this.state[0][this.getFieldName("match-text")]}},{key:"getValue",value:function(){return{0:{"match-select":this.getSelectValue(),"match-text":this.getInputValue()}}}},{key:"handleChange",value:function(e){var t=this.state;this.setState({0:u({},t[0],r({},e.target.name,e.target.value))})}},{key:"renderSelect",value:function(){var e=this.props,t=e.SelectComponent,n=e.data.source;return d.default.createElement(t,{className:["no-change-track","ckan-result-conditions__match-select"],name:this.getFieldName("match-select"),source:n,value:this.getSelectValue(),onChange:this.handleChange})}},{key:"renderTextInput",value:function(){var e=this.props.TextFieldComponent;return d.default.createElement(e,{name:this.getFieldName("match-text"),className:["no-change-track","ckan-result-conditions__match-text"],onChange:this.handleChange,value:this.getInputValue()})}},{key:"renderHiddenInput",value:function(){var e=this.props.name;return d.default.createElement("input",{type:"hidden",name:e,value:JSON.stringify(this.getValue())})}},{key:"render",value:function(){return d.default.createElement("div",{className:"ckan-result-conditions"},d.default.createElement(m.Row,{form:!0},d.default.createElement(m.Col,{md:4,className:"ckan-result-conditions__column-left"},this.renderSelect()),d.default.createElement(m.Col,{md:8,className:"ckan-result-conditions__column-right"},this.renderTextInput())),this.renderHiddenInput())}}]),t}(c.Component);y.propTypes={name:p.default.string,value:p.default.object,data:p.default.shape({source:p.default.arrayOf(p.default.shape({value:p.default.string,title:p.default.string})),matchTypeDefault:p.default.string}),TextFieldComponent:p.default.oneOfType([d.default.PropTypes.string,d.default.PropTypes.func]).isRequired,SelectComponent:p.default.oneOfType([d.default.PropTypes.string,d.default.PropTypes.func]).isRequired},y.defaultProps={value:{},data:{}},t.Component=y,t.default=(0,g.default)((0,h.inject)(["SingleSelectField","TextField"],function(e,t){return{SelectComponent:e,TextFieldComponent:t}},function(){return"CKAN.Column.ResultConditionsField"})(y))},"./client/src/legacy/CKANPresentedOptions-entwine.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(2),l=o(i),u=n(1),s=o(u),c=n(6),d=o(c),f=n(0);l.default.entwine("ss",function(e){e(".js-injector-boot .ckan-presented-options__container").entwine({onmatch:function(){var e=this.children("input:first");e.length&&this.renderComponent("",e.val())},onunmatch:function(){d.default.unmountComponentAtNode(this[0])},renderComponent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={},o=(0,f.loadComponent)("CKANPresentedOptions",n),i=this.data("schema"),l=i.data.fieldMap,u=e?e.map(function(e){return l[e]||null}):[],c=(i.extraClass,r(i,["extraClass"])),p=a({name:this.attr("name"),value:t?JSON.parse(t):void 0,selectedFields:u},c);d.default.render(s.default.createElement(o,p),this[0])}})})},"./client/src/legacy/CKANResourceFilterForm-entwine.js":function(e,t,n){"use strict";var o=n(2);(function(e){return e&&e.__esModule?e:{default:e}})(o).default.entwine("ss",function(e){e(".js-injector-boot select.ckan-columns__filter-fields").entwine({onchange:function(){this.closest("form").find(".ckan-presented-options__container").renderComponent(this.val())}})})},"./client/src/legacy/CKANResourceLoaderField-entwine.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),a=o(r),i=n(1),l=o(i),u=n(6),s=o(u),c=n(0);a.default.entwine("ss",function(e){e(".js-injector-boot .ckan-resource-locator__container").entwine({onmatch:function(){var e={},t=(0,c.loadComponent)("CKANResourceLocatorField",e),n=this.data("schema"),o=this.children("input:first").val(),r={name:this.attr("name"),defaultEndpoint:n.defaultEndpoint||null,description:n.description.html||"",value:o?JSON.parse(o):void 0};s.default.render(l.default.createElement(t,r),this[0])},onunmatch:function(){s.default.unmountComponentAtNode(this[0])}})})},"./client/src/legacy/CKANResultConditionsField-entwine.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(2),i=o(a),l=n(1),u=o(l),s=n(6),c=o(s),d=n(0);i.default.entwine("ss",function(e){e(".js-injector-boot .ckan-result-conditions__container").entwine({onmatch:function(){var e={},t=(0,d.loadComponent)("CKANResultConditionsField",e),n=this.children("input:first");if(n.length){var o=n.val(),a=r({name:this.attr("name"),value:o?JSON.parse(o):void 0},this.data("schema"));c.default.render(u.default.createElement(t,a),this[0])}},onunmatch:function(){c.default.unmountComponentAtNode(this[0])}})})},"./client/src/legacy/ResourceFilter.js":function(e,t,n){"use strict";var o=n(2);(function(e){return e&&e.__esModule?e:{default:e}})(o).default.entwine("ss",function(e){e(".field.ckan-columns__filter-fields").entwine({onmatch:function(){var e=this.prev(".ckan-columns__all-columns");e.length&&e.toggleSourcesField()}}),e(".form-check-input.ckan-columns__all-columns").entwine({onmatch:function(){this.toggleSourcesField()},onchange:function(){this.toggleSourcesField()},toggleSourcesField:function(){var e=this.closest(".field").next(".ckan-columns__filter-fields");e.length&&(this.is(":checked")?e.hide():e.show())}})})},"./client/src/lib/CKANApi.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(9),s=o(u),c=n("./client/src/lib/CKANApi/DataStore.js"),d=o(c),f=function(){function e(){r(this,e)}return l(e,null,[{key:"parseURI",value:function(e){if("string"!=typeof e||!e.length)return!1;var t=e,n="https://",o=t.match(/^https?:\/\//);o&&(n=o[0],t=t.substr(n.length)),t.endsWith("/")&&(t=t.substring(0,t.length-1));var r=t.split("/");return r.length>=5?(r.splice(0,r.length-4,r.slice(0,r.length-4).join("/")),{endpoint:""+n+r[0]+"/",dataset:r[2],resource:r[4]}):(4===r.length&&r.splice(0,2,r.slice(0,2).join("/")),3===r.length?{endpoint:""+n+r[0]+"/",dataset:r[2],resource:null}:t.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i)?{endpoint:null,dataset:null,resource:t}:!o&&!!t.match(/^[\d\w-]+$/i)&&{endpoint:null,dataset:t,resource:null})}},{key:"generateURI",value:function(e){if("object"!==(void 0===e?"undefined":i(e))||!e.endpoint||!e.dataset)return!1;var t=e.endpoint;try{new URL(t)}catch(e){return!1}"/"!==t.slice(-1)&&(t+="/");var n=t+"dataset/"+e.dataset;return e.resource?n+"/resource/"+e.resource:n}},{key:"loadDataset",value:function(e,t){return this.makeRequest(e,"package_show",{id:t}).then(function(e){return e.json().then(function(e){if(!e.success||!e.result)return!1;var n=e.result;return(n.name===t||n.id===t)&&n})},function(){return Promise.resolve(!1)})}},{key:"loadResource",value:function(e,t){return this.makeRequest(e,"resource_show",{id:t}).then(function(e){return e.json().then(function(e){return!!e.success&&e.result})},function(){return Promise.resolve(!1)})}},{key:"validateEndpoint",value:function(e){return this.makeRequest(e,"site_read").then(function(e){return e.ok?e.json().then(function(e){return e&&e.success}):Promise.resolve(!1)},function(){return Promise.resolve(!1)})}},{key:"loadDatastore",value:function(e,t){return new d.default(e,t)}},{key:"makeRequest",value:function(e,t,n){var o=e+"api/3/action/"+t;return n&&Object.values(n).length&&(o+="?"+Object.entries(n).map(function(e){var t=a(e,2);return t[0]+"="+t[1]}).join("&")),(0,s.default)(o)}}]),e}();t.default=f},"./client/src/lib/CKANApi/DataStore.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n("./client/src/lib/CKANApi.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(){function e(t,n){o(this,e),this.endpoint=t,this.resource=n}return a(e,[{key:"search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e.length)return Promise.resolve(!1);var o={id:this.resource,fields:e.map(encodeURIComponent).join(",")},a=null===t?null:void 0===t?"undefined":r(t);if(null!==t&&"string"!==a&&"object"!==a)return Promise.resolve(!1);if("string"===a&&t.length)o.q=t;else if("object"===a){var i=Object.entries(t);i.length&&(o.q=JSON.stringify(t))}return n&&(o.distinct=!0),l.default.makeRequest(this.endpoint,"datastore_search",o).then(function(e){return e.json().then(function(e){return!!e.success&&{records:e.result.records,total:e.result.total}})})}}]),e}();t.default=u},"./node_modules/lodash/_Symbol.js":function(e,t,n){var o=n("./node_modules/lodash/_root.js"),r=o.Symbol;e.exports=r},"./node_modules/lodash/_baseGetTag.js":function(e,t,n){function o(e){return null==e?void 0===e?u:l:s&&s in Object(e)?a(e):i(e)}var r=n("./node_modules/lodash/_Symbol.js"),a=n("./node_modules/lodash/_getRawTag.js"),i=n("./node_modules/lodash/_objectToString.js"),l="[object Null]",u="[object Undefined]",s=r?r.toStringTag:void 0;e.exports=o},"./node_modules/lodash/_freeGlobal.js":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n("./node_modules/webpack/buildin/global.js"))},"./node_modules/lodash/_getRawTag.js":function(e,t,n){function o(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var o=!0}catch(e){}var r=l.call(e);return o&&(t?e[u]=n:delete e[u]),r}var r=n("./node_modules/lodash/_Symbol.js"),a=Object.prototype,i=a.hasOwnProperty,l=a.toString,u=r?r.toStringTag:void 0;e.exports=o},"./node_modules/lodash/_objectToString.js":function(e,t){function n(e){return r.call(e)}var o=Object.prototype,r=o.toString;e.exports=n},"./node_modules/lodash/_root.js":function(e,t,n){var o=n("./node_modules/lodash/_freeGlobal.js"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},"./node_modules/lodash/debounce.js":function(e,t,n){function o(e,t,n){function o(t){var n=y,o=b;return y=b=void 0,S=t,C=e.apply(o,n)}function c(e){return S=e,j=setTimeout(p,t),k?o(e):C}function d(e){var n=e-O,o=e-S,r=t-n;return N?s(r,_-o):r}function f(e){var n=e-O,o=e-S;return void 0===O||n>=t||n<0||N&&o>=_}function p(){var e=a();if(f(e))return h(e);j=setTimeout(p,d(e))}function h(e){return j=void 0,T&&y?o(e):(y=b=void 0,C)}function m(){void 0!==j&&clearTimeout(j),S=0,y=O=b=j=void 0}function v(){return void 0===j?C:h(a())}function g(){var e=a(),n=f(e);if(y=arguments,b=this,O=e,n){if(void 0===j)return c(O);if(N)return j=setTimeout(p,t),o(O)}return void 0===j&&(j=setTimeout(p,t)),C}var y,b,_,C,j,O,S=0,k=!1,N=!1,T=!0;if("function"!=typeof e)throw new TypeError(l);return t=i(t)||0,r(n)&&(k=!!n.leading,N="maxWait"in n,_=N?u(i(n.maxWait)||0,t):_,T="trailing"in n?!!n.trailing:T),g.cancel=m,g.flush=v,g}var r=n("./node_modules/lodash/isObject.js"),a=n("./node_modules/lodash/now.js"),i=n("./node_modules/lodash/toNumber.js"),l="Expected a function",u=Math.max,s=Math.min;e.exports=o},"./node_modules/lodash/isObject.js":function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},"./node_modules/lodash/isObjectLike.js":function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},"./node_modules/lodash/isSymbol.js":function(e,t,n){function o(e){return"symbol"==typeof e||a(e)&&r(e)==i}var r=n("./node_modules/lodash/_baseGetTag.js"),a=n("./node_modules/lodash/isObjectLike.js"),i="[object Symbol]";e.exports=o},"./node_modules/lodash/now.js":function(e,t,n){var o=n("./node_modules/lodash/_root.js"),r=function(){return o.Date.now()};e.exports=r},"./node_modules/lodash/toNumber.js":function(e,t,n){function o(e){if("number"==typeof e)return e;if(a(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=s.test(e);return n||c.test(e)?d(e.slice(2),n?2:8):u.test(e)?i:+e}var r=n("./node_modules/lodash/isObject.js"),a=n("./node_modules/lodash/isSymbol.js"),i=NaN,l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt;e.exports=o},"./node_modules/webpack/buildin/global.js":function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},0:function(e,t){e.exports=Injector},1:function(e,t){e.exports=React},2:function(e,t){e.exports=jQuery},3:function(e,t){e.exports=FieldHolder},4:function(e,t){e.exports=PropTypes},5:function(e,t){e.exports=Reactstrap},6:function(e,t){e.exports=ReactDom},7:function(e,t){e.exports=classnames},8:function(e,t){e.exports=i18n},9:function(e,t){e.exports=IsomorphicFetch}});