import Gato from './Gato.js';
import Cachorro from './Cachorro.js';

var bingo = new Cachorro();
var felix = new Gato();

bingo.falar();
felix.falar();


/*
ANOTAÇÃO ANTERIOR
Primeiro, eu importo aquele objeto Mamiferos com 'import' para poder acessar suas propriedades
*/

//import Mamiferos from './Mamiferos';

/* Depois, eu instancio o objeto para torná-lo real */
//var cachorro = new Mamiferos();
// para acessar as propriedades do objeto, eu uso o "." e posso modificar/ reescrever o valor que ele recebe
//cachorro.voz = "latido";

//var gato = new Mamiferos();
//gato.voz = "miado";

//console.log(cachorro.voz);
//console.log(gato.corDoOlho);
//console.log(gato.voz);

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
