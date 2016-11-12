/******/ (function(modules) { // webpackBootstrap
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Chord = function () {
	  function Chord(chordName, index, parentChord, numeral, quality, callbacks) {
	    _classCallCheck(this, Chord);
	
	    this.chordName = chordName;
	    this.index = index;
	    this.parentChord = parentChord;
	    this.numeral = numeral;
	    this.quality = quality;
	    this.callbacks = callbacks;
	  }
	
	  _createClass(Chord, [{
	    key: 'getPossibleKeys',
	    value: function getPossibleKeys() {
	      var possibleKeys = [];
	
	      for (var key in _keys2.default) {
	        if (_keys2.default.hasOwnProperty(key)) {
	          if (_keys2.default[key].includes(this.chordName) && _keys2.default[key].includes(this.parentChord.chordName)) {
	            possibleKeys.push(key);
	          }
	        }
	      }
	
	      return possibleKeys;
	    }
	  }]);
	
	  return Chord;
	}();
	
	window.Chord = Chord;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	  'C': ['C', 'd', 'e', 'F', 'G', 'a', 'bdim', 'C'],
	  'Db': ['Db', 'eb', 'f', 'Gb', 'Ab', 'bb', 'cdim', 'Db'],
	  'D': ['D', 'e', 'f#', 'G', 'A', 'b', 'c#dim', 'D'],
	  'Eb': ['Eb', 'f', 'g', 'Ab', 'Bb', 'c', 'ddim', 'Eb'],
	  'E': ['E', 'f#', 'g#', 'A', 'B', 'c#', 'd#dim', 'E'],
	  'F': ['F', 'g', 'a', 'Bb', 'C', 'd', 'edim', 'F'],
	  'Gb': ['Gb', 'ab', 'bb', 'Cb', 'Dd', 'eb', 'fdim', 'Gb'],
	  'G': ['G', 'a', 'b', 'C', 'D', 'e', 'f#dim', 'G'],
	  'Ab': ['Ab', 'bb', 'c', 'Db', 'Eb', 'f', 'gdim', 'Ab'],
	  'A': ['A', 'b', 'c#', 'D', 'E', 'f#', 'g#dim', 'A'],
	  'Bb': ['Bb', 'c', 'd', 'Eb', 'F', 'g', 'adim', 'Bb'],
	  'B': ['B', 'c#', 'd#', 'E', 'F#', 'g#', 'a#', 'B']
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map