import recArr from "./assets/recArr.png";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import axios from 'axios'
export default function Register(){
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
        const spinner = () =>{
            console.log("Spinner started");
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
                console.log("Navigating to /login");
                navigate("/")
            },200);
    
        }
        const [values, setValues]=useState({
            username:"",
            email:"",
            password:""
        })
        const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/registers',{username,email,password}) //??
            .then(result => console.log(result),
             navigate("/tasks"))
            .catch(err => console.log(err))
            
        }
    return(
        <>
            <div id="header"></div>
            <div id="main">
                
            <p>hii! please log in or create your account for my to-do website. </p>
                <img src="https://i.pinimg.com/originals/7a/f4/58/7af458bc35898f4ffddc076491ea9a37.gif" id="helloKittyimg"/>
                <input type="text" id="user" placeholder="username" name="username" onChange={(e)=>setValues({...values, username: e.target.value})} />
                <input type="text" id="email" placeholder="email"name="email" onChange={(e)=>setValues({...values, email: e.target.value})}/>
                <div>
                <input type="password" id="password" placeholder="password" name="password" onChange={(e)=>setValues({...values, password: e.target.value})}/>
                <img src={recArr} alt="arrow" id="arrow" onClick={handleSubmit} type="submit"/>
                </div>
                <a onClick={spinner} id="createAcc">Already have an account?</a>
                {loading && <FadeLoader id="spin" color="#EACACB" />}
            </div>
        </>
    )
}