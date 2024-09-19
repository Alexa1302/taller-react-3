import React from "react";

class ListaDeMercado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mercado: ['Leche', 'Azucar', 'Sal'], nuevoProducto: ''};
    }

    introducirProducto = (event) => {
        this.setState({nuevoProducto: event.target.value});
    };

    agregarProducto = (event) => {
        event.preventDefault();
        if (this.state.nuevoProducto.trim() !== '') {
            this.setState((prevState) => ({
                mercado: [...prevState.mercado, prevState.nuevoProducto], nuevoProducto: ''
            }));   
        }
    }

    componentDidUpdate(preProps, prevState) {
        if (prevState.mercado.length !== this.state.mercado.length) {
            console.log("La lista de mercado ha sido actualizada");
        }
    }

    render() {
        return (
            <div>
                <h1>Lista de Mercado</h1>
                <ul>
                    {this.state.mercado.map((mercado, index) => (
                        <li key={index}>{mercado}</li>
                    ))}
                </ul>
                <input type="text" value={this.state.nuevoProducto} onChange={this.introducirProducto} placeholder="Agregar Producto"/>
                <button onClick={this.agregarProducto}>Agregar Producto</button>
            </div>
        );
    }
}

export default ListaDeMercado;