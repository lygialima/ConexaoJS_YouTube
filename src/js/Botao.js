/*
Meu objetivo nesta tarefa é criar um botão vermelho, cujo texto do botão poderá
ser adicionado e modificado através da Main.js

Para isso ser possível, eu preciso criar o objeto botão, então, eu crio um arquivo
novo chamado Botao.js, que é este arquivo

Primeiro Passo: inicializar a classe Botao; todo código deve constar dentro dela
*/

class Botao {
    /*
    Primeiro, comecei descrevendo uma variável q coloquei o nome de view, que
    representará graficamente o formato do botão que quero criar; null significa
    que ainda não quero definir nenhum valor nela
    */
    view = null;

    /*
    Agora, vou usar o método constructor, a lembrar que ele representa o primeiro
    método que quero que seja executado; a seguir, a var view vai receber um
    valor, fazendo referência à var desta classe com this
    */
    constructor() {
        /*
        Para criar um elemento HTML é preciso acessar o documento da página com
        document e usar o método createElement() adicionando a tag desejada
        */
        this.view = document.createElement('div');
        /*
        Agora, já posso fazer as configurações de CSS do meu botão referenciando
        novamente à var this.view, que já representa uma tag div do HTML
        */
        this.view.style.cssText = `
            width: 250px;
            background: red;
            padding: 20px 0;
            color: white;
            font-family: sans-serif;
            font-size: 30px;
            text-align: center;
        `;
    }

    /*
    Agora, vou inserir uma ação ao objeto, cujo método permitirá que eu escreva
    qualquer texto no botão através da Main; nomeei esse método de addText do
    qual ele necessitará receber um parâmetro para funcionar, cuja variável a
    nomeei de text
    */
    addText(text) {
        /*
        Aqui, no bloco da função, não preciso chamar outro método para executar
        essa tarefa, como o document.write(). Eu posso simplificar e especificar
        melhor minha intenção, com a propriedade de string chamada innerText que
        renderizará o texto dentro do nó div, bastando atribuir essa declaração
        ao parâmetro deste método. Assim feito, é só chamar esta função na Main
        */
        this.view.innerText = text;
    }
}

/*
Exportar a classe para que eu possa usá-la em outros lugares, seja instanciando
ela na classe Main, seja herdando ela em outro objeto; nesse momento, já estou
apta a fazer aparecer esse objeto na tela do meu navegador através da classe Main,
então, vamos à ela!
*/
export default Botao;
