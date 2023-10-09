import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState} from "react";
import { getAllDrivers, orderDrivers, filterDrivers, getDriverName, getAllTeams } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";




const Home = () =>{

    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.driverShow);
    const teams = useSelector((state) => state.allTeams);
    const [searchString, setSearchString] = useState("");

    // se ordenan los teams para la busqueda
    let sortedTeams = teams.sort((a,b) => a.name.localeCompare(b.name) );
    
    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [input, setInput] = useState(1);
    const elementsPerPage = 9;
    const startIndex = (currentPage-1)*elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const currentElements = drivers.slice(startIndex, endIndex);
    const totalPages =Math.ceil(drivers.length/elementsPerPage);
    const enter = 13;

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
        dispatch(getDriverName(searchString));
        setCurrentPage(1)
        setInput(1)
    }
    
    const handleOrder = (event) => {
        dispatch(orderDrivers(event.target.value));
        setCurrentPage(1)
        setInput(1)
        
    }

    const handleFilter = (event) => {
        dispatch(filterDrivers(event.target.value));
        setCurrentPage(1)
        setInput(1)
    }

    const handleSubmitAll = (event) => {
        event.preventDefault();
        dispatch(getAllDrivers());
        setCurrentPage(1)
        setInput(1)
    }

    const pageHandler = (event) =>{
        event.preventDefault();
        if (event.target.value === "next"){
            if (currentPage < totalPages){
                setCurrentPage(currentPage +1)
                setInput(input +1)
            } 

        }else{
            if (currentPage > 1) {
                setCurrentPage(currentPage-1)
                setInput(input-1)
            }
        }
    };

    const enterInput = (event) =>{
        if(event.keyCode == enter){
           if(event.target.value <= totalPages && event.target.value >0){
            setCurrentPage(parseInt(event.target.value))
            setInput(parseInt(event.target.value))
            }
        }  
    };

    const pageChange = (event) => {
        setInput(event.target.value)
    }
    

    return (
        <div>
            <button className='button' type = "submit" onClick = {handleSubmitAll}>All Drivers</button>

            <input type='search' onChange={handleChange} placeholder = "Search"/>
            <button className='button' type = "submit" onClick= {handleSubmit}>Search</button>
            
            <label className='label'>Order</label>         
            <select onChange ={handleOrder}> 
                <option selected={true} disabled>Select option</option>           
                <option value="alpha">in alphabetical order</option>
                <option value="birthDay">birth day order</option>
            </select>
            <label className='label'>Team</label>
            <select onChange = {handleFilter}name="teams">
               { sortedTeams?.map((team) => <option key={team.id} value={team.name}>{team.name}</option>)}
             </select>

             <label className='label'>Origin</label>      
             <select onChange = {handleFilter}> 
                <option selected={true} disabled >Select option</option>
                <option value="baseDatos">Data Base Drivers</option>
                <option value="api">Api Drivers</option>
                <option value="allDrivers">All Drivers</option>
            </select>
            <br>
            </br>
            
            <button className='button2'value='back' type = "submit" onClick= {pageHandler}>{'<<'}</button>
            <input className='input' type="text" name ='page' value={input} onChange = {pageChange} onKeyDown={event => enterInput(event)}/>
            <label className='label2'> de {totalPages}</label>
            <button className='button2'value ='next'type = "submit" onClick= {pageHandler}>{'>>'}</button>
            
             
            <Pagination drivers = {currentElements}/>
            
             
        </div>

    )
}


export default Home;