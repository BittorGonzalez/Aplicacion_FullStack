import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-colresize-unofficial/jquery.dataTables.colResize.css';
import 'datatables.net-colresize-unofficial/jquery.dataTables.colResize.js';

import DetalleArticulos from './DetalleArticulos';


function Articulos() {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemType, setSelectedItemType] = useState(''); 
    const [selectedRowData, setSelectedRowData] = useState(null);



    useEffect(() => {
        var table = $('#example').DataTable({
            columns: [
                { data: 'CodigoArticulo' },
                { data: 'DenomArticulo' },
                { data: 'DenominacionZona' },
                { data: 'descUnidCarga' },
                { data: 'zonaPulmon' },
            ],


            defenderRender: true,
            scroller: true,
            scrollCollapse: true,
            scrollX: true,
            language: {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Entradas",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            },
            bDestroy: true,
            colResize: {
                // Configuración de redimensionamiento de columnas
                // ...
            },
        });

        $('#example tbody').on('click', 'tr', function () {
            var data = table.row(this).data();
            setIsModalOpen(true);
            setSelectedItemType('Articulos')
            setSelectedRowData(data);
        });


        $.ajax({
            url: 'http://localhost:3000/maestro_articulos',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                table.clear().rows.add(data).draw();
               
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown);
            },
        });

        table.columns.adjust().draw();
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="MainDiv">
            <div className="container">
                <h2>Consultar datos de articulos</h2>
                <DetalleArticulos isOpen={isModalOpen} onClose={closeModal} itemType={selectedItemType} rowData={selectedRowData} />
                <table id="example" className="table display nowrap" width="100%">
                    <thead>
                        <tr>
                            <th>Cod. articulo</th>
                            <th>Descrip. Articulo</th>
                            <th>Descrip. Unidad de carga</th>
                            <th>Descrip. Zona picking</th>
                            <th>Descrip. Zona pulmon</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
}

export default Articulos;
