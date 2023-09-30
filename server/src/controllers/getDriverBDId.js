const {Driver, Team} = require('../db');

const getDriverBDId = async ( id ) => {
         
   
    const driver = await Driver.findOne({where: {id: id},
        include: {
        model: Team,
        attributes: ['name'],
        through:{
            attributes:[]
        }
    }});

        return driver;
                                  
}

module.exports = {
    getDriverBDId
};