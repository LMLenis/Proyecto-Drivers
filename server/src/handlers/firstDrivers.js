//Este handler toma los drivers por Name de la api y de la base de datos

const { getByName } = require("../controllers/getByName");
const { getBaseName } = require("../controllers/getBaseName");
const mayusName = require('./mayusName');



const firstDrivers = async (req, res) => {

      try {
        
        const { name } = req.query; // tomamos el valor de name de query

        const newname = mayusName(name); //condicionamos el name para la busqueda
             
         //buscamos el/los driver(s) en la api
        const driversApi = await getByName(newname);
          //busco en la base de datos
        const driversBD = await getBaseName(newname);
        let nameDrivers = [...driversApi,...driversBD];
        //toma los primeros quince nombres
        let primerosQuince = nameDrivers.slice(0,15);

     // evaluamos si no hay drivers con ese nombre y lo enviamos al cliente
      if (primerosQuince.length ===0) throw new Error('Driver was not found');
      return res.status(200).json(primerosQuince);
   
    
      } catch (error) {
          return res.status(500).send(error.message);
      }
    
    
};


module.exports = {
    firstDrivers
};