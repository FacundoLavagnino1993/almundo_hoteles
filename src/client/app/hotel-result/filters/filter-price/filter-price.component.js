(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterPrice',{
            controller: filterPriceController,
            bindings:{
             filters:'<', 
                hotels:'<'
            },
            templateUrl: "hotel-result/filters/filter-price/filter-price.html"
        })
        .filter('filterPrice', function() {
            
            return function(filter) {
               
                var filtered=[];
                angular.forEach(hotels, function(hotel){
                    if(hotel.price >= filter.priceMin && hotel.price <= filter.priceMin)
                    {
                        filtered.push(hotel);
                    }
                });
                return filtered;
            };
        });


        function filterPriceController(){

            /*let _self = this;

            this.filterPrice = function (hotels) {
                //let hotels = _self.hotelsController.hotels;

                _self.hotelsController.hotels = hotels.filter(function (hotel){
                    console.log(hotel.price);
                    if(hotel.price >= _self.filters.price.priceMin && hotel.price <= _self.filters.price.priceMax)
                    {
                        return hotel;
                    }
                });

            };
*/
            this.slider = {
                value: 150,
                options: {
                    minRange: 200,
                    noSwitching: true,
                    pushRange: true,
                    //onChange : this.filterPrice
                }
            };
        }
})();