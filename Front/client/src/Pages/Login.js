import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    return (
        <div id='login_bg' className='d-flex flex-column vh-100 justify-content-center align-items-center'>

            <h2 className='text-light'>Bienvenido</h2>
            <h4 className='text-light'>Inicia sesion para usar la aplicacion</h4>

            <form className='bg-light p-4 rounded mt-4'>
                <div className="mb-3">
                    <label for="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" />

                </div>
                <div className="mb-3">
                    <label for="contraseña" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contraseña" 
                        placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-primary">Iniciar sesion</button>
            </form>
        </div>
    )

}
   

export default Login;