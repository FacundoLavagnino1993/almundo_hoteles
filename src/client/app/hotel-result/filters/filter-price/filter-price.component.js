(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterPrice',{
            controller: filterPriceController,
            bindings:{
             filters:'<'
            },
            templateUrl: "hotel-result/filters/filter-price/filter-price.html"
        })
        .filter('filterPrice', function() {
                return function(hotels,price) {
                    if(hotels){
                        return hotels.filter(function(hotel){
                            return(hotel.price >= price.priceMin && hotel.price <= price.priceMax);
                        })
                    }

                }
            });



        function filterPriceController(){

            this.slider = {

                options: {
                    minRange: 200,
                    noSwitching: true,
                    pushRange: true

                }
            };
        }
})();