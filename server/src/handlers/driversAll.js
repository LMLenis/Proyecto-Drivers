const {getDrivers} = require('../controllers/getDrivers');

const urldefault = 'https://es.wikipedia.org/wiki/Mr._Bean#/media/Archivo:Atkinson_Rowan.jpg'
const bydefault = 'By Luisma'
const driversAll = async (req, res) => {

    //res.status(200).send("Aqui estan todos los usuarios");
    try {
             
        const drivers = await getDrivers();
        for (i=0; i< drivers.length; i++) {
             if (drivers[i].image.url === '') {
             drivers[i].image.url = urldefault;
             drivers[i].image.imageby = bydefault;
             }
         };
         return res.status(200).json(drivers);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}

module.exports = {
    driversAll
}