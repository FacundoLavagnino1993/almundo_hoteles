(function() {
    'use strict';
    angular
        .module('hotels-result')
        .component('hotel-list',{
            bindings:{
                hotels : '<'
            },
            templateUrl:'hotels-result/hotels-list/hotel-list.html'
        });
})();