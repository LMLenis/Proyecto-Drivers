const {Driver,Team} = require('../db');

const getBaseName = async ( name ) => {
         
    const driver = await Driver.findAll({where: {name: name},
        include: { model: Team, attributes:["name"], through:{attributes:[]}}});

    return driver;
                                  
}

module.exports = {
    getBaseName
};


