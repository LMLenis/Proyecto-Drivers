import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation} from "react-router-dom";
import './App.css';
import axios from 'axios';

axios.defaults.baseURL="https://proyecto-drivers-production.up.railway.app";

function App() {
  const location = useLocation()
    
   return (
       
      <div>
       
       {
            location.pathname !=='/'&& <Navbar/>
       }
       
        <Routes>
          <Route path='/' element = {<Landing/>} />
          <Route exact path = '/home' element = {<Home/>}/>
          <Route path='/home/:id' element={<Detail/>}/>
          <Route path = '/form' element={<Form/>}/>
        </Routes>
      </div>
    
   );
}


export default App;


