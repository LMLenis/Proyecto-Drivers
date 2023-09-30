const axios = require('axios');

const URL = "http://localhost:5000/drivers";

const getDrivers =  async () => {
                
        const {data} = await axios.get (`${URL}`)
        
        return data;
                        
           
}


module.exports = {
    getDrivers
};