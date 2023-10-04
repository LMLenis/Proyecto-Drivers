import { Link } from "react-router-dom";

//import { useDispatch } from "react-redux";

import "./CardList.module.css";


const CardList = ({ id, name, lastname, image, teams }) => {
    //const dispatch = useDispatch();
  
   
   return (
    <div>   
         <Link to={`/drivers/${id}`}>
          {
          <h2>Name: {`${name} ${lastname}`}</h2>
          }
          </Link>
          <p>ID: {id}</p>
          <p>{teams}</p>
          <img src= {image} alt={name} />

    </div>
    )
}


export default CardList;