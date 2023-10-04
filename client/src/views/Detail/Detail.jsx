// import { useEffect } from "react";
// import { useParams } from "react-ruter-dom";
// import { useDispatch, useSelector } from "react-redux";
import "./Detail.module.css";


const Detail = () =>{
    //  const dispatch = useDispatch();
    //  const {id} = useParams ();

    //  useEffect (() => {
    //     dispatch(getDriverDetail(id))
    //  }, [id]);

    // const driver = useSelector((state)=> state.driverDetail)


    return (
    
    <div>
        {
        Number(driver.id) ? <h1>Name: {`${driver?.name.forename} ${driver?.name.surname}`}</h1>
        : <h1>Name: {`${driver?.name} ${driver?.lastname}`}</h1>
        }
        <h2>Nationality: {driver?.nationality}</h2>
        <h2>Description: {driver?.description}</h2>
        {
        Number(driver.id) ? <h2>Birth Day: {driver?.dob}</h2>
        : <h2>Birth Day: {driver.birthDay}</h2>
        }
        
        {
        Number(driver.id) ? <h2>Escuderias: {driver?.teams}</h2>
        : <h2>Escuderias: {driver?.Teams.name}</h2>
        }
        <img src={driver?.image} alt={driver?.name}/>
    </div>
    )
};
    // return (
    // <div>
    //     <h1>This Details</h1>
    // </div>
    // )


export default Detail;