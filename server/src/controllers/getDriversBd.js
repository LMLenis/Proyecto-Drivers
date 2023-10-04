const {Driver, Team} = require('../db');

const getDriversBd = async  () => {
         
   
  
    const driver = await Driver.findAll({
        include: {
            model: Team,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    });
        return driver;

}


module.exports = {
    getDriversBd
};