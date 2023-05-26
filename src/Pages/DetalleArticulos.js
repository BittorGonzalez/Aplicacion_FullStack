import React, { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function DetalleArticulos({ isOpen, itemType, onClose, rowData }) {


    let modalTitle = '';
    if (itemType.toLowerCase() === 'articulos') {
        modalTitle = 'Detalle de Articulos';
    } else if (itemType.toLowerCase() === 'entradas') {
        modalTitle = 'Detalle de Entradas';
    }


    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>
                {modalTitle }
            </ModalHeader>
            <ModalBody>

                {modalTitle.includes('Articulos') && rowData && (
                    <div>
                        <p><strong>Codigo Articulo:</strong> {rowData.CodigoArticulo}</p>
                        <p><strong>Descripcion Articulo:</strong> {rowData.DenomArticulo}</p>
                        <p><strong>Descripcion Unidad de Carga:</strong> {rowData.DenominacionZona}</p>
                        <p><strong>Descripcion Zona Picking:</strong> {rowData.descUnidCarga}</p>
                        <p><strong>Descripcion Zona Pulmon:</strong> {rowData.zonaPulmon}</p>
                    </div>
                )}
                {modalTitle.includes('Entradas') && rowData && (
                    <div>
                        <p><strong>Numero Entrada:</strong> {rowData.NumeroEntrada}</p>
                        <p><strong>Id Linea:</strong> {rowData.IdLinea}</p>
                        <p><strong>Codigo Articulo:</strong> {rowData.CodigoArticulo}</p>
                        <p><strong>Descripcion Articulo:</strong> {rowData.DenomArticulo}</p>
                        <p><strong>Descripcion Zona Picking:</strong> {rowData.DenominacionZona}</p>
                        <p><strong>Descripcion Contenedor:</strong> {rowData.Descripcion}</p>
                        <p><strong>Descripcion Lote:</strong> {rowData.Lote}</p>
                       

                    </div>
                )}
               
            </ModalBody>

            <ModalFooter>
                <Button color="secondary" onClick={onClose}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default DetalleArticulos;
