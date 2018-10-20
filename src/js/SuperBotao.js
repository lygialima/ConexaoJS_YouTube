/*
Agora, estou criando outro botão, cujo objeto nomeio de SuperBotao, para herdar
as mesmas funcionalidades do objeto Botao e ter funcionalidades acrescentadas,
como criar rollover no botão mudando a cor de vermelho para verde
*/

/*
Primeiramente, preciso importar o objeto Botao usando import
*/
import Botao from './Botao';

/*
Segundo, com extends eu realizo a herança de um objeto para outro, como
literalmente mostra que a classe/objeto SuperBotao extende/herda de Botao
*/
class SuperBotao extends Botao {
    constructor() {
        /*
        Declarando super() representa que posso referenciar os mesmos objetos da
        superclasse Botao (this.view) para dentro da minha subclasse SuperBotao,
        onde eu posso, à partir disso, acrescentar novas características como o
        cursor e o marginTop
        */
        super();
        this.view.style.cursor = 'pointer';
        this.view.style.marginTop = '20px';
    }

    /*
    Agora, para fazer rollover no meu botão, preciso criar uma função para ser
    possível chamá-la através da Main e, assim, executar essa tarefa;
    */
    addEvents() {
        /*
        este EventListener está olhando QUANDO o usuário passa o mouse em cima
        do botão
        */
        this.view.addEventListener('mouseover', () => {
            this.view.style.background = 'green';
        });
        /*
        já este EventListener está olhando QUANDO o usuário passa o mouse para
        fora do botão, voltando para a cor original
        */
        this.view.addEventListener('mouseout', () => {
            this.view.style.background = 'red';
        });
    }

}

/*
E com export default, eu exporto o objeto SuperBotao para usá-lo na Main, por exemplo
*/
export default SuperBotao;
