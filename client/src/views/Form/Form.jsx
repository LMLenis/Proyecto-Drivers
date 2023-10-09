//import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDriver, getAllTeams } from "../../redux/actions/index";
import validate from "../../functions/validate"
import './form.css'


   
const Form = () => {
    
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.allTeams);

    let sortedTeams = teams.sort((a,b) => a.name.localeCompare(b.name) );

    const [input, setInput] = useState({
        name: '',
        lastname: '',
        description: '',
        image: '',
        nationality: '',
        birthDay: '',
        idTeam: []
    })
    
    const [errors, setErrors] = useState({
        name: '',
        lastname: '',
        description: '',
        image: '',
        nationality: '',
        birthDay: '',
        idTeam: []
    })
    
      useEffect(() => {
        dispatch(getAllTeams())
      }, [dispatch])
    
      const handleChange = (evento) => {
        setInput({
          ...input,
          [evento.target.name]: evento.target.value
        })
        setErrors(
          validate({
            ...input,
            [evento.target.name]: evento.target.value
          })
        )
      }
    
      const handleSubmit = (evento) => {
        evento.preventDefault();
        let long = Object.values(errors);
        if (long.length === 0) {
          let selected = [];
          for (let option of document.getElementById('idTeam').options){
            if (option.selected) selected.push(option.value);
          }
          input.idTeam = selected;
          console.log(input)
          dispatch(createDriver(input))
          setInput({name:'', lastname: '', description:'', image: '', nationality: '', birthDay:'', idTeam: []})
          setErrors({name:'', lastname: '', description:'', image: '', nationality: '', birthDay:'', idTeam: []})
          
        }else {
          
          alert ("Must fullfill all inputs")
        }
        
      }
    
    
      return (
      <form className="form" onSubmit={handleSubmit} name ='form'>
        <label htmlFor="name">Name:</label>
        <input type="text" name ="name" value={input.name} onChange ={handleChange}
        className = {errors.name && 'warning'}></input>
        {errors.name && <p className ='danger'>{errors.name}</p>}
        
        <label htmlFor="lastname">Lastname:</label>
        <input type="text" name = "lastname"value={input.lastname} onChange ={handleChange}
        className = {errors.lastname && 'warning'}/>
        {errors.lastname && <p className = 'danger'>{errors.lastname}</p>}

        <label htmlFor="birthDay">Birth Day:</label>
        <input type="text" name="birthDay" value={input.birthDay} onChange = {handleChange}
        className = {errors.birthDay && 'warning'}/>
        {errors.birthDay && <p className ='danger'>{errors.birthDay}</p>}
        
        <label htmlFor="description">Description:</label>
        <textarea type="text" name="description" value={input.description} onChange = {handleChange}/>
        {errors.description && <p>{errors.description}</p>}
        
        <label htmlFor="image">Image:</label>
        <input type="text" name = "image" value={input.image} onChange={handleChange}
        className = {errors.image && 'warning'}/>
        {errors.image && <p className='danger'>{errors.image}</p>}
        
        <label htmlFor="nationality">Nacionality:</label>
        <input type="text" name = "nationality" value={input.nationality} onChange={handleChange}
        className = {errors.nationality && 'warning'}/>
        {errors.nationality && <p className='danger'>{errors.nationality}</p>}
        
        <label>Escuderias:</label>
        <select onChange = {handleChange}id ="idTeam" multiple >
            {sortedTeams?.map((team) => <option key={team.id} value={team.id} >{team.name}</option>)}
        </select>
        
       
        
        <button id="submit">Create Driver</button>
      
      </form>
      )
    }


export default Form