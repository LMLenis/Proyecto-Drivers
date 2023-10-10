const { Driver, Team } = require('../db')

const createDriver = async(name,lastname,description,image,nationality,birthDay,idTeam) => {

    
    try {
    //verifica si ya existe
        const driverCreated = await Driver.findOne ({where: {name: name, lastname: lastname, birthDay: birthDay}});
        if(driverCreated){
            throw new Error (`Driver ${name} ${lastname} exists`)
        }

    //si no existe lo crea
        const driver = await Driver.create({ 
            name: name, 
            lastname: lastname, 
            description: description,
            image: image, 
            nationality: nationality,
            birthDay: birthDay
        });

    //crea la asociación
        await driver.setTeams(idTeam);

        return driver;
    }catch(error) {
        throw error
    }

}

module.exports = {createDriver}