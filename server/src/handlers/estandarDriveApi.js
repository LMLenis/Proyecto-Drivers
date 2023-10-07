const estandarDriveApi = (drivers) => {
    let estandar = [];
    for (i=0; i<drivers.length; i++) {
        estandar[i].id = drivers[i].id;
        estandar[i].name = drivers[i].name.forename;
        estandar[i].lastname = drivers[i].name.surname;
        estandar[i].image = drivers[i].image.url;
        estandar[i].birthDay = drivers[i].dob;
        estandar[i].nationality = drivers[i].nationality;
        estandar[i].teams = drivers[i].teams;
        estandar[i].description = estandar[i].description;
    }
    return estandar;
}

module.exports = estandarDriveApi;