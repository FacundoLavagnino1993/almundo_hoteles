(function(){
    angular
        .module('hotels-result')
        .component('hotel-item',{
            bindings:{
                item : '<'
            },
            templateUrl:'hotels-result/hotels-list/hotel-item/hotel-item.html'
        });

})();