import React from 'react';

import { useEffect, useState } from 'react';



function Dashboard() {

    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/maestro_articulos')
            .then(response => response.json())
            .then(data => setRegistros(data));
    }, []);


    return (
        <div>
        <h2>Consultar datos de los articulos</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th className="" scope="">Cod_articulo</th>
                        <th className="" scope="">Descrip. Articulo</th>
                        <th scope="">Descrip. Unidad de carga</th>
                        <th scope="">Descrip. Zona picking</th>
                        <th scope="">Descrip. Zona pulmon</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (

                        <tr key={registro.CodigoArticulo}>
                            <th scope="row">{registro.CodigoArticulo}</th>
                            <td className="">{registro.DenomArticulo}</td>
                            <td>{registro.descUnidCarga}</td>
                            <td>{registro.DenominacionZona}</td>
                            <td>{registro.zonaPulmon}</td>
                        </tr>
                    ))}

                   
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard;