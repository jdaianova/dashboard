/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\nvar _el = /*#__PURE__*/new WeakMap();\nvar _styles = /*#__PURE__*/new WeakMap();\nvar Card = /*#__PURE__*/function () {\n  function Card(element) {\n    _classCallCheck(this, Card);\n    _classPrivateFieldInitSpec(this, _el, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _styles, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldSet(this, _el, element);\n    _classPrivateFieldSet(this, _styles, window.getComputedStyle(element));\n  }\n  _createClass(Card, [{\n    key: \"clear\",\n    value: function clear() {\n      _classPrivateFieldGet(this, _el).remove();\n    }\n  }, {\n    key: \"styles\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _styles);\n    },\n    set: function set(text) {\n      _classPrivateFieldGet(this, _el).style.cssText = text;\n    }\n  }, {\n    key: \"proection\",\n    get: function get() {\n      var _this = this;\n      return function () {\n        var d = document.createElement(\"div\");\n        d.classList.add(\"proection\");\n        var _this$styles = _this.styles,\n          width = _this$styles.width,\n          height = _this$styles.height;\n        d.style.cssText = \"\\n\\t \\t\\t\\twidth: \".concat(width, \";\\n\\t\\t \\t\\theight: \").concat(height, \";\\n\\t\\t \\t\\tmargin: 10px 0;\\n\\t\\t\\t\\tbackground-color: white;\\n\\t\\t\\t\\tborder-radius: 3px;\\n\\t\\t\\t\");\n        return d;\n      }();\n    }\n  }, {\n    key: \"element\",\n    get: function get() {\n      return _classPrivateFieldGet(this, _el);\n    }\n  }]);\n  return Card;\n}();\nvar Controller = /*#__PURE__*/function () {\n  function Controller(container) {\n    var _this2 = this;\n    _classCallCheck(this, Controller);\n    _defineProperty(this, \"onMouseDown\", function (evt) {\n      var target = evt.target;\n      if (target.classList.contains(\"draggable\")) {\n        _this2.shiftX = evt.offsetX;\n        _this2.shiftY = evt.offsetY;\n        _this2.setDraggingElement(target);\n        _this2.draggingElement.style = \"\\n\\t\\t \\t\\tleft: \".concat(evt.pageX - _this2.shiftX, \"px;\\n\\t\\t \\t\\ttop: \").concat(evt.pageY - _this2.shiftY, \"px;\\n\\t\\t\\t\");\n        _this2.proectionAct(evt);\n      }\n    });\n    _defineProperty(this, \"onMouseUp\", function () {\n      if (_this2.draggingElement) {\n        _this2.replaceDragging();\n        _this2.clear();\n      }\n    });\n    _defineProperty(this, \"onMouseMove\", function (evt) {\n      if (_this2.draggingElement) {\n        var pageX = evt.pageX,\n          pageY = evt.pageY;\n        var element = _this2.draggingElement;\n        var _this2$draggingElemen = _this2.draggingElement.styles,\n          width = _this2$draggingElemen.width,\n          height = _this2$draggingElemen.height;\n        element.styles = \"\\n\\t\\t\\t\\tposition: absolute;\\n\\t\\t \\t\\tleft: \".concat(pageX - _this2.shiftX, \"px;\\n\\t\\t \\t\\ttop: \").concat(pageY - _this2.shiftY, \"px;\\n\\t\\t \\t\\tpointer-events: none;\\n\\t\\t\\t\\twidth: \").concat(width, \";\\n\\t\\t\\t\\theight: \").concat(height, \";\\n\\t\\t\\t\");\n        _this2.proectionAct(evt);\n      }\n    });\n    this.container = container;\n    this.draggingElement = null;\n    this.draggingProection = null;\n  }\n  _createClass(Controller, [{\n    key: \"setDraggingElement\",\n    value: function setDraggingElement(node) {\n      this.draggingElement = new Card(node);\n    }\n  }, {\n    key: \"replaceDragging\",\n    value: function replaceDragging() {\n      this.draggingProection.replaceWith(this.draggingElement.element);\n      this.draggingElement.element.style = this.draggingElement.styles;\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.draggingElement = null;\n      this.draggingProection = null;\n    }\n  }, {\n    key: \"proectionAct\",\n    value:\n    // Рассчёт позиции вставки проекции и вставка или удаление\n    function proectionAct(evt) {\n      var target = evt.target;\n      var element = this.draggingElement;\n      var proection = this.draggingProection;\n      if (target.classList.contains(\"draggable\") && !target.classList.contains(\"proection\")) {\n        var _target$getBoundingCl = target.getBoundingClientRect(),\n          y = _target$getBoundingCl.y,\n          height = _target$getBoundingCl.height;\n        var appendPosition = y + height / 2 > evt.clientY ? \"beforebegin\" : \"afterend\";\n        if (!proection) {\n          this.draggingProection = element.proection;\n        } else {\n          proection.remove();\n          target.insertAdjacentElement(appendPosition, proection);\n        }\n      } else {\n        if (target.classList.contains(\"board\")) {\n          var draggableChildren = Array.from(target.children).filter(function (n) {\n            return n.classList.contains(\"draggable\");\n          });\n          if (draggableChildren.length > 0) {\n            return;\n          }\n          if (!proection) {\n            this.draggingProection = element.proection;\n          } else {\n            proection.remove();\n            //const currentAddNewTaskButton = target.querySelector(\".add-btn\");\n            target.insertBefore(proection, target.querySelector(\".add-btn\"));\n          }\n        }\n      }\n    }\n  }]);\n  return Controller;\n}();\nvar controller = new Controller(document.querySelector(\".board\"));\nvar addNewTaskButtons = document.querySelectorAll(\".add-btn\");\ndocument.body.addEventListener(\"mousedown\", controller.onMouseDown);\ndocument.body.addEventListener(\"mouseup\", controller.onMouseUp);\ndocument.body.addEventListener(\"mousemove\", controller.onMouseMove);\n_toConsumableArray(addNewTaskButtons).forEach(function (addBtn) {\n  addBtn.addEventListener(\"click\", function () {\n    var currentBoard = addBtn.parentElement;\n    var addNewTask = currentBoard.querySelector(\".add-new-task\");\n    var addTaskButton = currentBoard.querySelector(\".add-task-btn\");\n    var cancelTaskButton = currentBoard.querySelector(\".cancel-task-btn\");\n    var taskText = currentBoard.querySelector(\".new-task-text\");\n    showElement(addNewTask);\n    hideElement(addBtn);\n    cancelTaskButton.addEventListener(\"click\", function () {\n      hideElement(addNewTask);\n      showElement(addBtn);\n    });\n    addTaskButton.addEventListener(\"click\", function () {\n      if (taskText.value === \"\") return;\n      var task = document.createElement(\"div\");\n      task.classList.add(\"draggable\");\n      task.textContent = taskText.value;\n      taskText.value = \"\";\n      currentBoard.querySelector(\".task-list\").appendChild(task);\n      hideElement(addNewTask);\n      showElement(addBtn);\n    });\n  });\n});\nfunction showElement(element) {\n  element.classList.remove(\"invisible\");\n}\nfunction hideElement(element) {\n  element.classList.add(\"invisible\");\n}\n\n//# sourceURL=webpack://dashboard/./src/components/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://dashboard/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Dashboard</title>\\n</head>\\n\\n<body>\\n    <div class=\\\"boards\\\">\\n        <div class=\\\"board\\\">\\n            <h3 class=\\\"board-title\\\">to do</h3>\\n            <div class=\\\"task-list\\\"></div>\\n\\n            <div class=\\\"add-new-task invisible\\\">\\n                <textarea class=\\\"new-task-text\\\" placeholder=\\\"Enter text of new task...\\\"></textarea>\\n                <div class=\\\"new-task-buttons\\\">\\n                    <button class=\\\"btn add-task-btn\\\">Add task</button>\\n                    <button class=\\\"btn cancel-task-btn\\\">Cancel</button>\\n                </div>\\n            </div>\\n\\n            <button class=\\\"btn add-btn\\\">+ Add new task</button>\\n        </div>\\n\\n        <div class=\\\"board\\\">\\n            <h3 class=\\\"board-title\\\">in progress</h3>\\n            <div class=\\\"task-list\\\"></div>\\n            <div class=\\\"add-new-task invisible\\\">\\n                <textarea class=\\\"new-task-text\\\" placeholder=\\\"Enter text of new task...\\\"></textarea>\\n                <div class=\\\"new-task-buttons\\\">\\n                    <button class=\\\"btn add-task-btn\\\">Add task</button>\\n                    <button class=\\\"btn cancel-task-btn\\\">Cancel</button>\\n                </div>\\n            </div>\\n\\n            <button class=\\\"btn add-btn\\\">+ Add new task</button>\\n        </div>\\n\\n        <div class=\\\"board\\\">\\n            <h3 class=\\\"board-title\\\">done</h3>\\n            <div class=\\\"task-list\\\"></div>\\n            <div class=\\\"add-new-task invisible\\\">\\n                <textarea class=\\\"new-task-text\\\" placeholder=\\\"Enter text of new task...\\\"></textarea>\\n                <div class=\\\"new-task-buttons\\\">\\n                    <button class=\\\"btn add-task-btn\\\">Add task</button>\\n                    <button class=\\\"btn cancel-task-btn\\\">Cancel</button>\\n                </div>\\n            </div>\\n\\n            <button class=\\\"btn add-btn\\\">+ Add new task</button>\\n        </div>\\n\\n    </div>\\n\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://dashboard/./src/index.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dashboard/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;