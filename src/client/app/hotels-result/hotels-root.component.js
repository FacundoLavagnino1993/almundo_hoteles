(function(){
    'use strict';
    angular
        .module('hotelsResult')
        .component('hotelsRoot', {
            controller: HotelsController,
            templateUrl: "hotels-result/hotels-root.html"
        });



        function HotelsController(){

            this.$onInit = function(){

                console.log("page ready");
            }
        }
})();