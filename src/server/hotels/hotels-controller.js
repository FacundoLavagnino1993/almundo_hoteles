//'use strict';

var hotelsService = required('./hotels-service');

class hotelsController{

    static getHotels = function (req, res, next){
        hotelsService.get()
            .then(function(hotels){
                res.json(hotels);
            });
    }
}
