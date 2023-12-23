const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
//const PORT = 3001;
require ('dotenv').config();
const {PORT}=process.env;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  
  console.log('%s listening at',process.env.PORT);
})
}).catch(error => console.error(error))
