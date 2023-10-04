import { Link } from "react-router-dom"
import  styledLanding from './Landing.module.css'
import photoBack from "../../assets/Formula1.png"

const Landing = () =>{
    return (
     <div className={styledLanding.divContent}>
        <button className={styledLanding.button}><Link to='/home' >CONTINUAR</Link></button>
        <br/>
        <img src = {photoBack} width="1024px" heigtht="350px" alt='' />   
     </div>

    )
}

export default Landing;