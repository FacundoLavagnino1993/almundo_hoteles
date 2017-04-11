(function() {
    angular
        .module('hotels-result')
        .component('hotel-list',{
            bindings:{
                item : '<'
            },
            templateUrl:'hotels-result/hotels-list/hotel-list.html'
        });
})();