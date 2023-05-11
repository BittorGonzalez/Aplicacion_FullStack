import React, {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


import { Routes, Route } from "react-router-dom"


import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage'
import SobreNosotros from './Pages/SobreNosotros'


function App() {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(data => setRegistros(data));
    }, []);

    return (

        <div className='wrap d-flex flex-wrap mh-100'>

          

                <div className=''>
                    <Sidebar />
                </div>

                <div className='col'>
                    <Navbar />

                    <main className=''>
                        {registros.map(registro => (
                            <li key={registro.Id}>{registro.Ambito}</li>
                        ))}

                    </main>
                </div>


        </div>


    )
        
       
    


}


export default App;
