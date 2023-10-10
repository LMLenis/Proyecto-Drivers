// Este handler solicita a la base de datos todos los Teams de la base de datos.

const { getTeams } = require("../controllers/getTeams");
const {Team} = require("../db")


const teamAll = async (req, res) => {
    
    try {
        // consulta a la base de tatos
         let teamsDataBase = await Team.findAll();
         // evalua si la base de tatos está vacia y si esta vacia llama al controller getTeams
         // y luego de tener los teams los crea en la base de datos
         if (teamsDataBase.length === 0) {
            const teams = await getTeams();
            for (const data of teams){
             await Team.findOrCreate({where:{name: data}})
            }  
            //toma la información de la base de datos               
            teamsDataBase = await Team.findAll();
         }
        res.status(200).json(teamsDataBase);
            
         
    
     }catch (error) {
         return res.status(500).send(error.message)
     }
}


module.exports = {
    teamAll
}


