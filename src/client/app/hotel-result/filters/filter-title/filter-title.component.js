(function(){
    'use strict';

    angular
        .module('filters')
        .component('filterTitle',{
            controller: deleteFilterController,
            require: {
                hotelsController : '^hotelsRoot'
            },
            templateUrl: "hotel-result/filters/filter-title/filter-title.html"
        });

    function deleteFilterController(){

       this.deleteFilter = function(){

           this.hotelsController.hotels =  this.hotelsController.hotelsBackup();
       }


    }

})();
