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

var cachorro = new _Mamiferos2.default();
<<<<<<< HEAD
/* Primeiro eu importo esse objeto com 'import' para poder acessar suas propriedades */

cachorro.voz = "latido"; // para acessar as propriedades do objeto eu uso o "."

var gato = new _Mamiferos2.default();
gato.voz = "miado";

console.log(cachorro.voz);
console.log(gato.corDoOlho);
console.log(gato.voz);

/*

A idéia em si da definição de um objeto é chamada axioma na matemática. 
A gente sabe o que é mas não sabemos definir.

O que é uma classe e o que é um objeto?

Um objeto sempre terá propriedades. Algumas classes sempre terá ações.

Em uma classe sempre deverá conter propriedades/ características de um objeto como:
quantidade de patas, membros, cor de olho, etc..

E, também, sempre conterá ações, como:
andar, falar, etc...

Mas nem todo objeto contém ações e sim somente propriedades,
como um copo por exemplo, por ser um objeto inanimado.

Um carro, no caso, teria propriedades e ações que chamamos de métodos.

Ex., propriedade de um carro: a velocidade que ele consegue atingir.
Aceleração é uma ação, por ex., trocar marcha... seriam métodos.

Toda característica do meu objeto eu chamo de propriedades.
Toda ação do meu objeto eu chamo de métodos.

*/

/*

Passo-a-Passo Comandos Bash

1 Acessando a pasta do projeto
	cd Documents/DOCUMENTOS/Lygia_WEB\ DESIGN/4-\ ALURA/Front-end/JAVASCRIPT/outros\ cursos/ConexaoJS_YouTube

2 Rodando o servidor
	npm run dev

*/

=======
cachorro.voz = "latido";
var gato = new _Mamiferos2.default();
gato.voz = "miado";

console.log(cachorro.voz); // para acessar as propriedades do objeto eu uso o "."
console.log(gato.corDoOlho);
console.log(gato.voz);

/*
Defina o objeto, a idéia em si da definição de um objeto é chamado axioma na matemática. 
A gente sabe o que é mas não sabemos definir.

Um objeto sempre terá propriedades.

Algumas classes sempre terá ações.

Classe chamada animais vão ter propriedades, características.
Por ex, quantidade de patas, membros, cor de olho, etc..

E meu objeto classe vão ter ações, por ex, andar, falar,...

Mas nem todo objeto tem ações e sim somente propriedades,
como um copo por exemplo, por ser um objeto inanimado.

Toda minha classe vão ter propriedade, as características quedefinem meu objeto.

Um carro, no caso, teria propriedades e ações que chamamos de métodos.

Propriedade de um carro:
a velocidades que ele consegue atingir;
aceleração é uma ação, por ex., trocar marcha... seriam métodos

toda característica do meu objeto eu chamo de propriedades.
Toda ação do meu objeto eu chamo de métodos.
*/

>>>>>>> teste2
/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mamiferos = function Mamiferos() {
	_classCallCheck(this, Mamiferos);

	this.voz = "latido";
	this.corDoOlho = "preto";
}
<<<<<<< HEAD
/* É preciso escrever algumas propriedades que vão definir um objeto */
=======
// eu preciso definir algumas propriedades que vão definir o meu objeto
>>>>>>> teste2

;

exports.default = Mamiferos;

<<<<<<< HEAD
/*

Agora, este objeto está definido mas ainda não existe.
Para existir, quando criamos um objeto real a gente instancia, 
por isso, vamos importar esse objeto lá na classe Main.

*/
=======
// esse objeto está definido mas ainda não existe
// quando a gente cria um objeto real a gente instancia, 
// por isso vamos importar lá na classe Main
>>>>>>> teste2

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map