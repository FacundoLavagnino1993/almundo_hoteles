(function(){
    'use strict';

    angular
        .module('filters')
        .component('filters',{
            controller: filtersController,
            bindings: {
              filters: '<'
            },
            require: {
                hotelsController: '^hotelsRoot'
            },
            templateUrl:"hotel-result/filters/filters.html"
        });

        function filtersController(){
            
            this.resetFilters = function() {
                this.hotelsController.$onInit();
                console.log("filter reset ok");
            }

        }
})();