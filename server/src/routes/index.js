const { Router } = require("express");
const { driversAll } = require('../handlers/driversAll');
const { detailDriver } = require('../handlers/detailDriver');
const { firstDrivers } = require('../handlers/firstDrivers');
const { postDriver } = require('../handlers/postDriver');
const { teamAll } = require('../handlers/teamAll');


const router = Router();

// a continuación definimos las rutas que se conectaran con el cliente

router.get('/drivers/name', firstDrivers);

router.get('/drivers', driversAll);

router.get('/drivers/:id', detailDriver );

router.post('/drivers', postDriver );

router.get('/teams', teamAll );





module.exports = router;
