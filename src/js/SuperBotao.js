import Botao from './Botao';

class SuperBotao extends Botao {

    constructor() {
        super();
        this.view.style.cursor = 'pointer';
        this.view.style.marginTop = '20px';
    }

    addEvents() {
        this.view.addEventListener('mouseover', () => {
            this.view.style.background = 'green';
        });

        this.view.addEventListener('mouseout', () => {
            this.view.style.background = 'red';
        });
    }
}

export default SuperBotao;
