(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterName',{
            controller: filterNameController,
            bindings: {
                filters : '<'
            },
            require: {
                hotelsController : '^hotelsRoot'
            },
            templateUrl: "hotel-result/filters/filter-name/filter-name.html"
        });

    function filterNameController(){
        var _self = this;

        this.filterHotel = function(){
            var hotels = this.hotelsController.hotels;
            var hotelsFiltred = hotels.filter(function (hotel) {
                return hotel.name.toLowerCase().indexOf(_self.nameFilter) != -1;
            });

            this.hotelsController.hotels = hotelsFiltred;
        }
    }
})();