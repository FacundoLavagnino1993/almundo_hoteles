'use strict';

class hotelsService{


    static get() {

        var _self = this;
         _self.hotelsList = [{
            "_id": {
                "$oid": "58cb47efe3dcd6c694f67533"
            },
            "name": "Hotel Emperador",
            "descrip": "Solo la habitación",
            "stars": "3",
            "price": 1.596,
            "images": [
                "//images.almundo.com/201/1000000/10000/1000/915/915_221_b.jpg",
                "//images.almundo.com/201/1000000/10000/1000/915/915_207_b.jpg",
                "//images.almundo.com/201/1000000/10000/1000/915/915_250_b.jpg"
            ],
            "amenities": {
                "wifi": "wifi",
                "tel": "telefono",
                "sp": "Spa"
            }
        },{
            "name":"Aquarius Casino Resort",
            "stars":"1",
            "price":450,
            "image":"http://placehold.it/150/92c952"
        }];

        return new Promise(function(resolve, reject){
            resolve(_self.hotelsList);
        })
    }
}
module.exports = hotelsService;