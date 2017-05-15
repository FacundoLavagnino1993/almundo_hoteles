(function () {
    'use strict';

    angular
        .module('hotelsResult')
        .component('map',{
            controller: mapController,
            templateUrl : 'hotel-result/map/map.html'
        });

    function mapController(){
        let flag = false;
        this.showMap = function(){

            let image = document.getElementById('image-map');

            if(image.style.display == 'block' || !flag){
                image.style.display = 'none';
                flag = true;
            }else{
                image.style.display = 'block';
            }
        }
    }

})();