//TERCER COMPONENTE
import React from "react";
import ListaDeMercado from "./TercerComponente";

function App() {
  return (
    <div>
        <ListaDeMercado/>
    </div>
  );
}

export default App;

//-----------------------------------------------------------------------------------------------//
// EJERCICIO 2
// import React from "react";
// import CicloDeVida from "./Ejercicio2";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { mostrarComponente: true };
//   }

//   toggleComponent = () => {
//     this.setState((prevState => ({ mostrarComponente: !prevState.mostrarComponente })))
//   }

//   render() {
//     return (
//       <div style={{padding: "10px"}}>
//         <button onClick={this.toggleComponent}>
//           {this.state.mostrarComponente ? "Ocultar el Componente" : "Mostrar el componente"}
//         </button>
//         {this.state.mostrarComponente && <CicloDeVida />}
//       </div>
//     );
//   }
// }

// export default App;
//--------------------------------------------//
//EJERCICIO 1
// import React from "react";
// import ContadorSimple from "./Ejercicio1";

// function App() {
//   return (
//     <div>
//       <ContadorSimple/>
//     </div>
//   );
// }

// export default App;
