const { getTeams } = require("../controllers/getTeams");
const {Team} = require("../db")


const teamAll = async (req, res) => {
    
    try {
        
         let teamsDataBase = await Team.findAll();
         if (teamsDataBase.length === 0) {
            const teams = await getTeams();
            for (const data of teams){
             await Team.findOrCreate({where:{name: data}})
            }                 
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


