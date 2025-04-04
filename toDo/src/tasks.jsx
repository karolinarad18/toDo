import {Calendar} from 'react-calendar'
import trash from "./assets/trash.png";
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router';
export default function Tasks(){
    const username = localStorage.getItem("loggedUser")
    const navigate = useNavigate()
    
    const handleLogout = () =>{
        localStorage.removeItem("loggedUser")
        navigate("/")
    }
    return(
        <div id='tasksContainer'>
            <main id='tasksMain'>
                <Calendar id="calendar"/>
                <p>username: {username} </p>
                <button id='logout' onClick={handleLogout}>log out</button>
            </main>
            <aside id='tasksAside'>
                <div id='date'>
                    <p>Fri Mar 21 2025</p>
                    <p>7:21:05PM</p>
                </div>
                <h1>to-do list</h1>
                <button id='addnew'>add new</button>
                <div id='tasks'>
                    <div className="task">
                        <div>
                        <button id='done'></button>
                        <p>take out the trash</p>
                        </div>
                        <img src={trash} id='trash'/>
                    </div>
                </div>
            </aside>
        </div>
    )
}