(function (){
  'use strict';

  angular
      .module('hotelsResult')
      .component('hotelsRoot', {
          controller: hotelsController,
          templateUrl: "hotel-result/hotels-root.html"
      });


    hotelsController.$inject = ['HotelsService'];


      function hotelsController(HotelsService) {

          var _self = this;

          this.$onInit = function(){

              HotelsService.getHotels()
                  .then(function done(res){
                      _self.hotels = res;
                  }, function error(error){
                      console.log(error);
                  });
              return _self.hotels;
          };

            this.filters = {
                "name" : " ",
                "searchName" : " ",
                "price" : {
                    "priceMin" : 200,
                    "priceMax" : 4000,
                },
                "stars" : {
                    "allStars" : true,
                    "five" : false,
                    "four" : false,
                    "three" : false,
                    "two" : false,
                    "one" : false
                }
            };

            this.$doCheck= function(){
            console.log("hola");
          }
      }

})();
