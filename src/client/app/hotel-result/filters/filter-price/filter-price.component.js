(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterPrice',{
            controller: filterPriceController,
            bindings:{
              "price" : '<'
            },
            templateUrl: "hotel-result/filters/filter-price/filter-price.html"
        });


        function filterPriceController(){

            let _self = this;

            this.slider = {
                value: 150,
                options: {
                    floor: 0,
                    ceil: 3250

                }
            }
        }
})();