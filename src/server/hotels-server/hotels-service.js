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
            "price": 1596,
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
             "_id": {
                 "$oid": "58cb47efe3dcd6c694f67533"
             },
             "name": "Petit Palace San Bernardo",
             "descrip": "Solo la habitación",
             "stars": "4",
             "price": 2145,
             "images": [
                 "https://images.almundo.com/201/1000000/10000/6300/6260/6b25e36d_b.jpg",
                 "https://images.almundo.com/201/1000000/10000/4200/4164/675037ae_b.jpg",
                 "https://images.almundo.com/201/1000000/10000/8100/8092/8092_106_b.jpg"
             ],
             "amenities": {
                 "wifi": "wifi",
                 "tel": "telefono",
                 "sp": "Spa"
             }
         },{
             "_id": {
                 "$oid": "58cb47efe3dcd6c694f67533"
             },
             "name": "Hotel Nuevo Boston",
             "descrip": "Solo la habitación",
             "stars": "2",
             "price": 861,
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
         }];

        return new Promise(function(resolve, reject){
            resolve(_self.hotelsList);
        })
    }
}
module.exports = hotelsService;