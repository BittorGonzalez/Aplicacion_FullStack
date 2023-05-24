import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';



import Sidebar from "./Sidebar";
import Navbar from "./Navbar";





function DashboardLayout(props) {
    const ComponenteMostrar = props.componenteMostrar;


    return (
        <div className='wrap d-flex flex-wrap'>
            <div>
                <Sidebar />
            </div>

            <div className='col d-flex flex-column'>
                <Navbar />

                <main className='col p-5'>
                    <ComponenteMostrar/>
                  
                </main>
            </div>
        </div>




    )





}


export default DashboardLayout;
