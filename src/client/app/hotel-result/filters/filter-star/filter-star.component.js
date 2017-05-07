(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterStar',{
            controller: filterStarController,
            bindings: {
                filters: '<'
            },
            require: {
                hotelsController: '^hotelsRoot'
            },
            templateUrl:"hotel-result/filters/filter-star/filter-star.html"
        }).filter('filterStar',function(){
            return function (hotels,stars) {
                if(hotels){
                    return hotels.filter(function (hotel){
                        if(stars.length == 0){
                            return;
                        }else{
                            return stars.indexOf(hotel.stars)>-1;
                        }
                    })
                }
            }
    });


    function filterStarController(){


        this.filterStars = ["1","2","3","4","5"];

        this.check = function(stars){
            return this.starsCheck.stars;
        };

        this.numberStars = function(number){
            return Array(parseInt(number));
        };

        this.allStars = function(){
            this.hotelsController.hotels = this.hotelsController.hotelsFiltered;
        };

        this.filterByStars = function(star){
            if(this.filters.stars.indexOf(star)>-1){
                this.filters.stars.splice(this.filters.stars.indexOf(star),1);
            }else{
                this.filters.stars.push(star);
            }
        };
    }

})();