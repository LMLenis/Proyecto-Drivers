//import { useState } from 'react';
import './App.css';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  //const [count, setCount] = useState(0)

   return (
    // <div classnme="App">
    //   <p>Hola mundo</p>
    // </div>

    //<Navbar/> OJO!
     
      <div>
        <Routes>
          <Route path='/' element = {<Landing/>} />
          <Route exact path = '/home' element = {<Home/>}/>
          <Route path='/home/:id' element={<Detail/>}/>
          <Route path = '/form' element={<Form/>}/>
        </Routes>;
      </div>
    
   );
}


export default App;


