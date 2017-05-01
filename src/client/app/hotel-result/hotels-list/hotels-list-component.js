(function (){

  'use strict';

  angular
      .module('hotelsResult')
      .component('hotelsList', {
        bindings: {
            hotels: '<'
        },
        templateUrl: "hotel-result/hotels-list/hotels-list.html"
      });
})();
