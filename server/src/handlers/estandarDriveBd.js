const estandarDriveBd = (drivers) => {
    let estandar = [];
    let newDriverTeam =[];
    for (i=0; i<drivers.length; i++) {
        estandar[i].id = drivers[i].id;
        estandar[i].name = drivers[i].name;
        estandar[i].lastname = drivers[i].lastname;
        estandar[i].image = drivers[i].image;
        estandar[i].birthDay = drivers[i].birthDay;
        estandar[i].nationality = drivers[i].nationality;
        estandar[i].description = drivers[i].description;

        for (let j=0; j<drive[i].Teams.length; j++) {
            newDriverTeam.push(drive[i].Teams[j].name)
         }
        estandar[i].teams = newDriverTeam.toString();
        
    }
    return estandar;
}

module.exports = estandarDriveBd;