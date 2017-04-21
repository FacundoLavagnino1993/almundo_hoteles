(function (){
  'use strict';

  angular
    .module('hotelsResult')
    .component('hotelItem', {
      controller: hotelItemController,
      bindings: {
          item: '<'
      },
      templateUrl: "hotel-result/hotels-list/hotel-item/hotel-item.html"
    });

    function hotelItemController(){
        this.stars = function(){
            return Array(parseInt(this.item.stars));
        };

        this.getIcon = function(key){

            var icons = {
                wifi: "class amt-internet",
                sp:   "class amt-spa",
                tel:  "class amt-phone"
            }
            return icons[key];
        }
    }
})();


