import axios from 'axios';

const getteams = async () => {
    try {
       
       const endpoint = 'http://localhost:3001/teams';
       const {data} = await axios(endpoint)
       
       return data;
       
    } catch (error){
       console.log(error);
    }
 }

 export default getteams;