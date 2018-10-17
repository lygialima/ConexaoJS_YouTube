/*
A classe Cachorro.js é uma nova classe criada, que herdará as mesmas características
da classe Mamiferos (com extends) e terá novas características próprias desse
animal cachorro; para tanto, é necessário importar a classe Mamiferos (com import);
no final, exportamos a classe Cachorro (com export) para conseguirmos utilizá-la
em outros lugares
*/

import Mamiferos from './Mamiferos';

class Cachorro extends Mamiferos {
    /* dentro desse bloco representa coisas que só a classe Cachorro possui */
    /*
    Constructor representa uma função especial dentro de uma classe; tudo o que
    estiver dentro do método constructor() significa que vai ser executado no
    momento em que for instanciado o objeto Cachorro
    */
    constructor() {
        super();
        this.voz = "latido";
        /*
        Sempre q se extende uma classe, ela é chamada de superclasse. No caso,
        Mamiferos é a superclasse e Cachorro é a subclasse; esse this faz
        referência às características existentes dentro da classe Mamiferos,
        logo, é obrigatório declarar super() acima de tudo, ao pegar características
        do objeto herdado
        */
    }

}

export default Cachorro;
