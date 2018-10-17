class Botao {
    view = null; // null significa que não tem valor nenhum

    constructor() {
        this.view = document.createElement('div');
        this.view.style.cssText = `
            width: 250px;
            background: red;
            padding: 20px 0;
            color: white;
            font-family: sans-serif;
            font-size: 30px;
            text-align: center;
        `
    }

    addText(text) {
        this.view.innerText = text;
    }
}

export default Botao;
