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
          _self.hotelsFiltered = [];

          this.$onInit = function(){

              HotelsService.getHotels()
                  .then(function done(res){
                      _self.hotels = res;
                      _self.hotelsFiltered = res;

                  }, function error(error){
                      console.log(error);
                  });

              _self.filters = {
                  "name" : "",
                  "nameFilter" : "",
                  "price" : {
                      "priceMin" : 200,
                      "priceMax" : 7000
                  },
                  "stars" : [],
                  "starsCheck": [true,false,false,false,false,false]
              };

              this.hotelsBackup = function(){

                  HotelsService.getHotels()
                      .then(function done(res){
                          _self.hotels = res;
                      })
              };

              return _self.hotels;
          };

            this.$doCheck= function(){
            console.log("hola");
          }
      }

})();
