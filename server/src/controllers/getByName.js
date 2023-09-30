const axios = require('axios');

const URL = "http://localhost:5000/drivers";

const getByName = async ( name ) => {
         
   
        const {data} = await axios.get (`${URL}?name.forename=${name}`);
        
        return data;
                        
           
}

module.exports = {
    getByName
};