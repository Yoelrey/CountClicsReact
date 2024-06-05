import foto_sonic from './imagenes/sonic.png';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics]=useState(0);


  const manejarClic = () => {
    setNumClics(numClics+1);

  }

const reiniciarContador= ()=> {
    setNumClics(numClics*0)  
}

  return (
    <div className="App">
       <div className='foto_sonic'>
       <h1>Contador de clicks</h1>
        <img className='foto_sonic' src={foto_sonic}   alt="foto_sonic" />
       </div>
       <div className='contenedor_principal'>
        <Contador numClics={numClics}/>
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto = 'Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
       </div>
    </div>
  );
}

export default App;
