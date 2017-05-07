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

              _self.filters = {
                  "name" : " ",
                  "nameFilter" : " ",
                  "price" : {
                      "priceMin" : 200,
                      "priceMax" : 4000
                  },
                  "stars" : {
                      "5" : true,
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
