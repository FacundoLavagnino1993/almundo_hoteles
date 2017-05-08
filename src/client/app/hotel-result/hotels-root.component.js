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
                  "name" : " ",
                  "nameFilter" : " ",
                  "price" : {
                      "priceMin" : 200,
                      "priceMax" : 4000
                  },
                  "stars" : [],
                  "starsCheck" : {
                      "5" : false,
                      "4" : false,
                      "3" : false,
                      "2" : false,
                      "1" : false
                  }
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
