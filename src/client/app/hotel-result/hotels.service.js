( function (){

  'use strict';


  angular
      .module('hotelsResult')
      .service('HotelsService', HotelsService);

    HotelsService.$inject = [];


    function HotelsService(){
        this.getHotels = getHotels;

        this.hotelsList = [{
            name:"Hotel Emperador",
            stars:"3",
            price:1596.0,
            image:"http://placehold.it/150/92c952"
        },{
            name:"Petit Palace San Bernardo",
            stars:"4",
            price:2145.0,
            image:"http://placehold.it/150/92c952"
        },{
            name:"Hotel Nuevo Boston",
            stars:"2",
            price:861.0,
            image:"http://placehold.it/150/92c952"
        },{
            name:"Aquarius Casino Resort",
            stars:"1",
            price:450.0,
            image:"http://placehold.it/150/92c952"
        }];

        function getHotels(){

            return this.hotelsList;

        }
  }
})();
