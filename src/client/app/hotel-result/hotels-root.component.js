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

        this.getHotelsInit = function (){
          return HotelsService.getHotels();
        };
      }

})();
