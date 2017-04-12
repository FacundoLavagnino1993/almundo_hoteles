(function(){
    angular
        .module('hotelsResult')
        .component('hotelItem',{
            binding:{
                hotelItem: '<'
            },
            templateUrl:"hotels-result/hotels-list/hotel-item/hotel-item.html"
        });
})();