import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';





import {Routes, Route } from 'react-router-dom'



import Login from "./Pages/Login";

import DashboardLayout from "./Components/DashboardLayout";

import Articulos from "./Pages/Articulos";
import Entradas from "./Pages/Entradas";


function App() {
    

    return (
        <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/Articulos" element={<DashboardLayout componenteMostrar={Articulos} />}></Route>
            <Route path="/Entradas" element={<DashboardLayout componenteMostrar={Entradas} />}></Route>


        </Routes>

       


    )
        
       
    


}


export default App;
