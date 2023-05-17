import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';





import { Routes, Route } from 'react-router-dom'



import Consulta from "../Pages/Consulta";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import Dashboard from "../Pages/Dashboard";




function DashboardLayout() {


    return (
        <div className='wrap d-flex flex-wrap'>
            <div>
                <Sidebar />
            </div>

            <div className='col d-flex flex-column'>
                <Navbar />

                <main className='col p-5'>
                    <Routes>
                        <Route path='/' element={<Dashboard />}></Route>
                        <Route path='/Consulta' element={<Consulta />}></Route>
                    </Routes>
                </main>
            </div>
        </div>




    )





}


export default DashboardLayout;
