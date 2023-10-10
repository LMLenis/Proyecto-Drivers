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

    const [errorSubmit,setErrorSubmit] = useState("");
    
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
        setErrorSubmit("");
      }
    
      const handleSubmit = async (evento) => {
        evento.preventDefault();
        try {
          let long = Object.values(errors);
          if (long.length === 0) {
            let selected = [];
          for (let option of document.getElementById('idTeam').options){
            if (option.selected) selected.push(option.value);
          }
          input.idTeam = selected;
          console.log(input)
          await dispatch(createDriver(input))
          setInput({name:'', lastname: '', description:'', image: '', nationality: '', birthDay:'', idTeam: []})
          setErrors({name:'', lastname: '', description:'', image: '', nationality: '', birthDay:'', idTeam: []})
          
          }else {
            setErrorSubmit("Must fullfill all inputs without errors");
            // document.querySelector('.mensaje-error').textContent = "Must fullfill all inputs without errors";
            // document.querySelector('.mensaje-error').computedStyleMap.display = 'block';
          }
        }catch (error) {
          setErrorSubmit(error)

        }
        
      }
    
      const habilitar = () => {
        let deshabilitar = false;

        if (input.name == "") deshabilitar = true;
        if (input.lastname == "") deshabilitar = true;
        if (input.birthDay == "") deshabilitar = true;
        if (input.nationality == "") deshabilitar = true;
        if (deshabilitar === false){
          document.querySelector("#submit").disabled = false;
        } else {
          document.querySelector("#submit").disabled = true;
        }
          
      }

      document.querySelector("#name")?.addEventListener("keyup", habilitar);
      document.querySelector("#lastname")?.addEventListener("keyup", habilitar);
      document.querySelector("#birthDay")?.addEventListener("keyup", habilitar);
      document.querySelector("#nationality")?.addEventListener("keyup", habilitar);


      return (
      <form className="form" onSubmit={handleSubmit} name ='form'>

        <span>{errorSubmit}</span>
        
        <label htmlFor="name">*Name:</label>
        <input type="text" name ="name" id="name" value={input.name} onChange ={handleChange}
        className = {errors.name && 'warning'}></input>
        {errors.name && <p className ='danger'>{errors.name}</p>}
        
        <label htmlFor="lastname">*Lastname:</label>
        <input type="text" name = "lastname" id= "lastname" value={input.lastname} onChange ={handleChange}
        className = {errors.lastname && 'warning'}/>
        {errors.lastname && <p className = 'danger'>{errors.lastname}</p>}

        <label htmlFor="birthDay">*Birth Day:</label>
        <input type="text" name="birthDay" id = "birthDay" value={input.birthDay} onChange = {handleChange}
        className = {errors.birthDay && 'warning'}/>
        {errors.birthDay && <p className ='danger'>{errors.birthDay}</p>}
        
        <label htmlFor="description">Description:</label>
        <textarea type="text" name="description" value={input.description} onChange = {handleChange}/>
        {errors.description && <p>{errors.description}</p>}
        
        <label htmlFor="image">Image:</label>
        <input type="text" name = "image" value={input.image} onChange={handleChange}
        className = {errors.image && 'warning'}/>
        {errors.image && <p className='danger'>{errors.image}</p>}
        
        <label htmlFor="nationality">*Nationality:</label>
        <input type="text" name = "nationality" id="nationality" value={input.nationality} onChange={handleChange}
        className = {errors.nationality && 'warning'}/>
        {errors.nationality && <p className='danger'>{errors.nationality}</p>}
        
        <label>Escuderias:</label>
        <select onChange = {handleChange}id ="idTeam" multiple >
            {sortedTeams?.map((team) => <option key={team.id} value={team.id} >{team.name}</option>)}
        </select>
        
       
        
        <button id="submit" disabled>Create Driver</button>
        <p>*Fields required</p>
      
        
      </form>
      )
    }


export default Form