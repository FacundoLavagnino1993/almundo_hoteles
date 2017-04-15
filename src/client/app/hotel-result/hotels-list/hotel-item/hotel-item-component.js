(function (){
  'use strict';

  angular
    .module('hotelsResult')
    .component('hotelItem', {
      bindings: {
          item: '<'
      },
      templateUrl: "hotel-result/hotels-list/hotel-item/hotel-item.html"
    });
})();
