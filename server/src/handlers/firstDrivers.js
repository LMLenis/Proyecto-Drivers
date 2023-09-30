const { getByName } = require("../controllers/getByName");
const { getBaseName } = require("../controllers/getBaseName");
const mayusName = require('./mayusName');



const firstDrivers = async (req, res) => {

//console.log('Entrando a la ruta')
    //res.status(200).send('Los primeros drivers')
      try {
        const { name } = req.query; // tomamos el valor de name de query

        // let primerletra = name.charAt(0); // sacamos la primera letra y la pasamos a mayusculas
        // let mayuscula = primerletra.toUpperCase();
        // let restoletras = name.slice(1); // tomamos el resto y la pasamos a minusculas
        // let minusculas = restoletras.toLowerCase();

        const newname = mayusName(name); //concatenamos las dos partes de name
         
          
    //      //buscamos el/los driver(s) en la api
        const driversApi = await getByName(newname);
        let primerosApi = [];
        let primerosBaseDatos = [];
        let j=0;
        
        for (let i = 0; i<driversApi.length; i++ ) {
              if(i<15){
                  primerosApi.push(driversApi[i])
              }
              j=i;
        }

          if(j<15) {
          //busco en la base de datos
          const driversBD = await getBaseName(newname);
          for (let i = 0; i<driversBD.length; i++ ) {
              if(j<15){
                  primerosBaseDatos.push(driversBD[i])
                  j++;
              }
          }
         }
    
      if (primerosApi.length ===0 && primerosBaseDatos.length ===0) throw new Error('The driver was not found');
      return res.status(200).json({primerosApi, primerosBaseDatos});
    //return res.status(200).json(primerosApi);
    
      } catch (error) {
          return res.status(500).send(error.message);
      }
    
    
};


module.exports = {
    firstDrivers
};