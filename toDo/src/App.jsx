import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./register";
import Tasks from "./tasks";

export default function App(){
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
    </Routes>
  </Router>
  )
}