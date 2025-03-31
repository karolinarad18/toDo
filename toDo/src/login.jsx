import recArr from "./assets/recArr.png";
import { useNavigate } from "react-router-dom";

import { useState }  from "react";
import FadeLoader from "react-spinners/FadeLoader";
import axios from "axios";
export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const [user,setUser]=useState(null)
    // 🔹 Spinner do przejścia do rejestracji
    const spinner = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate("/register");
        }, 200);
    };

    // 🔹 Funkcja obsługi logowania
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/login', values);
            console.log(response.data);

            if (response.data === "Success") {
                setUser(values.username)
                navigate("/tasks");
            } else {
                alert("Invalid username or password!");
            }
        } catch (error) {
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div id="header"></div>

            <div id="main">
                <p>hii! please log in or create your account for my to-do website.</p>
                <img src="https://i.pinimg.com/originals/7a/f4/58/7af458bc35898f4ffddc076491ea9a37.gif" id="helloKittyimg" />

                <input
                    type="text"
                    id="user"
                    placeholder="username"
                    onChange={(e) => setValues({ ...values, username: e.target.value })}
                />

                <div>
                    <input
                        type="password"
                        id="password"
                        placeholder="password"
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                    />
                    <img src={recArr} alt="arrow" id="arrow" onClick={handleSubmit} />
                </div>

                <a onClick={spinner} id="createAcc">Create an account</a>
                {loading && <FadeLoader color="#EACACB" />}
            </div>
        </>
    );
}
