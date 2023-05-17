import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

function Login() {

    const navigate = useNavigate();
    const [body, setBody] = useState({ username: '', password: '' })

    const inputChange = ({target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(body)
        navigate('/Dashboard');
        axios.post('http://localhost:3000/login', body)
            .then(res => {

                if (res.response === "Correcto") {
                    navigate('/Dashboard');
                } else {
                    alert("No existe ese usuario")
                }
                
            })

            .catch(({ response }) => {
                console.log(response)
            })
    }

    return (
        <div id='login_bg' className='d-flex flex-column vh-100 justify-content-center align-items-center'>

            <h2 className='text-light'>Bienvenido</h2>
            <h4 className='text-light'>Inicia sesion para usar la aplicacion</h4>

            <form className='bg-light p-4 rounded mt-4 col-2 mt-5' onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="usuario" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="usuario" value={body.username} name='username' onChange={inputChange } />

                </div>
                <div className="mb-3">
                    <label htmlFor="contraseña" className="form-label">Contrasena</label>
                    <input type="password" className="form-control" id="contraseña" value={body.password} name='password' onChange={inputChange} />
                </div>

                <button type="submit" className="btn btn-primary">Iniciar sesion</button>
            </form>
        </div>
    )

}
   

export default Login;