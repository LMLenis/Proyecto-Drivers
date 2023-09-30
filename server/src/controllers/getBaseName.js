const {Driver} = require('../db');

const getBaseName = async ( name ) => {
         
    const driver = await Driver.findAll({where: {name: name}});

    return driver;
                                  
}

module.exports = {
    getBaseName
};