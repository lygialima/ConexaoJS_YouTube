
/* Primeiro eu importo esse objeto com 'import' para poder acessar suas propriedades */

import Mamiferos from './Mamiferos';

var cachorro = new Mamiferos();
cachorro.voz = "latido"; // para acessar as propriedades do objeto eu uso o "."

var gato = new Mamiferos();
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

Comandos Bash

1 Rodando o servidor
	npm run dev

123 testando
*/
