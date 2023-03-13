(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: __wbg_set_wasm, Cell, Universe, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.js":
/*!**************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.js ***!
  \**************************************/
/*! exports provided: __wbg_set_wasm, Cell, Universe, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.universe_width(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = wasm.universe_height(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    cells() {\n        const ret = wasm.universe_cells(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @returns {Universe}\n    */\n    static new(width, height) {\n        const ret = wasm.universe_new(width, height);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.universe_render(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_universe_free, universe_width, universe_height, universe_cells, universe_tick, universe_new, universe_render, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n\n\n\nconst CELL_SIZE = 5;\nconst GRID_COLOR = \"#CCCCCC\";\nconst DEAD_COLOR = \"#FFFFFF\";\nconst ALIVE_COLOR = \"#000000\";\n\nlet init_width = 64;\nlet init_height = 64;\n\nlet universe, width, height;\nconst canvas = document.getElementById(\"game-of-life-canvas\");\nlet ctx;\n\nlet initialized = false;\n\nconst initialize = () => {\n  universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"].new(init_width, init_height);\n  width = universe.width();\n  height = universe.height();\n  canvas.height = (CELL_SIZE + 1) * height + 1;\n  canvas.width = (CELL_SIZE + 1) * width + 1;\n  ctx = canvas.getContext('2d');\n}\n\nlet animationId = null;\n\nlet frameCount = 0;\nlet fps, fpsInterval, startTime, now, then, elapsed;\n\nconst renderLoop = () => {\n  animationId = requestAnimationFrame(renderLoop);\n  \n  now = Date.now();\n  elapsed = now - then;\n  \n  if (elapsed > fpsInterval) {\n    then = now - (elapsed % fpsInterval);\n    \n    universe.tick();\n    \n    drawGrid();\n    drawCells();\n  }\n};\n\nconst drawGrid = () => {\n  ctx.beginPath();\n  ctx.strokeStyle = GRID_COLOR;\n\n  // create grid\n  // horizontal\n  for (let i = 0; i <= width; i++) {\n    ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n    ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);\n  }\n  // vertical\n  for (let j = 0; j <= height; j++) {\n    ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n    ctx.lineTo((CELL_SIZE + 1) * width + 1, j* (CELL_SIZE + 1) + 1);\n  }\n\n  ctx.stroke();\n}\n\nconst getIndex = (row, column) => {\n  return row * width + column;\n}\n\nconst drawCells = () => {\n  const cellsPtr = universe.cells();\n  const cells = new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, cellsPtr, width * height);\n\n  ctx.beginPath();\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col);\n\n      ctx.fillStyle = cells[idx] === wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"].Dead ? DEAD_COLOR:ALIVE_COLOR;\n\n      ctx.fillRect(\n        col * (CELL_SIZE + 1) +1,\n        row * (CELL_SIZE + 1) +1,\n        CELL_SIZE,\n        CELL_SIZE\n      );\n    }\n  }\n\n  ctx.stroke();\n};\n\nconst isPaused = () => {\n  return animationId === null;\n};\n\nconst playPauseButton = document.getElementById(\"play-pause\");\n\nconst pause = () => {\n  playPauseButton.textContent = \"▶\";\n  cancelAnimationFrame(animationId);\n  animationId = null;\n};\n\nconst play = () => {\n  fpsInterval = 1000 / fps;\n  then = Date.now();\n  startTime = then;\n\n  playPauseButton.textContent = \"⏸\";\n  renderLoop();\n};\n\nplayPauseButton.addEventListener(\"click\", event => {\n  if (isPaused()) {\n    if (!initialized) {\n      initialize();\n    }\n    width_input.disabled = true;\n    height_input.disabled = true;\n    play();\n  } else {\n    pause();\n  }\n});\n\n// form controller\n\nconst speed_output = document.getElementById(\"speed_value\");\nconst speed_input = document.getElementById(\"speed\");\nspeed_input.addEventListener(\"input\", (event) => {\n  speed_output.textContent = event.target.value;\n  fps = Math.floor(60*speed_input.value/100);\n  fpsInterval = 1000 / fps;\n});\nspeed_output.textContent = speed_input.value;\nfps = Math.floor(60*speed_input.value/100);\n\nconst width_output = document.getElementById(\"width_value\");\nconst width_input = document.getElementById(\"width\");\nwidth_input.addEventListener(\"input\", (event) => {\n  init_width =  Math.pow(2, event.target.value);\n  width_output.textContent = init_width;\n});\ninit_width =  Math.pow(2, width_input.value);\nwidth_output.textContent = init_width;\n\nconst height_output = document.getElementById(\"height_value\");\nconst height_input = document.getElementById(\"height\");\nheight_input.addEventListener(\"input\", (event) => {\n  init_height = Math.pow(2, event.target.value);\n  height_output.textContent = init_height;\n});\ninit_height = Math.pow(2, height_input.value);\nheight_output.textContent = init_height;\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);