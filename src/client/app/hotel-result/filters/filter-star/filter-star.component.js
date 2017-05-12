(function(){
    'use strict';
    angular
        .module('filters')
        .component('filterStar',{
            controller: filterStarController,
            bindings: {
                filters: '<',
                hotels: '<',
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
            let check =  _self.filters.starsCheck;
            check[0]=true;
            check[1]=false;
            check[2]=false;
            check[3]=false;
            check[4]=false;
            check[5]=false;


        };


        this.filterByStars = function(star){


            let check = _self.filters.starsCheck;

            check[star] = true;
            check[0] = false;

            if((check[1]) && (check[2]) && (check[3]) && (check[4]) && (check[5]))
            {debugger;
                _self.allStars();
                check[star] = false;
            }

            if(this.filters.stars.indexOf(star)>-1){
                this.filters.stars.splice(this.filters.stars.indexOf(star),1);
            }else{
                this.filters.stars.push(star);
            }
        };
    }

})();

//Usar this.numberStars para mostrar dinamicamente el filtro de estrellas.
//Si es posible en la misma funcion hacer logica para mostrar cantidad de hoteles disponibles x star.
//Hacer header full
//Revisar bug en slider.
