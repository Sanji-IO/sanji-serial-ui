(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("sanji-core-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["sanji-core-ui"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("sanji-core-ui")) : factory(root["sanji-core-ui"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _sanjiCoreUi = __webpack_require__(13);
	
	var _sanjiCoreUi2 = _interopRequireDefault(_sanjiCoreUi);
	
	__webpack_require__(12);
	
	__webpack_require__(1);
	
	var _componentI18n = __webpack_require__(10);
	
	var _componentI18n2 = _interopRequireDefault(_componentI18n);
	
	var _componentService = __webpack_require__(11);
	
	var _componentService2 = _interopRequireDefault(_componentService);
	
	var _componentContainerController = __webpack_require__(5);
	
	var _componentContainerController2 = _interopRequireDefault(_componentContainerController);
	
	var _componentController = __webpack_require__(8);
	
	var _componentController2 = _interopRequireDefault(_componentController);
	
	var _componentContainerDirective = __webpack_require__(6);
	
	var _componentContainerDirective2 = _interopRequireDefault(_componentContainerDirective);
	
	var _componentDirective = __webpack_require__(9);
	
	var _componentDirective2 = _interopRequireDefault(_componentDirective);
	
	var _componentWindowDirective = __webpack_require__(7);
	
	var _componentWindowDirective2 = _interopRequireDefault(_componentWindowDirective);
	
	var app = angular.module('sanji.serial', [_sanjiCoreUi2['default']]);
	app.config(_componentI18n2['default']);
	app.service('serialService', _componentService2['default']);
	app.controller('SerialContainerController', _componentContainerController2['default']);
	app.controller('SerialController', _componentController2['default']);
	app.directive('sanjiSerialContainer', _componentContainerDirective2['default'].directiveFactory);
	app.directive('sanjiSerial', _componentDirective2['default'].directiveFactory);
	app.directive('sanjiSerialWindow', _componentWindowDirective2['default'].directiveFactory);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"get": {
			"url": "/system/serial",
			"type": "collection",
			"titlePrefix": "port"
		},
		"put": {
			"url": "/system/serial/:id",
			"type": "model"
		},
		"fields": [
			{
				"key": "mode",
				"type": "select",
				"templateOptions": {
					"label": "SERIAL_FORM_LABEL_MODE",
					"required": true,
					"options": [
						{
							"label": "SERIAL_FORM_LABEL_RS232",
							"value": "rs232"
						},
						{
							"label": "SERIAL_FORM_LABEL_RS485_2W",
							"value": "rs485-2w"
						},
						{
							"label": "SERIAL_FORM_LABEL_RS485_4W",
							"value": "rs422/rs485-4w"
						}
					]
				}
			}
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"SERIAL": "Serial",
		"SERIAL_FORM_SETTING": "Setting",
		"SERIAL_FORM_LABEL_MODE": "Mode",
		"SERIAL_FORM_LABEL_RS232": "RS232",
		"SERIAL_FORM_LABEL_RS485_2W": "RS485-2W",
		"SERIAL_FORM_LABEL_RS485_4W": "RS422/RS485-4W",
		"SERIAL_FORM_SAVE": "Save"
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"SERIAL": "序列埠",
		"SERIAL_FORM_SETTING": "設定",
		"SERIAL_FORM_LABEL_MODE": "模式",
		"SERIAL_FORM_LABEL_RS232": "RS232",
		"SERIAL_FORM_LABEL_RS485_2W": "RS485-2W",
		"SERIAL_FORM_LABEL_RS485_4W": "RS422/RS485-4W",
		"SERIAL_FORM_SAVE": "儲存"
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$scope', 'sanjiWindowService', 'serialService'];
	var WINDOW_ID = 'sanji-serial-ui';
	
	var SerialContainerController = (function () {
	  function SerialContainerController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SerialContainerController);
	
	    SerialContainerController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	
	    this.sanjiWindowMgr = this.sanjiWindowService.get(WINDOW_ID);
	    this.data = this.serialService.data;
	
	    this.activate();
	
	    this.$scope.$on('sj:window:refresh', this.onRefresh.bind(this));
	  }
	
	  _createClass(SerialContainerController, [{
	    key: 'activate',
	    value: function activate() {
	      var _this2 = this;
	
	      this.sanjiWindowMgr.promise = this.serialService.get().then(function () {
	        _this2.data = _this2.serialService.data;
	      });
	    }
	  }, {
	    key: 'onRefresh',
	    value: function onRefresh(event, args) {
	      if (args.id === WINDOW_ID) {
	        this.activate();
	      }
	    }
	  }, {
	    key: 'onSave',
	    value: function onSave(data) {
	      this.sanjiWindowMgr.promise = this.serialService.update(data);
	    }
	  }]);
	
	  return SerialContainerController;
	})();
	
	SerialContainerController.$inject = $inject;
	exports['default'] = SerialContainerController;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SerialContainerDirective = (function () {
	  function SerialContainerDirective(injects) {
	    _classCallCheck(this, SerialContainerDirective);
	
	    SerialContainerDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SerialContainerDirective[item] = injects[index];
	      injectMap.set(SerialContainerDirective[item], injects[index]);
	    });
	    this.restrict = 'EA';
	    this.controller = 'SerialContainerController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = true;
	    this.template = '<sanji-serial data="vm.data" on-submit="vm.onSave(data)"></sanji-serial>';
	  }
	
	  _createClass(SerialContainerDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SerialContainerDirective.instance = new SerialContainerDirective(injects);
	      return SerialContainerDirective.instance;
	    }
	  }]);
	
	  return SerialContainerDirective;
	})();
	
	SerialContainerDirective.directiveFactory.$inject = $inject;
	exports['default'] = SerialContainerDirective;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SerialWindowDirective = (function () {
	  function SerialWindowDirective(injects) {
	    _classCallCheck(this, SerialWindowDirective);
	
	    SerialWindowDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SerialWindowDirective[item] = injects[index];
	      injectMap.set(SerialWindowDirective[item], injects[index]);
	    });
	    this.restrict = 'E';
	    this.template = '<sanji-window window-id="sanji-serial-ui"\n                      window-name="{{\'SERIAL\' | translate}}" show-loading-btn>\n                      <sanji-window-state default-state\n                        state-name="sanji-form"\n                        link-name="{{\'SERIAL_FORM_SETTING\' | translate}}"\n                        icon="settings">\n                        <sanji-serial-container></sanji-serial-container>\n                      </sanji-window-state>\n                    </sanji-window>';
	  }
	
	  _createClass(SerialWindowDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SerialWindowDirective.instance = new SerialWindowDirective(injects);
	      return SerialWindowDirective.instance;
	    }
	  }]);
	
	  return SerialWindowDirective;
	})();
	
	SerialWindowDirective.directiveFactory.$inject = $inject;
	exports['default'] = SerialWindowDirective;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $inject = [];
	
	var SerialController = (function () {
	  function SerialController() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SerialController);
	
	    SerialController.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(SerialController, [{
	    key: "save",
	    value: function save(data) {
	      this.submitCallback({ data: data });
	    }
	  }]);
	
	  return SerialController;
	})();
	
	SerialController.$inject = $inject;
	exports["default"] = SerialController;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var injectMap = new WeakMap();
	var $inject = [];
	
	var SerialDirective = (function () {
	  function SerialDirective(injects) {
	    _classCallCheck(this, SerialDirective);
	
	    SerialDirective.directiveFactory.$inject.forEach(function (item, index) {
	      SerialDirective[item] = injects[index];
	      injectMap.set(SerialDirective[item], injects[index]);
	    });
	    this.templateUrl = 'sanji-serial-edit.tpl.html';
	    this.restrict = 'EA';
	    this.controller = 'SerialController';
	    this.controllerAs = 'vm';
	    this.scope = {};
	    this.bindToController = {
	
	      tabs: '=data',
	
	      submitCallback: '&onSubmit'
	    };
	  }
	
	  _createClass(SerialDirective, null, [{
	    key: 'directiveFactory',
	    value: function directiveFactory() {
	      for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	        injects[_key] = arguments[_key];
	      }
	
	      SerialDirective.instance = new SerialDirective(injects);
	      return SerialDirective.instance;
	    }
	  }]);
	
	  return SerialDirective;
	})();
	
	SerialDirective.directiveFactory.$inject = $inject;
	exports['default'] = SerialDirective;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function ($translateProvider) {
	  $translateProvider.translations('en', __webpack_require__(3));
	  $translateProvider.translations('zh-tw', __webpack_require__(4));
	};
	
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var $inject = ['$q', 'rest', 'exception', '_', 'pathToRegexp'];
	var config = __webpack_require__(2);
	
	var SerialService = (function () {
	  function SerialService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, SerialService);
	
	    SerialService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	    switch (config.get.type) {
	      case 'collection':
	        this.data = [];
	        break;
	      case 'model':
	        this.data = {};
	        break;
	      default:
	        this.data = [];
	    }
	  }
	
	  _createClass(SerialService, [{
	    key: '_transform',
	    value: function _transform(data) {
	      switch (config.get.type) {
	        case 'collection':
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	        case 'model':
	          return {
	            content: data,
	            formOptions: {},
	            fields: config.fields
	          };
	        default:
	          return this._.map(data, function (item, index) {
	            return {
	              title: (config.get.titlePrefix || 'tab') + index,
	              content: item,
	              formOptions: {},
	              fields: config.fields
	            };
	          });
	      }
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var _this2 = this;
	
	      var toPath = this.pathToRegexp.compile(config.get.url);
	      return this.rest.get(toPath(),  false ? { basePath: 'http://private-d8e84-sanjigeneric.apiary-mock.com' } : undefined).then(function (res) {
	        _this2.data = _this2._transform(res.data);
	      })['catch'](function (err) {
	        _this2.exception.catcher('[SerialService] Get data error.')(err);
	        return _this2.$q.reject();
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(data) {
	      var _this3 = this;
	
	      var toPath = this.pathToRegexp.compile(config.put.url);
	      var path = undefined !== data.content.id ? toPath({ id: data.content.id }) : toPath();
	      return this.rest.put(path, data.content, data.formOptions.files,  false ? { basePath: 'http://private-d8e84-sanjigeneric.apiary-mock.com' } : undefined)['catch'](function (err) {
	        _this3.exception.catcher('[SerialService] Update data error.')(err);
	        return _this3.$q.reject();
	      });
	    }
	  }]);
	
	  return SerialService;
	})();
	
	SerialService.$inject = $inject;
	exports['default'] = SerialService;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<md-content>\n    <md-tabs md-dynamic-height md-border-bottom>\n      <md-tab ng-repeat=\"tab in vm.tabs track by $index\" label=\"{{::tab.title}}\">\n        <form ng-submit=\"vm.save(tab)\"\n          role=\"form\" layout=\"column\" layout-padding novalidate>\n          <md-content>\n            <formly-form model=\"tab.content\"\n            options=\"tab.formOptions\" fields=\"tab.fields\" form=\"tab.form\">\n              <div layout layout-align=\"end center\">\n                <md-button type=\"submit\" class=\"md-raised md-primary\"\n                ng-disabled=\"tab.form.$invalid\">\n                  <sapn translate=\"SERIAL_FORM_SAVE\"></span>\n                </md-button>\n              </div>\n            </formly-form>\n          </md-content>\n        </form>\n      </md-tab>\n    </md-tabs>\n  </md-content>";
	ngModule.run(["$templateCache",function(c){c.put("sanji-serial-edit.tpl.html",v1)}]);
	module.exports=v1;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sanji-serial-ui.js.map