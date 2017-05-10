(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterName',{
            controller: filterNameController,
            bindings: {
                filters : '<'
            },
            templateUrl: "hotel-result/filters/filter-name/filter-name.html"})
        .filter('filterName',function(){

                return function(hotels,nameFilter){
                    if(hotels){
                        return hotels.filter(function(hotel){
                            return hotel.name.toLowerCase().indexOf(nameFilter.toLowerCase()) != -1;
                        })
                    }
                }
        });

    function filterNameController(){

        this.filterHotel = function(){
            this.filters.nameFilter = this.filters.name;
        }
    }
})();