import React from "react";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState} from "react";
import { getAllDrivers, orderDrivers, filterDrivers, getDriverName, getAllTeams } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import getteams from "../Getteams";
import "./home.css";





const Home = () =>{




    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.driverShow);
    const teams = useSelector((state) => state.allTeams);
    //const [filtered, setFiltered] = useState(drivers);
    const [searchString, setSearchString] = useState("");
    
     
    useEffect(() => {
      dispatch(getAllDrivers())
      dispatch(getAllTeams())
    }, [dispatch])

   
    
     //console.log(drivers);

      const handleChange = (event) => {
        event.preventDefault();
        setSearchString(event.target.value);
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(searchString)
        //const filtered = drivers.filter((driver) => driver.name.includes(searchString));
          dispatch(getDriverName(searchString));
    }
    
    const handleOrder = (event) => {
        dispatch(orderDrivers(event.target.value));
        
    }

    const handleFilter = (event) => {
        dispatch(filterDrivers(event.target.value));
    }

    const handleSubmitAll = (event) => {
        event.preventDefault();
        dispatch(getAllDrivers());
    }

    return (
        <div>
            <button type = "submit" onClick = {handleSubmitAll}>All</button>

            <input type='search' onChange={handleChange} placeholder = "Search"/>
            <button type = "submit" onClick= {handleSubmit}>Search</button>
            
            <label>Order</label>
            
            <select onChange ={handleOrder}>
                
                <option value="alphabetical">in alphabetical order</option>
                <option value="birthDay">birth day order</option>
            </select>
            <label>Team</label>
            <select onChange = {handleFilter}name="teams">
               { teams?.map((team) => <option key={team.id} value={team.name}>{team.name}</option>)}
             </select>

             <label>Origin</label>      
             <select onChange = {handleFilter}> 
                
                <option value="baseDatos">Data Base Drivers</option>
                <option value="api">Api Drivers</option>
                <option value="allDrivers">All Drivers</option>
            </select>
            
            
            <Cards drivers = {drivers}/>    
             
        </div>

    )
}

export default Home;