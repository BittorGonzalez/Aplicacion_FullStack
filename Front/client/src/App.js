import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';





import {Routes, Route } from 'react-router-dom'



import Login from "./Pages/Login";

import DashboardLayout from "./Components/DashboardLayout";
import Consulta from "./Pages/Consulta";
import Dashboard from "./Pages/Dashboard";


function App() {
    

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<DashboardLayout componenteMostrar={Dashboard} />}></Route>
            <Route path="/Consulta" element={<DashboardLayout componenteMostrar={Consulta} />}></Route>

        </Routes>

       


    )
        
       
    


}


export default App;
