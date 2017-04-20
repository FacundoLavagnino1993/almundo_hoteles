( function (){

  'use strict';


  angular
      .module('hotelsResult')
      .service('HotelsService', HotelsService);

    HotelsService.$inject = ['$http'];


    function HotelsService($http){
        this.getHotels = getHotels;

        this.hotelsList = [{
            "_id": {
                "$oid": "58cb47efe3dcd6c694f67533"
            },
            "name": "Hotel Emperador",
            "descrip": "Solo la habitación",
            "stars": "3",
            "price": 1596.0,
            "images": [
                "https://placehold.it/350x230",
                "https://images.clarin.com/2016/12/13/HkH8GlycVl_720x0.jpg",
                "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg"
            ],
            "amenities": {
                "wifi": "wifi",
                "tel": "telefono",
                "sp": "Spa"
            }
        },{
            name:"Aquarius Casino Resort",
            stars:"1",
            price:450.0,
            image:"http://placehold.it/150/92c952"
        }];

        function getHotels(){

            return this.hotelsList;

        }
     /*
        this.getHotels = function (){
            return $http.get('/hotels')
                .then(function (response){
                    return response.data;
                });
        }*/
  }
})();
