/* eslint-disable react/prop-types */
//Este componenete renderiza la card del driver

import { Link } from "react-router-dom";
import  "./cardList.css";




const CardList = ({ id, name, lastname, image, teams, birthDay }) => {
 
   return (
    <div className ='container.card'>   
        
        <div className="container">
        
            <div className='card'>
                <div className='title'>
                    <Link to={`/home/${id}`}>
                    {
                    <h2>{`${name} ${lastname}`}</h2>
                    }
                    </Link>
                </div>
                <img src= {image} alt={name} />
                <p className ='text'>{teams}</p>
                <p className ='text'>{birthDay}</p>
            </div>
        </div>
    </div>
    )
}


export default CardList;