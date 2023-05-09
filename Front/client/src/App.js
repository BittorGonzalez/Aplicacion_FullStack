import React, { useEffect, useState } from 'react';

function App() {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/registros')
            .then(response => response.json())
            .then(data => setRegistros(data));
    }, []);

    return (
        <div>
            <h1>Registros</h1>
            <ul>
                {registros.map(registro => (
                    <li key={registro.id}>{registro.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
