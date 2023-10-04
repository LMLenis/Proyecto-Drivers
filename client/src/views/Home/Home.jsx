import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Cards/Cards";
import getteams from "../Getteams";
import { useEffect, useState} from "react";
import { getAllDrivers } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./Home.module.css";


const teams = await getteams();

const Home = () =>{


 console.log(teams);

    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.allDrivers);
    // useEffect(() => {
    //     return () => {
    //         getAllDrivers()
    //     };
    // });
  
    useEffect(() => {
      dispatch(getAllDrivers())
    }, [])

    drivers.map((drive) => {
        console.log(drive)
    });
    
    const handleOrder = (event) => {
        dispatch(orderDrivers(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterDrivers(event.target.value))
    }
    return (
        <div>
            <select onChange ={handleOrder}>
                <option value="A">Por orden alfabetico</option>
                <option value="B">Por fecha de Nacimiento</option>
            </select>

          
                   
             <select onChange = {handleFilter}>   
                <option value="baseDatos">Base de Datos</option>
                <option value="api">Api</option>
                <option value="allDrivers">All Drivers</option>
            </select>

            <Cards drivers = {drivers}/>    
             
        </div>

    )
}
//
//<Navbar/>
 //<Cards drivers = drivers/>

//   //* <select onChange = {handleFilter}>
//                 { 
//                 teams.map((team) => {
//                     <option value={team.name}>{team.name}</option>
//                 })}
//             </select> */}

export default Home;