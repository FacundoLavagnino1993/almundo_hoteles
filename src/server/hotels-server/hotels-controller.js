'use strict';

const hotelsService = require('./hotels-service');

class hotelsController{

    static getHotels(req, res, next){
       hotelsService.get()
        .then(function(hotels){
           res.json(hotels);
       });
    }
}

module.exports = hotelsController;