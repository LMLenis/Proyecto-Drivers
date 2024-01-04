//Componente de portada

import { Link } from "react-router-dom"
import { useEffect } from "react";
import { getAllDrivers } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
import  './landing.css'
import photoBack from "../../assets/Formula1.png"

const Landing = () =>{

    const dispatch = useDispatch();
    // Trae todos los drivers para renderizar en la Home

    useEffect(() => {
        dispatch(getAllDrivers())
    
      }, [])


    return (
     <div className="button-container">
        
        <img src = {photoBack} alt='' /> 
        
        <button ><Link to='/home' >CONTINUAR</Link></button>  
     </div>

    )
}

export default Landing;