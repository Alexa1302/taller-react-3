import React from "react";

class ContadorSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contador: 0};
    }

    incrementar = () => {
        this.setState({contador: this.state.contador + 1});
    }

    //---------------------------------------------------------------------//
    //Intenta modificar el código para explorar cómo funcionan setState.
    decrementar = () => {
        this.setState({contador: this.state.contador - 1});
    }

    resetear = () => {
        this.setState({contador: 0});
    }
    //---------------------------------------------------------------------//
    
    render() {
        return (
            <div style={{padding: "10px"}}>
                <p>{this.state.contador}</p>
                <button onClick={this.incrementar}>Incrementar</button>
                {/*--------------------------------------------------*/}
                <button onClick={this.decrementar}>decrementar</button>
                <button onClick={this.resetear}>Resetear</button>
                {/*--------------------------------------------------*/}
            </div>
        );
    }

}

export default ContadorSimple;