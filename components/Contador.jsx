import { Component } from "react";

export default class Contador extends Component {
    
    //Esse é via construtor chamand as mesmas funcoes abaixo
    // constructor(props){
    //     super(props)
        
    //     this.state = {
    //         numero: this.props.valorInicial ?? 0,
    //         passo: this.props.passo,
    //     }
    // }

    // O simbolo de ?? simboliza um valor default que pode ser passado, nesse caso é 0. Esse é o modo pratico
    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo

        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo

        })
    }

    alteraPasso = (ev) => {
        this.setState(
            { passo: +ev.target.value }
        )}

    renderForm() {
        return (
            <>
                <h2>Via valor setado: {this.state.numero}</h2>
                <input type="number" min={1} max={1000} value={this.state.passo} onChange={this.alteraPasso} />
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </>

        )
    }
// A funcao render() serve para chamar o componente quando é montado via classe
    render() {
        return (
            <div>
                <h1>Contador (usando Classe)</h1>
                <h2>Via props de outro formulário: {this.props.valorInicial}</h2>
               {/* Possibilidade de montar o formulario via function */}
                {this.renderForm()}
            </div>
        )
    }
}