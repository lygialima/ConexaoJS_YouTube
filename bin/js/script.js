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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Mamiferos = __webpack_require__(1);

var _Mamiferos2 = _interopRequireDefault(_Mamiferos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Depois, eu instancio o objeto para torná-lo real */
var cachorro = new _Mamiferos2.default();
// para acessar as propriedades do objeto, eu uso o "." e posso modificar/ reescrever o valor que ele recebe
// Primeiro, eu importo aquele objeto Mamiferos com 'import' para poder acessar suas propriedades
cachorro.voz = "latido";

var gato = new _Mamiferos2.default();
gato.voz = "miado";

console.log(cachorro.voz);
console.log(gato.corDoOlho);
console.log(gato.voz);

/*

A idéia em si da definição de um objeto é chamada axioma na matemática.
A gente sabe o que é mas não sabemos definir.


O que é uma classe e o que é um objeto?


OBJETO

Um objeto é qualquer coisa que possua características.

Ele sempre terá características ou propriedades, mas nem sempre ele terá ações.

Por exemplo, um copo pode ser um simples objeto inanimado.


CLASSE

Uma classe é um objeto que possui características, como:
quantidade de patas, membros, cor de olho, etc... e possui ações como:
andar, falar, etc...

As ações chamamos de métodos.

Vamos a um exemplo:

Objeto: carro
Propriedade/ característica: velocidade (a velocidade que consegue atingir)
Métodos/ ações: aceleração, trocar marcha

Obs.: Toda classe deve se iniciar com letra maiúscula


Recapitulando,...

Toda característica do meu objeto eu chamo de propriedades.
Toda ação do meu objeto eu chamo de métodos.
Um objeto possui somente propriedades.
Uma classe possui as propriedades do objeto + seus métodos.

*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Este é um exemplo de objeto; é preciso escrever algumas propriedades que vão definir o objeto

var Mamiferos = function Mamiferos() {
	_classCallCheck(this, Mamiferos);

	this.voz = "latido";
	this.corDoOlho = "preto";
};

exports.default = Mamiferos;

/*

Agora, este objeto está definido mas ainda não existe.
Para existir, quando criamos um objeto real a gente instancia,
por isso, vamos importar esse objeto lá na classe Main.

*/

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map