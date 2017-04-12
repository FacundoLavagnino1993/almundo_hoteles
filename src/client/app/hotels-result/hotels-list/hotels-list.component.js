(function(){
    angular
        .module('hotelsResult')
        .component('hotelsList', {
            bindings: {
                hotels: '<'
            },
            templateUrl: "hotels-result/hotels-list/hotels-list.html"
        });
})();