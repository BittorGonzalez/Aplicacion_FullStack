import React from 'react';
import { Link } from "react-router-dom";


function HomePage() {

    return (
        <div>
            <h2>Hola desde la pagina de inicio</h2>
            <Link to="sobre-nosotros">Haz clic para ver la p�gina sobre nosotros</Link>
        </div>
        
    )
}
export default  HomePage;