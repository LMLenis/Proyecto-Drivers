//Componente principal de la aplicación

import React from "react";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState} from "react";
import { getAllDrivers, orderDrivers, filterDrivers, getDriverName, getAllTeams } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";




const Home = () =>{

    //trae los drivers y los teams
    const dispatch = useDispatch();
    const drivers = useSelector((state) => state.driverShow);
    const teams = useSelector((state) => state.allTeams);
    //estado para el manejo de la busqueda por name
    const [searchString, setSearchString] = useState("");
    //estado que define el manejo de los errores
    const [error, setError] = useState("");

    // se ordenan los teams para la busqueda
    let sortedTeams = teams.sort((a,b) => a.name.localeCompare(b.name) );
    
    //Variables de Pagination
    
    const [currentPage, setCurrentPage] = useState(1);
    const [input, setInput] = useState(1);
    const elementsPerPage = 9;
    const startIndex = (currentPage-1)*elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const currentElements = drivers.slice(startIndex, endIndex);
    const totalPages =Math.ceil(drivers.length/elementsPerPage);
    const enter = 13;

    //dispara al estado traer todos los teams y actualiza cada que hay un nuevo dispatch
    useEffect(() => {
      dispatch(getAllTeams())
    }, [dispatch])

   
    
//maneja el input de la busqueda por Name
      const handleChange = (event) => {
        event.preventDefault();
        setSearchString(event.target.value);
        setError("")
      }

      //maneja el submit de la busqueda por Name
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        await dispatch(getDriverName(searchString));
        setCurrentPage(1)
        setInput(1)
        } catch (error) {
            setError(error)
        }
        
    }
    //maneja la seleccion para ordenar
    const handleOrder = (event) => {
        dispatch(orderDrivers(event.target.value));
        setCurrentPage(1)
        setInput(1)
        
    }

    //maneja la selección para filtrar
    const handleFilter = (event) => {
        dispatch(filterDrivers(event.target.value));
        setCurrentPage(1)
        setInput(1)
    }
    //maneja el submit para retirar todos los filtros
    const handleSubmitAll = (event) => {
        event.preventDefault();
        dispatch(getAllDrivers());
        setCurrentPage(1)
        setInput(1)
        setError("");
    }
    //maneja el paginado next y back
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
    //maneja el enter del paginado
    const enterInput = (event) =>{
        if(event.keyCode == enter){
           if(event.target.value <= totalPages && event.target.value >0){
            setCurrentPage(parseInt(event.target.value))
            setInput(parseInt(event.target.value))
            }
        }  
    };
    //maneja el input del paginado
    const pageChange = (event) => {
        setInput(event.target.value)
    }
    

    return (
        <div>
            <div className="homecont">
            <button className='button' type = "submit" onClick = {handleSubmitAll}>Refresh</button>

            <div>
            <input className='input2'type='search' onChange={handleChange} placeholder = "Search"/>
            <button className='button' type = "submit" onClick= {handleSubmit}>Search</button>
            </div>
            
            <label className='label'>Order Name        
            <select onChange ={handleOrder}> 
                <option selected={true} disabled>Select option</option>           
                <option value="alphaA">A-Z</option>
                <option value="alphaB">Z-A </option>
            </select>
            </label> 

            <label className='label'>BirthDay        
            <select onChange ={handleOrder}> 
                <option selected={true} disabled>Select option</option>           
                <option value="birthDayA">Ascending</option>
                <option value="birthDayB">Descending</option>
            </select>
            </label> 

            <label className='label'>Team
            <select onChange = {handleFilter}name="teams">
            <option selected={true} disabled >Select option</option>
               { sortedTeams?.map((team) => <option key={team.id} value={team.name}>{team.name}</option>)}
             </select>
             </label>

             <label className='label'>Origin     
             <select onChange = {handleFilter}> 
                <option selected={true} disabled >Select option</option>
                <option value="baseDatos">Data Base</option>
                <option value="api">Api</option>
                <option value="allDrivers">All Drivers</option>
            </select>
            </label> 
            </div>

           
      
            <div>
            <Cards drivers = {currentElements}/>
            </div>

            <div>
            <span className='span'>{error}</span>
            <button className='button2'value='back' type = "submit" onClick= {pageHandler}>{'<<'}</button>
            <input className='input' type="text" name ='page' value={input} onChange = {pageChange} onKeyDown={event => enterInput(event)}/>
            <label className='label2'> de {totalPages}</label>
            <button className='button2'value ='next'type = "submit" onClick= {pageHandler}>{'>>'}</button>

            </div>
             
        </div>

    )
}


export default Home;