'use strict';

class hotelsService{


    static get() {

        var _self = this;
         _self.hotelsList = [{
             "_id": 120,
             "name": "Hostal Abaaly",
             "descrip": "Solo la habitación",
             "stars": "2",
             "price": 766,
             "images": [
                 "//images.almundo.com/201/6000000/5260000/5257900/5257855/5257855_8_b.jpg",
                 "//images.almundo.com/201/6000000/5260000/5257900/5257855/5257855_3_b.jpg",
                 "//images.almundo.com/201/6000000/5260000/5257900/5257855/5257855_6_b.jpg"
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
                 "//images.almundo.com/201/5000000/4340000/4335400/4335399/4335399_5_b.jpg",
                 "//images.almundo.com/201/5000000/4340000/4335400/4335399/73190988_b.jpg",
                 "//images.almundo.com/201/5000000/4340000/4335400/4335399/4335399_54_b.jpg"
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
                "//images.almundo.com/201/1000000/10000/1000/915/915_234_b.jpg",
                "//images.almundo.com/201/1000000/10000/1000/915/915_254_b.jpg",
                "//images.almundo.com/201/1000000/10000/1000/915/fd21fc2b_b.jpg"
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
                 "//images.almundo.com/201/2000000/1470000/1466600/1466559/1466559_113_b.jpg",
                 "//images.almundo.com/201/2000000/1470000/1466600/1466559/40819fac_b.jpg",
                 "//images.almundo.com/201/2000000/1470000/1466600/1466559/910d2005_b.jpg"
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
             "stars": "4",
             "price": 2675,
             "images": [
                 "//images.almundo.com/201/3000000/2470000/2466900/2466861/2466861_142_b.jpg",
                 "//images.almundo.com/201/3000000/2470000/2466900/2466861/2466861_192_b.jpg",
                 "//images.almundo.com/201/3000000/2470000/2466900/2466861/afa5592b_b.jpg"
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