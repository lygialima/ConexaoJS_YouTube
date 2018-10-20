/*
Meu primeiro objetivo é fazer com que o meu navegador reconheça que uma página
HTML foi criada com o meu objeto Botao; preciso adicionar um evento para isso
com o window (que corresponde à janela do navegador; objeto de mais alto nível)
*/

import Botao from './Botao';
import SuperBotao from './SuperBotao';

/*
window.onload significa carregamento de página; após carregar a página, ele vai
executar uma função que, no caso, utilizo uma arrow function para indicá-la
*/
window.onload = () => {
    /*
    Aqui dentro preciso, primeiro, trazer meu objeto Botao pra cá, ou seja, tenho
    que instanciá-lo para que ele possa ser visualizado na página, então, é
    necessário importá-lo antes de tudo com import (ver acima), depois eu crio
    uma variável para instanciar Botao; detalhe técnico: não esquecer do () para
    representar uma instância
    */
    var bt = new Botao();
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
    var superbt = new SuperBotao();
    document.body.appendChild(superbt.view);
    superbt.addText("super botão");
    /*
    Agora, vou chamar a função nova que criei lá
    */
    superbt.addEvents();
}



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
