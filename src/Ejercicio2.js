import React from "react";

class CicloDeVida extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mensaje: "Ciclo de Vida de un Componente"}
    }
    
    componentDidMount() {
        console.log("El componente se ha montado");   
    }

    actualizarComponente = () => {
        this.setState({mensaje: "El componente se actualiza"})
    }

    componentDidUpdate() {
        console.log("El componente se ha actualizado");
    }

    componentWillUnmount() {
        console.log("El componente va a desaparecer");
    }

    render() {
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
                <button onClick={this.actualizarComponente}>Actualizar Componente</button>
            </div>
        );
    }
}

export default CicloDeVida;