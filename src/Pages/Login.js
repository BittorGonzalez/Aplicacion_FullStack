import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'
import DashboardLayout from '../Components/DashboardLayout';


function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  
    function handleSubmit(event) {
     
     
        event.preventDefault();
        axios.post('http://localhost:3000/login', { username, password })
            .then(res => {
                if (res.data === 'Login correcto') {

                    localStorage.setItem('username', username);
                    navigate("/Articulos")

                } else {
                    alert('Usuario o contrasena incorrectos, vuelve a intentarlo')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div id='login_bg' className='d-flex flex-column vh-100 justify-content-center align-items-center'>

            <h2 className='text-light'>Bienvenido</h2>
            <h4 className='text-light'>Inicia sesion para usar la aplicacion</h4>

            <form className='bg-light p-4 rounded mt-4 col-2 mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" value={username} name='username' onChange={e => setUsername(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label htmlFor="contraseña" className="form-label">Contrasena</label>
                    <input type="password" className="form-control" id="contraseña" value={password} name='password' onChange={e => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Iniciar sesion</button>
            </form>

        </div>
    )

}

export default Login;
