import React from 'react'
import { useEffect, useState } from 'react';



function Consulta() {

    const [registros, setRegistros] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/entradas_lineas')
            .then(response => response.json())
            .then(data => setRegistros(data));
    }, []);



    return (

        <div className=''>
            <h2>Segunda consulta a base de datos</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th className="" scope="">Num_EntradaLinea </th>
                        <th className="" scope="">Id_linea</th>
                        <th scope="">Cod. Articulo</th>
                        <th scope="">Denom. Articulo</th>
                        <th scope="">Descrip. Zona Picking</th>
                        <th scope="">Descrip. Contenedor</th>
                         <th scope="">Descrip. Lote</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(registro => (

                        <tr key={registro.NumeroEntrada}>
                            <th scope="row">{registro.NumeroEntrada}</th>
                            <td className="">{registro.IdLinea}</td>
                            <td className="">{registro.CodigoArticulo}</td>
                            <td className="">{registro.DenomArticulo}</td>
                            <td className="">{registro.DenominacionZona}</td>
                            <td className="">{registro.Descripcion}</td>
                            <td className="">{registro.Lote}</td>
                        </tr>
                    ))}



                </tbody>
            </table>

        </div>
    )

}
 
export default Consulta;