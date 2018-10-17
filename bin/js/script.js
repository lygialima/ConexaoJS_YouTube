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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Botao = __webpack_require__(4);

var _Botao2 = _interopRequireDefault(_Botao);

var _SuperBotao = __webpack_require__(5);

var _SuperBotao2 = _interopRequireDefault(_SuperBotao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    var bt = new _Botao2.default();
    bt.addText('clique aqui');

    var superbt = new _SuperBotao2.default();
    superbt.addText('super botao');
    superbt.addEvents();

    document.body.appendChild(bt.view);
    document.body.appendChild(superbt.view);
};

/* ANOTAÇÃO ANTERIOR */

/*
HERANÇA

Serve para quando queremos evoluir um objeto, sem se desfazer do objeto anterior.
Herda as características do objeto anterior e acrescenta/ extende novas funcionalidades.
*/

// import Gato from './Gato';
// import Cachorro from './Cachorro';

// var bingo = new Cachorro();
// var felix = new Gato();

// bingo.falar();
// felix.falar();


/* ANOTAÇÃO ANTERIOR */

/* Primeiro, eu importo aquele objeto Mamiferos com 'import' para poder acessar
suas propriedades */
// import Mamiferos from './Mamiferos';

/* Depois, eu instancio o objeto para torná-lo real */
// var cachorro = new Mamiferos();

/* Para acessar as propriedades do objeto, eu uso o "." e posso modificar/
reescrever o valor que ele recebe */
// cachorro.voz = "latido";

// var gato = new Mamiferos();
// gato.voz = "miado";

// console.log(cachorro.voz);
// console.log(gato.corDoOlho);
// console.log(gato.voz);


/*
A idéia em si da definição de um objeto é chamada axioma, na matemática.
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

As ações chamamos de métodos. Vamos a um exemplo:

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
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Botao = function () {
    // null significa que não tem valor nenhum

    function Botao() {
        _classCallCheck(this, Botao);

        this.view = null;

        this.view = document.createElement('div');
        this.view.style.cssText = '\n            width: 250px;\n            background: red;\n            padding: 20px 0;\n            color: white;\n            font-family: sans-serif;\n            font-size: 30px;\n            text-align: center;\n        ';
    }

    _createClass(Botao, [{
        key: 'addText',
        value: function addText(text) {
            this.view.innerText = text;
        }
    }]);

    return Botao;
}();

exports.default = Botao;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Botao2 = __webpack_require__(4);

var _Botao3 = _interopRequireDefault(_Botao2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuperBotao = function (_Botao) {
    _inherits(SuperBotao, _Botao);

    function SuperBotao() {
        _classCallCheck(this, SuperBotao);

        var _this = _possibleConstructorReturn(this, (SuperBotao.__proto__ || Object.getPrototypeOf(SuperBotao)).call(this));

        _this.view.style.cursor = 'pointer';
        _this.view.style.marginTop = '20px';
        return _this;
    }

    _createClass(SuperBotao, [{
        key: 'addEvents',
        value: function addEvents() {
            var _this2 = this;

            this.view.addEventListener('mouseover', function () {
                _this2.view.style.background = 'green';
            });

            this.view.addEventListener('mouseout', function () {
                _this2.view.style.background = 'red';
            });
        }
    }]);

    return SuperBotao;
}(_Botao3.default);

exports.default = SuperBotao;

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map