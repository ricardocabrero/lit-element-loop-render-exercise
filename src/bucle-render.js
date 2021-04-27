import { html, LitElement, css } from 'lit-element';

class BucleRender extends LitElement {
    
    static get properties() {
        return {
            serie: { type: Array }
        }
    }

    static get styles() {
        return css`
        :host {
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
        p {
            font-size: 14px;
            max-width: 600px;
        }
    
        ul {
            display:flex;
            list-style: none;
            padding: 0;
        }
        img {
            width: 375px;
            height: auto; 
            display: block;
        }
        `
    }

    constructor() {
        super();
        this.serie = ['1', '2', '3', '4', '5'];
    }

    render() {

        const btns = this.serie.map((element, i) => 
        html`<button id=${i+1}>${element}</button>`);
        
        return html`
        <p><strong>Ejercicio:</strong> definir una propiedad array con varias posiciones de tipo texto, y mediante un bucle
            imprimir una serie de botones con los textos del array.
        </p>
        <ul>
            ${btns}
        </ul>
        <img src="./src/img/screen01.png"/>`
    }
}

customElements.define('bucle-render', BucleRender);