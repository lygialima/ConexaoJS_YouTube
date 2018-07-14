import Mamiferos from './Mamiferos';

var cachorro = new Mamiferos();
cachorro.voz = "latido";
var gato = new Mamiferos();
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

E meu objeto classe vai ter ações, por ex, andar, falar,...

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