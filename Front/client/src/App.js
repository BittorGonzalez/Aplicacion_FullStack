import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';





import {Routes, Route } from 'react-router-dom'



import Login from "./Pages/Login";
import Consulta from "./Pages/Consulta";

import DashboardLayout from "./Components/DashboardLayout";


function App() {
    

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard/*" element={<DashboardLayout />}>
                <Route index element={<DashboardLayout />} />
                <Route path="Consulta" element={<Consulta />} />
                {/* Agrega m�s rutas de componentes seg�n sea necesario */}
            </Route>
        </Routes>

       


    )
        
       
    


}


export default App;
