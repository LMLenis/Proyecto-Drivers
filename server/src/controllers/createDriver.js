const { Driver, Team } = require('../db')

const createDriver = async(name,lastname,description,image,nationality,birthDay,idTeam) => {
    const driverCreated = await Driver.findOne ({where: {name: name, lastname: lastname}});
    //verifica si ya existe
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

    // if (team.length > 1){

    // }
    //  teamFound = await Team.findOne ({where: id = idTeam})
    //  await DriverTeam.create({where: {Driverid: driver.id, Teamid: teamFound.id}})

    return driver;

}

module.exports = {createDriver}