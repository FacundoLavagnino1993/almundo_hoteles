(function(){
    'use strict';

    angular
        .module('filters')
        .component('filterTitle',{
            controller: FilterController,
            require: {
                hotelsController : '^hotelsRoot',
                filtersController : '^filters'
            },
            templateUrl: "hotel-result/filters/filter-title/filter-title.html"
        });

    function FilterController(){
        let flag = false;
       this.deleteFilter = function(){
           this.filtersController.resetFilters();
        };

        this.showFilter = function(){

            if(window.screen.width < 992){
                let filter = [];
                filter = document.getElementsByClassName("filter-box-style");
                for(let i=0; i<filter.length; i++){
                    if (filter[i].style.display == 'none') {
                        filter[i].style.display = 'block';
                    } else{
                        filter[i].style.display = 'none';
                    }
                }
            }

        }


    }

})();
