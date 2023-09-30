const { getTeams } = require("../controllers/getTeams");
const {Team} = require("../db")


const teamAll = async (req, res) => {
    //res.status(200).send("Por teams")
    try {
        const teams = await getTeams();
         const teamsDataBase = await Team.findAll();
         if (teamsDataBase.length === 0) {
            for (const data of teams){
             await Team.findOrCreate({where:{name: data}})
            }
                    
             //res.status(200).send('Teams have been created')
             res.status(200).json(teams)
         } else {
                res.status(200).send('Teams already are database')
         }
    //}
     }catch (error) {
         return res.status(500).send(error.message)
     }
}


module.exports = {
    teamAll
}


