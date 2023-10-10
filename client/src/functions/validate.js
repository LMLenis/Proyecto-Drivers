//Funcion encargada de validar los inputs del formulario y retorna el objeto errores

const validate = (state) => {
    const errors = {};
    const patronUrl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const patronDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/;
    
    
    if (!state.name) errors.name = 'Field is required'
    if (/\d/.test((state.name))) errors.name = 'Not numbers'
    if (state.name.length > 20){
      errors.name = 'The name must be less than 20 characters long';
    }
    if(!state.lastname) errors.lastname = 'Field is required'
    if (/\d/.test(state.lastname)) errors.lastname = 'Not numbers'
    if (state.lastname.length > 20){
      errors.lastname = 'The lastname must be less than 20 characters long'
    }
   
    if(!state.birthDay) errors.birthDay = 'Field is required' 
    if (!patronDate.test(state.birthDay)) {
    errors.birthDay = 'Format YYYY-MM-DD'
    }

    if (state.description.length > 250) {
      errors.description = 'The description must be less than 250 characters long'
    }

    if (state.image && !patronUrl.test(state.image)){
      errors.image = 'The image must be a URL'
    }

    if(!state.nationality) errors.nationality = 'Field is required'
    if (/\d/.test(state.nationality)) errors.nationality = 'Not numbers'
    if (state.nationality.length > 20) {
    errors.nationality = 'The nationality must be less than 20 characters long'
    }
    
    if (state.image && !patronUrl.test(state.image)){
      errors.image = 'The image must be a URL'
    }
    
    
    return errors;
}

export default validate;