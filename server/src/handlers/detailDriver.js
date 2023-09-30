
const { getDriverbyId} = require('../controllers/getDriverbyId');
const { getDriverBDId} = require('../controllers/getDriverBDId');


const detailDriver = async (req, res) => {
   
    
    try {
         const {id} = req.params;
        if (Number(id)){
        const driver = await getDriverbyId(id);
        if(!driver.name) throw new Error(`ID: ${id} Not found`)
           return res.status(200).json(driver);
         } else {
             const driverDB = await getDriverBDId(id);
             if(!driverDB) throw new Error (`ID: ${id} Not found`);
             return res.status(200).json(driverDB)
            
         }
        
        
      } catch (error) {
          return res.status(500).send(error.message);
        
      }
}

module.exports = {
    detailDriver
}