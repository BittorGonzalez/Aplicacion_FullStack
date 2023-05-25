import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

import 'datatables.net-colresize-unofficial/jquery.dataTables.colResize.css';
import 'datatables.net-colresize-unofficial/jquery.dataTables.colResize.js';




function Prueba() {

    useEffect(() => {
        var table = $('#example').DataTable({
            defenderRender: true,
            scroller: true,
            scrollCollapse: true,
            scrollX: true,
            "initComplete": function (settings, json) {
                $("#DataTableID").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
            },
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
            "bDestroy": true,
                 colResize: {
                isEnabled: true,
                saveState: false,
                hoverClass: 'dt-colresizable-hover',
                hasBoundCheck: true,
                minBoundClass: 'dt-colresizable-bound-min',
                maxBoundClass: 'dt-colresizable-bound-max',
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
                }
            }
        });
        table.columns.adjust().draw();
    }, []);

    return (
        <div className="MainDiv">

            <div className="container">
                <h2>Consulta de datos</h2>
                <table id="example" className="table  display nowrap" width="100%">
                    <thead>
                        <tr>
                            <th>Cod_articulo</th>
                            <th>Descrip. Articulo</th>
                            <th>Descrip. Unidad de carga</th>
                            <th>Descrip. Zona picking</th>
                            <th>Descrip. Zona pulmon</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            
                        </tr>

                        <tr>
                            <td>Tiger lolo</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            
                        </tr>

                        <tr>
                            <td>Tiger dfa</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            
                        </tr>
                        {/* Resto de las filas */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Prueba;
