import React from 'react';

function Sidebar() {
    return (

        <div className='sidebar d-flex flex-column align-items-center p-3'>

            <div className='logo pb-2'>
                <a className='d-flex align-items-center text-decoration-none'>
                    <i className='bi bi-nut-fill fs-1'></i>
                    <span className='fs-5 fw-semibold ms-2'>AplicacionWeb</span>
                </a>
            
            </div>

            <hr className='h-separator' />
            <ul className='list-unstyled p-2 w-100'>
                <li className='text-white w-100 p-1 rounded'>
                    <a href='' className=''>
                        <i className="bi bi-clipboard-check me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>Dashboard</span>
                    </a>
                    
                </li>

                <li className='text-white w-100 p-1 rounded'>
                    <a href='' >
                        <i className="bi bi-box-seam me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>Pedidos</span>
                    </a>

                </li>

                <li className='text-white w-100 p-1 rounded'>
                    <a href=''>
                        <i className="bi bi-people me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>Clientes</span>
                    </a>

                </li>

                <li className='text-white w-100 p-1 rounded'>
                    <a href=''>
                        <i className="bi bi-speedometer me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>Otra consulta</span>
                    </a>

                </li>
                
            </ul>
        </div>


    )
}

export default Sidebar;