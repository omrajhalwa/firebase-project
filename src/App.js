import {Routes,Route} from "react-router-dom"
import './App.css';
import RegisterPage from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./pages/Login"
function App() {
  return (
    <Routes>
       <Route  path="/" element={<h1>Home</h1>}/>
       <Route  path="/login" element={<Login/>}/>
       <Route  path="/register" element={<RegisterPage></RegisterPage>}/>
    </Routes>
  );
}

export default App;
