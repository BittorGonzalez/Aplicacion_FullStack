import React, {} from 'react'
import DataTable from 'react-data-table-component';

function Articulos() {


    
    const data = [
        { id: 1, nombre: "Pedro", puesto: "Director" },
        { id: 2, nombre: "Maria", puesto: "Trabajador" },
        { id: 3, nombre: "Pepe", puesto: "Administrador" },
        { id: 4, nombre: "Leon", puesto: "Gerente" },
        { id: 5, nombre: "Carlos", puesto: "Fontanero" },
        { id: 6, nombre: "Laia", puesto: "Diseñador" },
        { id: 7, nombre: "Perla", puesto: "Contable" },
        { id: 8, nombre: "Raul", puesto: "Portero" }
    
    
    ]



    const columnas = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
            reorder: true
        },

         {
            name: 'Nombre',
             selector: row => row.nombre,
             sortable: true,
             reorder: true,
        },

         {
            name: 'Puesto',
             selector: row => row.puesto,
             sortable: true, 
             reorder: true,
        }
    ]

    return (
        <div>
            <h2>Consulta de articulos</h2>
            <DataTable columns={columnas} data={data} />

        </div>


       
    )


}


export default Articulos