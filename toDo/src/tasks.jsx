import {Calendar} from 'react-calendar'
import trash from "./assets/trash.png";
import 'react-calendar/dist/Calendar.css';
export default function Tasks(){
    return(
        <div id='tasksContainer'>
            <main id='tasksMain'>
                <Calendar id="calendar"/>
                <p>username: </p>
                <button id='logout'>log out</button>
            </main>
            <aside id='tasksAside'>
                <div id='date'>
                    <p>Fri Mar 21 2025</p>
                    <p>7:21:05PM</p>
                </div>
                <h1>to-do list</h1>
                <button id='addnew'>add new</button>
                <div id='tasks'>
                    <div class="task">
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