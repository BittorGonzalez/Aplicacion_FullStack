import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

import Dashboard from './Pages/Dashboard';
import Pedidos from './Pages/Pedidos';
import Clientes from './Pages/Clientes';
import Otra_consulta from './Pages/Otra_consulta';





function App() {
    

    return (

      

            <div className='wrap d-flex flex-wrap'>



                <div className=''>
                    <Sidebar />
                </div>

                <div className='col d-flex flex-column'>
                    <Navbar />

                    <main className='col p-5'>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/Pedidos" element={<Pedidos />} />
                        <Route path="/Clientes" element={<Clientes />} />
                        <Route path="/Otra_consulta" element={<Otra_consulta />} />
                            
                     </Routes>
                   

                    </main>
                </div>


            </div>

       


    )
        
       
    


}


export default App;
