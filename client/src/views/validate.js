const validate = (state) => {
    const errors = {};
    const patronUrl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    
    if (state.name.length > 20){
      errors.name = 'The name must be less than 20 characters long';
    }
    if (state.lastname.length > 20){
      errors.lastname = 'The lastname must be less than 20 characters long'
    }
    if (state.description.length > 250) {
    errors.description = 'The description must be less than 250 characters long'
    }
    if (Object.prototype.toString.call(state.birthDay) !== "[object Date]") {
    errors.birthDay = 'Format YYYY-MM-DD'
    }
    if (state.nationality > 20) {
      errors.nationality = 'The nationality must be less than 250 characters long'
    }
    
    if (!patronUrl.test(state.image)){
      errors.image = 'The image must be a URL'
    }
    
    
    return errors;
}

export default validate;