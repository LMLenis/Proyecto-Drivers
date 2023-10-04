import axios from 'axios';


const getteams = async () => {
    try {
       
       const URL = 'http://localhost:3001/teams';
       const {data} = await axios(URL)
       
       return data;
       
    } catch (error){
       console.log(error);
    }
 }

 export default getteams;