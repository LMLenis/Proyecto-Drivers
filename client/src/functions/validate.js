const validate = (state) => {
    const errors = {};
    const patronUrl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const patronDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    
    if (!state.name) errors.name = 'Field is required'
    if (state.name.length > 20){
      errors.name = 'The name must be less than 20 characters long';
    }
    if(!state.lastname) errors.lastname = 'Field is required' 
    if (state.lastname.length > 20){
      errors.lastname = 'The lastname must be less than 20 characters long'
    }
    if (state.description.length > 250) {
    errors.description = 'The description must be less than 250 characters long'
    }
    if(!state.birthDay) errors.birthDay = 'Field is required' 
    if (!patronDate.test(state.birthDay)) {
    errors.birthDay = 'Format YYYY-MM-DD'
    }
    if(!state.nationality) errors.nationality = 'Field is required'
    if (state.nationality > 20) {
      errors.nationality = 'The nationality must be less than 250 characters long'
    }
    
    if (state.image && !patronUrl.test(state.image)){
      errors.image = 'The image must be a URL'
    }
    
    
    return errors;
}

export default validate;