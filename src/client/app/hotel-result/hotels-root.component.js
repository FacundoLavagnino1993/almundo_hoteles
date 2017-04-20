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

        this.getHotelsInit = function (){
         /* HotelsService.getHotels().then(function done(response){
              _self.hotels = response;
          }, function fail(error){
              console.log(error);
         });*/
            return HotelsService.getHotels();
        };
      }

})();
