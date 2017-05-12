'use strict';

class hotelsService{


    static get() {

        var _self = this;
         _self.hotelsList = [{
             "_id": 120,
             "name": "Petit Palace Embassy Serrano",
             "descrip": "Solo la habitación",
             "stars": "4",
             "price": 2794,
             "images": [
                 "//images.almundo.com/201/2000000/1170000/1164100/1164028/d78b28b9_b.jpg",
                 "//images.almundo.com/201/2000000/1170000/1164100/1164028/5dcbe3a2_b.jpg",
                 "//images.almundo.com/201/2000000/1170000/1164100/1164028/1164028_166_b.jpg"
             ],
             "amenities": {
                 "wifi": "wifi",
                 "tel": "telefono",
                 "sp": "Spa"
             }
         },{
             "_id": 221,
             "name": "Hostal Numancia",
             "descrip": "Solo la habitación",
             "stars": "1",
             "price": 1697,
             "images": [
                 "//images.almundo.com/201/5000000/4340000/4335400/4335399/4335399_54_b.jpg",
                 "//images.almundo.com/201/5000000/4340000/4335400/4335399/73190988_b.jpg",
                 "//images.almundo.com/201/5000000/4340000/4335400/4335399/4335399_5_b.jpg"
             ],
             "amenities": {
                 "wifi": "wifi",
                 "tel": "telefono",
                 "sp": "Spa"
             }
         },{
            "_id": 350,
            "name": "Hotel Emperador",
            "descrip": "Solo la habitación",
            "stars": "3",
            "price": 3138,
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
             "_id": 550,
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
             "_id": 650,
             "name": "Hotel Nuevo Boston",
             "descrip": "Solo la habitación",
             "stars": "2",
             "price": 1256,
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
             "_id": 144,
             "name": "Gran Melia Palacio de los Duques",
             "descrip": "Solo la habitación",
             "stars": "5",
             "price": 5072,
             "images": [
                 "//images.almundo.com/201/1000000/10000/8600/8556/8556_263_b.jpg",
                 "//images.almundo.com/201/1000000/10000/8600/8556/8556_266_b.jpg",
                 "//images.almundo.com/201/1000000/10000/8600/8556/8556_313_b.jpg"
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