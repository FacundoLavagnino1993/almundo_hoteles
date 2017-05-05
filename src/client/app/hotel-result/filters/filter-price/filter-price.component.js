(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterPrice',{
            controller: filterPriceController,
            bindings:{
              filters : '<'
            },
            require: {
                hotelsController: '^hotelsRoot'
            },
            templateUrl: "hotel-result/filters/filter-price/filter-price.html"
        });


        function filterPriceController(){

            let _self = this;

            this.filterPrice = function () {
                let hotels = _self.hotelsController.hotels;

                _self.hotelsController.hotels = hotels.filter(function (hotel){
                    console.log(hotel.price);
                    if(hotel.price >= _self.filters.price.priceMin && hotel.price <= _self.filters.price.priceMax)
                    {
                        return hotel;
                    }
                });

            };

            this.slider = {
                value: 150,
                options: {
                    minRange: 200,
                    noSwitching: true,
                    pushRange: true,
                    onChange : this.filterPrice
                }
            };
        }
})();