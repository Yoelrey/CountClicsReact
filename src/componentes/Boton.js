import React from "react";
import '../estilos/boton.css'
function Boton({texto , esBotonDeClic, manejarClic}){

    return(
        <button className={esBotonDeClic ? 'boton_clic' : 'boton_reiniciar'}
        onClick={manejarClic}>
            {texto}
        </button>
    );

}


export default Boton;