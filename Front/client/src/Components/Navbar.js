import React from 'react';


function Navbar() {
    return (
        <nav className="navbar d-flex justify-content-between align-items-center py-2">
            <div className='search-bar col-5 ps-5'>
                <div className="input-group">
                    <input type="text" placeholder='Buscar' className="form-control" />
                    <div className="input-group-append">
                        <button className="btn">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </div>

            </div>

            <div className='configs col-4 '>
                <ul className='d-flex list-unstyled gap-4 m-0 align-items-center justify-content-center'>
                    <li><i className="bi bi-gear-fill"></i></li>
                    <li><i className="bi bi-moon-fill"></i></li>
                    <li><i className="bi bi-fullscreen"></i></li>
                    <li><i className="bi bi-bell-fill"></i></li>
                    <li><i className="bi bi-columns-gap"></i></li>

                </ul>
            </div>

            <div className='login col-3 d-flex align-items-center ps-4'>
                <div className='account-img'>
                    <img alt='icono' className='rounded-pill' src={process.env.PUBLIC_URL + '/img/icono_usuario.jpg'} width="40px" height="40px" />
                </div>

                <div className='account-info d-flex flex-column ms-3'>
                    <h5 className='fs-5 fw-bold'>James Doe</h5>
                    <span className=''>Director</span>
                   
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;