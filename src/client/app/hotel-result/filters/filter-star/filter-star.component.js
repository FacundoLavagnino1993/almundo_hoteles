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


        this.filterStars = ["1","2","3","4","5"];

        this.check = function(stars){
            return this.starsCheck.stars;
        };

        this.numberStars = function(number){
            return Array(parseInt(number));
        };


        this.filterByStars = function(star){

            if(this.filters.stars.indexOf(star)>-1){
                //debugger;
                //dischecked
              /*  if(document.getElementsByTagName("starsFiltered").checked ==false){
                    document.getElementById("allStars").checked = true;
                }*/

                this.filters.stars.splice(this.filters.stars.indexOf(star),1);
            }else{
                //debugger;
                //checked
                document.getElementById("allStars").checked = false;
                this.filters.stars.push(star);
            }
        };
    }

})();