const {createDriver} = require('../controllers/createDriver');
const mayusName = require('./mayusName');

const postDriver = async (req, res) => {

    try {
         const {
             name, 
             lastname, 
             description,
             image, 
             nationality,
             birthDay,
             idTeam   
         } = req.body;

         // Standariza el nombre y el apellido
         const newName = mayusName(name);
         const newLastname = mayusName(lastname);

       
         const newDriver = await createDriver(
        // const newDriver = {
             newName, 
             newLastname, 
             description,
             image, 
             nationality,
             birthDay,
             idTeam
         );
        
        return res.status(200).send(newDriver);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}


module.exports = {
    postDriver
}