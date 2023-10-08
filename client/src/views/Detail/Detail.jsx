import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDriverDetail } from "../../redux/actions";
import "./detail.css";


const Detail = () =>{
      const dispatch = useDispatch();
      const {id} = useParams ();

      console.log(id);
       useEffect (() => {
          dispatch(getDriverDetail(id))
       }, [id]);

      const driver = useSelector((state)=> state.driverDetail)
    
      let newDriverTeam = [];
      if (!Number(id)){
         for (let i=0; i<driver.Teams?.length; i++) {
            newDriverTeam.push(driver.Teams[i].name)
         }
      }
      let escuderia = newDriverTeam.toString();
         
     return (
     <div className='detailcontainer'>
      <div className= 'card-detailcontainer'>
         <div className = 'header'>
         {
         Number(driver.id) ? <img src={driver.image.url} alt={driver.name.forename}/>
         : <img src={driver.image} alt={driver.name}/>
         }
         {
         Number(driver.id) ? <h1> {`${driver?.name.forename} ${driver?.name.surname}`}</h1>
         : <h1> {`${driver?.name} ${driver?.lastname}`}</h1>
         }
        <h2> {driver?.nationality}</h2>
        {
         Number(driver.id) ? <h2> {driver?.dob}</h2>
         : <h2> {driver.birthDay}</h2>
         }
          {
         Number(driver.id) ? <h2>Escuderias: {driver?.teams}</h2>
         : <h2>Escuderias: {escuderia}</h2>
         }
         </div>
         <div className="descripcion">
            <p>{driver?.description}</p>
        </div>
      </div>
     </div>
     )
     }


export default Detail;