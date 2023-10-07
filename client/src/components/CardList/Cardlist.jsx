import { Link } from "react-router-dom";
import  "./cardList.css";

//import { useDispatch } from "react-redux";




const CardList = ({ id, name, lastname, image, teams }) => {
    //const dispatch = useDispatch();
  
   console.log(id, teams)
   return (
    <div className ='container.card'>   
        <div className='title'>
            <Link to={`/home/${id}`}>
                {
                    <h2>{`${name} ${lastname}`}</h2>
                }
            </Link>
        </div>
        <div className="container">
            <div className='card'>
                <img src= {image} alt={name} />
                <p className ='text'>{teams}</p>
            </div>
        </div>
    </div>
    )
}


export default CardList;