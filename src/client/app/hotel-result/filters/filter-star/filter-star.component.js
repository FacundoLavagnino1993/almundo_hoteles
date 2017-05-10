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
                            return hotels;
                        }else{
                            return stars.indexOf(hotel.stars)>-1;
                        }
                    })
                }
            }
    });


    function filterStarController(){

        var _self = this;

        this.filterStars = ["1","2","3","4","5"];



        this.numberStars = function(number){
            return Array(parseInt(number));
        };

        this.allStars = function() {
            _self.filters.stars = [];

            for(var i=1; i < _self.filters.starsCheck.length ; i++){
                _self.filters.starsCheck[i] = false;
            }
        };

        this.filterByStars = function(star){

            _self.filters.starsCheck[0] = false;

            if(this.filters.stars.indexOf(star)>-1){
                this.filters.stars.splice(this.filters.stars.indexOf(star),1);
            }else{
                this.filters.stars.push(star);
            }
        };
    }

})();