const {getDrivers} = require('../controllers/getDrivers');
const {getDriversBd} = require('../controllers/getDriversBd');
const urldefault = 'https://es.wikipedia.org/wiki/Mr._Bean#/media/Archivo:Atkinson_Rowan.jpg'
const bydefault = 'By Luisma'
const driversAll = async (req, res) => {


    try {
             
        const driversApi = await getDrivers();
        for (i=0; i< driversApi.length; i++) {
             if (driversApi[i].image.url === '') {
             driversApi[i].image.url = urldefault;
             driversApi[i].image.imageby = bydefault;
             }
         };
         const driversBd = await getDriversBd();
         
         return res.status(200).json([...driversApi,...driversBd]);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}

module.exports = {
    driversAll
}