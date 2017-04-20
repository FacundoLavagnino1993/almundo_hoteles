( function (){

  'use strict';


  angular
      .module('hotelsResult')
      .service('HotelsService', HotelsService);

    HotelsService.$inject = ['$http'];


    function HotelsService($http){
        this.getHotels = getHotels;

        this.hotelsList = [{
<<<<<<< HEAD
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
=======
            name:"Hotel Emperador",
            stars:"3",
            price:1596.0,
            images:[
                "https://www.google.com.ar/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjQ7u_08LDTAhUGIpAKHTe1AHoQjRwIBw&url=https%3A%2F%2Fwww.clarin.com%2Fde-autos%2Flo-nuevo%2Fnueva-marca-autos-chinos-llega_0_ryL1KupXl.html&psig=AFQjCNGxQOfmlT0IzBTRI_8Ob4eu2084Iw&ust=1492703711453720",
                "https://www.cdn.renault.com/content/dam/Renault/AR/modelos/sandero/AR_M_sandero.jpg.ximg.l_4_m.smart.jpg",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952"
            ]
        },{
            name:"Petit Palace San Bernardo",
            stars:"4",
            price:2145.0,
            images:[
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952"
            ]
        },{
            name:"Hotel Nuevo Boston",
            stars:"2",
            price:861.0,
            images:[
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952"
            ]
>>>>>>> origin/master
        },{
            name:"Aquarius Casino Resort",
            stars:"1",
            price:450.0,
            images:[
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952",
                "http://placehold.it/150/92c952"
            ]
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
