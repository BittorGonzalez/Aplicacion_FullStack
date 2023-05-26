import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

import 'datatables.net-colresize-unofficial/jquery.dataTables.colResize.css';
import 'datatables.net-colresize-unofficial/jquery.dataTables.colResize.js';



import DetalleArticulos from './DetalleArticulos';

function Entradas() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemType, setSelectedItemType] = useState(''); 
    const [selectedRowData, setSelectedRowData] = useState(null);


    useEffect(() => {
        var table = $('#example').DataTable({
            columns: [
                { data: 'NumeroEntrada' },
                { data: 'IdLinea' },
                { data: 'CodigoArticulo' },
                { data: 'DenomArticulo' },
                { data: 'DenominacionZona' },
                { data: 'Descripcion' },
                { data: 'Lote' }

            ],
            defenderRender: true,
            scroller: true,
            scrollCollapse: true,
            scrollX: true,
            language: {
                decimal: "",
                emptyTable: "No hay información",
                info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
                infoFiltered: "(Filtrado de _MAX_ total entradas)",
                infoPostFix: "",
                thousands: ",",
                lengthMenu: "Mostrar _MENU_ Entradas",
                loadingRecords: "Cargando...",
                processing: "Procesando...",
                search: "Buscar:",
                zeroRecords: "Sin resultados encontrados",
                paginate: {
                    first: "Primero",
                    last: "Ultimo",
                    next: "Siguiente",
                    previous: "Anterior",
                },
            },


            bDestroy: true,
            colResize: {
                isEnabled: true,
                saveState: false,
                hoverClass: "dt-colresizable-hover",
                hasBoundCheck: true,
                minBoundClass: "dt-colresizable-bound-min",
                maxBoundClass: "dt-colresizable-bound-max",
                isResizable: function (column) {
                    return true;
                },
                onResizeStart: function (column, columns) {
                    // Custom logic when starting column resizing
                },
                onResize: function (column) {
                    // Custom logic during column resizing
                },
                onResizeEnd: function (column, columns) {
                    // Custom logic when column resizing ends
                },
                getMinWidthOf: function ($thNode) {
                    // Custom logic to calculate the minimum width of the column
                },
                stateSaveCallback: function (settings, data) {
                    // Custom logic to save the state
                },
                stateLoadCallback: function (settings) {
                    // Custom logic to load the state
                },
            },
        });

        $('#example tbody').on('click', 'tr', function () {
            var data = table.row(this).data();
            setIsModalOpen(true);
            setSelectedItemType('Entradas');
            setSelectedRowData(data);

        });

        $.ajax({
            url: 'http://localhost:3000/entradas_lineas', // Cambia la URL según tu API
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                // Agregar los datos a la tabla
                table.rows.add(data).draw();
                console.log(data)
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
                <h2>Consultar datos de entradas</h2>
                <DetalleArticulos isOpen={isModalOpen} onClose={closeModal} itemType={selectedItemType} rowData={selectedRowData} />
                <table id="example" className="table  display nowrap" width="100%">
                    <thead>
                        <tr>
                            <th>Num. entrada</th>
                            <th>Id linea</th>
                            <th>Cod. articulo</th>
                            <th>Descrip. articulo</th>
                            <th>Descrip. zona picking</th>
                            <th>Descrip. contenedor</th>
                            <th>Descrip. lote</th>



                        </tr>
                    </thead>
                    <tbody>


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Entradas;
