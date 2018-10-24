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
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Meu objetivo nesta tarefa é criar um botão vermelho, cujo texto do botão poderá
ser adicionado e modificado através da Main.js

Para isso ser possível, eu preciso criar o objeto botão, então, eu crio um arquivo
novo chamado Botao.js, que é este arquivo

Primeiro Passo: inicializar a classe Botao; todo código deve constar dentro dela
*/

var Botao = function () {

    /*
    Agora, vou usar o método constructor, a lembrar que ele representa o primeiro
    método que quero que seja executado; a seguir, a var view vai receber um
    valor, fazendo referência à var desta classe com this
    */
    function Botao() {
        _classCallCheck(this, Botao);

        this.view = null;

        /*
        Para criar um elemento HTML é preciso acessar o documento da página com
        document e usar o método createElement() adicionando a tag desejada
        */
        this.view = document.createElement('div');
        /*
        Agora, já posso fazer as configurações de CSS do meu botão referenciando
        novamente à var this.view, que já representa uma tag div do HTML
        */
        this.view.style.cssText = '\n            width: 250px;\n            background: red;\n            padding: 20px 0;\n            color: white;\n            font-family: sans-serif;\n            font-size: 30px;\n            text-align: center;\n        ';
    }

    /*
    Agora, vou inserir uma ação ao objeto, cujo método permitirá que eu escreva
    qualquer texto no botão através da Main; nomeei esse método de addText do
    qual ele necessitará receber um parâmetro para funcionar, cuja variável a
    nomeei de text
    */

    /*
    Primeiro, comecei descrevendo uma variável q coloquei o nome de view, que
    representará graficamente o formato do botão que quero criar; null significa
    que ainda não quero definir nenhum valor nela
    */


    _createClass(Botao, [{
        key: 'addText',
        value: function addText(text) {
            /*
            Aqui, no bloco da função, não preciso chamar outro método para executar
            essa tarefa, como o document.write(). Eu posso simplificar e especificar
            melhor minha intenção, com a propriedade de string chamada innerText que
            renderizará o texto dentro do nó div, bastando atribuir essa declaração
            ao parâmetro deste método. Assim feito, é só chamar esta função na Main
            */
            this.view.innerText = text;
        }
    }]);

    return Botao;
}();

/*
Exportar a classe para que eu possa usá-la em outros lugares, seja instanciando
ela na classe Main, seja herdando ela em outro objeto; nesse momento, já estou
apta a fazer aparecer esse objeto na tela do meu navegador através da classe Main,
então, vamos à ela!
*/


exports.default = Botao;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Botao = __webpack_require__(0);

var _Botao2 = _interopRequireDefault(_Botao);

var _SuperBotao = __webpack_require__(2);

var _SuperBotao2 = _interopRequireDefault(_SuperBotao);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
window.onload significa carregamento de página; após carregar a página, ele vai
executar uma função que, no caso, utilizo uma arrow function para indicá-la
*/
/*
Meu primeiro objetivo é fazer com que o meu navegador reconheça que uma página
HTML foi criada com o meu objeto Botao; preciso adicionar um evento para isso
com o window (que corresponde à janela do navegador; objeto de mais alto nível)
*/

window.onload = function () {
    /*
    Aqui dentro preciso, primeiro, trazer meu objeto Botao pra cá, ou seja, tenho
    que instanciá-lo para que ele possa ser visualizado na página, então, é
    necessário importá-lo antes de tudo com import (ver acima), depois eu crio
    uma variável para instanciar Botao; detalhe técnico: não esquecer do () para
    representar uma instância
    */
    var bt = new _Botao2.default();
    /*
    Para mostrar a div que criei no objeto Botao, basta usar o método appendChild,
    indicando o elemento pai (body) dentro do documento HTML (document); o
    parâmetro de appendChild é a variável view, que representa o conteúdo da div
    que está dentro da classe Botao, indicada pela var bt; feito isto, vamos voltar
    à classe Botao para adicionar informações sobre o texto que vai ser inserido
    no botao através deste arquivo Main
    */
    document.body.appendChild(bt.view);
    /*
    Agora, vou chamar a função (addText()) que renderiza texto no objeto Botao
    (bt), e vou inserir como argumento o texto desejado
    */
    bt.addText("clique aqui");

    /*
    Acrescentando informações do SuperBotao; lá em cima já o importei com import,
    e aqui embaixo estou instanciando-o, inserindo a view dele e adicionando
    texto, igual como fiz para Botao
    */
    var superbt = new _SuperBotao2.default();
    document.body.appendChild(superbt.view);
    superbt.addText("super botão");
    /*
    Agora, vou chamar a função nova que criei lá
    */
    superbt.addEvents();
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Botao2 = __webpack_require__(0);

var _Botao3 = _interopRequireDefault(_Botao2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Agora, estou criando outro botão, cujo objeto nomeio de SuperBotao, para herdar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               as mesmas funcionalidades do objeto Botao e ter funcionalidades acrescentadas,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               como criar rollover no botão mudando a cor de vermelho para verde
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

/*
Primeiramente, preciso importar o objeto Botao usando import
*/


/*
Segundo, com extends eu realizo a herança de um objeto para outro, como
literalmente mostra que a classe/objeto SuperBotao extende/herda de Botao
*/
var SuperBotao = function (_Botao) {
    _inherits(SuperBotao, _Botao);

    function SuperBotao() {
        _classCallCheck(this, SuperBotao);

        var _this = _possibleConstructorReturn(this, (SuperBotao.__proto__ || Object.getPrototypeOf(SuperBotao)).call(this));
        /*
        Declarando super() representa que posso referenciar os mesmos objetos da
        superclasse Botao (this.view) para dentro da minha subclasse SuperBotao,
        onde eu posso, à partir disso, acrescentar novas características como o
        cursor e o marginTop
        */


        _this.view.style.cursor = 'pointer';
        _this.view.style.marginTop = '20px';
        return _this;
    }

    /*
    Agora, para fazer rollover no meu botão, preciso criar uma função para ser
    possível chamá-la através da Main e, assim, executar essa tarefa;
    */


    _createClass(SuperBotao, [{
        key: 'addEvents',
        value: function addEvents() {
            var _this2 = this;

            /*
            este EventListener está olhando QUANDO o usuário passa o mouse em cima
            do botão
            */
            this.view.addEventListener('mouseover', function () {
                _this2.view.style.background = 'green';
            });
            /*
            já este EventListener está olhando QUANDO o usuário passa o mouse para
            fora do botão, voltando para a cor original
            */
            this.view.addEventListener('mouseout', function () {
                _this2.view.style.background = 'red';
            });
        }
    }]);

    return SuperBotao;
}(_Botao3.default);

/*
E com export default, eu exporto o objeto SuperBotao para usá-lo na Main, por exemplo
*/


exports.default = SuperBotao;

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map