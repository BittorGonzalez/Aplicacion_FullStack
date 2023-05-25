import React from 'react'
import { useEffect, useState } from 'react';


function Pedidos() {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/Pedidos')
            .then(response => response.json())
            .then(data => setRegistros(data));
    }, []);

    return (
        <div className='mt-5'>
            <h2>Consultar datos</h2>
            {registros.map(registro => (
                <li key={registro.IdGrupo}>{registro.Descripcion} &nbsp; {registro.Proceso}</li>
            ))}
            
        </div>
    )
}

export default Pedidos;
