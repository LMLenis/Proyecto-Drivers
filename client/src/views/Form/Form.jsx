//import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDriver, getAllTeams } from "../../redux/actions/index";
import getteams from "../Getteams";
import validate from "../validate"
import './form.css'



// const validate = (state) => {
//     const errors = {};
//     const patronUrl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    
//     if (state.name.length < 5){
//       errors.name = 'The name must be five characters long';
//     }
//     if (state.name.length > 20){
//       errors.name = 'The name must be less than twenty characters long'
//     }
//     if (!state.movies.length < 5) {
//     errors.movies = 'The movies must be five characters long'
//     }
//     if (typeof(state.age) != "number") {
//     errors.age = 'Only numbers'
//     }
//     if (state.age.length < 2) {
//       errors.age = 'The age must be two digits'
//     }
//     if (state.summary.length < 50){
//     errors.summary = 'The summary must be fifty characters long'
//     }
//     if (!patronUrl.test(state.image)){
//       errors.image = 'The image must be a URL'
//     }
    
    
//     return errors;
// }

//const teams = await getteams();
     
const Form = () => {
    
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.allTeams);

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
        dispatch(createDriver(input))
      }
    
    
      return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name ="name" value={input.name} onChange ={handleChange}/>
        {errors.name && <p>{errors.name}</p>}
        
        <label htmlFor="lastname">Lastname:</label>
        <input type="text" name = "lastname"value={input.lastname} onChange ={handleChange}/>
        {errors.lastname && <p>{errors.lastname}</p>}

        <label htmlFor="birthDay">Birth Day:</label>
        <input type="dateonly" name="birthDay" value={input.birthDay} onChange = {handleChange}/>
        {errors.birthDay && <p>{errors.birthDay}</p>}
        
        <label htmlFor="description">Description:</label>
        <input type="textarea" name="description" value={input.description} onChange = {handleChange}/>
        {errors.description && <p>{errors.description}</p>}
        
        <label htmlFor="image">Image:</label>
        <input type="text" name = "image" value={input.image} onChange={handleChange}/>
        {errors.image && <p>{errors.image}</p>}
        
        <label htmlFor="nationality">Nacionality:</label>
        <input type="text" name = "nationality" value={input.nationality} onChange={handleChange}/>
        {errors.nationality && <p>{errors.nationality}</p>}
        
        
        <select onChange = {handleChange}name="teams">
            {teams?.map((team) => <option key={team.id} value={team.name}>{team.name}</option>)}
        </select>

       
    
        <button type="submit">Create</button>
      
      </form>
      )
    }


export default Form