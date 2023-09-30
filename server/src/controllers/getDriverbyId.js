const axios = require('axios');

const URL = "http://localhost:5000/drivers";

const getDriverbyId = async ( id ) => {
         
   
        const {data} = await axios.get (`${URL}/${id}`);
        
        return data;
                        
           
}

module.exports = {
    getDriverbyId
};