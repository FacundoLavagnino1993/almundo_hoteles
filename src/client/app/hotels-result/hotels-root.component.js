(function(){
    'use strict';
    angular
        .module('hotels-result')
        .component('hotels-root', {
            controller: HotelsController,
            templateUrl: "hotel-result/hotels-root.html"
        });

        function HotelsController(){

            this.$onInit = function(){
                alert("HotelsController");

            }
        };
})();