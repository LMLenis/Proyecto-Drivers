const {getDrivers} = require('../controllers/getDrivers');


const getTeams = async () => {
            
        let allTeams = [];
        let sinespacioteams = [];
        const drivers = await getDrivers();
        
        //obtiene todos los equipos
        for (let i=0; i<drivers.length; i++){
            allTeams = allTeams.concat(drivers[i].teams?.split(','));
        }  
        
        // //quitamos espacios
        for (let i=0; i<allTeams.length; i++){
            sinespacioteams.push(allTeams[i]?.trim());
        }  


        let setSinRepetidos = new Set (sinespacioteams);
        let teamsSinRepetidos = Array.from(setSinRepetidos);
        let teamfiltrado = teamsSinRepetidos.filter(element => element != null);

       return teamfiltrado;
       
        
      
           
}

module.exports = {
    getTeams
};