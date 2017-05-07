(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterStar',{
          //  controller: filterStarController,
            bindings: {
                filters: '<'
            },
            templateUrl:"hotel-result/filters/filter-star/filter-star.html"
        })

})();