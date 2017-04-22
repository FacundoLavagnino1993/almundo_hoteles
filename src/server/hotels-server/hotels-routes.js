const Router = require('co-router');
const router = Router();
const hotels = require('./hotels-controller'); //llamamos al controlador para acceder al getTodo();


router.get('/hotels', hotels.getHotels);

module.exports = router;