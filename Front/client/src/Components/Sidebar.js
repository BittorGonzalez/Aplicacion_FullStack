import React from 'react';

import { Link } from 'react-router-dom';

 function Sidebar() {
    return (

        <div className='sidebar d-flex flex-column align-items-center p-3'>

            <div className='logo pb-2'>

                <Link to='/' className='d-flex align-items-center text-decoration-none'>
                    <i className='bi bi-nut-fill fs-1'></i>
                    <span className='fs-5 fw-semibold ms-2'>AplicacionWeb</span>
                </Link>
               
            </div>

            <hr className='h-separator' />
            <ul className='list-unstyled p-2 w-100'>
                <li className='text-white w-100 p-1 rounded'>
                    <Link to='/Dashboard'>
                        <i className="bi bi-clipboard-check me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>Dashboard</span>
                    </Link>
                 
                    
                </li>

                <li className='text-white w-100 p-1 rounded'>
                    <Link to='/Consulta'>
                        <i className="bi bi-cup-hot me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>Consulta</span>
                    </Link>

                </li>

                <li className='text-white w-100 p-1 rounded'>
                    <Link to='/Pedidos'>
                        <i className="bi bi-box-seam me-4 fs-4 ps-2"></i>
                        <span className='fs-5'>ProjectResume</span>
                    </Link>
                        
                </li>

             
                
            </ul>
        </div>


    )
}

export default Sidebar;