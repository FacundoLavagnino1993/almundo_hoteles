(function(){
    'use strict';

    angular
        .module('hotelsResult')
        .component('filters',{
            bindings: {
              filter: '<'
            },
            templateUrl:"hotel-result/filters/filters.html"
        });

})();