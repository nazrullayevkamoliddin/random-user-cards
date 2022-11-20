import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./home";
import "./main.css";
import User from "./user";

function App() {
  const url = "https://randomuser.me/api/?results=50";
  const [data, setData] = useState([]);
  const [user, setUser] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
useEffect(()=>{
  if(location.pathname==="/user"&&user===''){
    navigate("/")
  }
})

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
    });
  }, []);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home data={data} setUser={setUser} />}/>
        <Route path="/user" element={<User user={user}/>}/>
      </Routes>
    </div>
  );
}

export default App;
