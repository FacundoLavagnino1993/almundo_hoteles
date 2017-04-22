( function (){

  'use strict';

  angular
      .module('hotelsResult')
      .service('HotelsService', HotelsService);

    HotelsService.$inject = ['$http'];


    function HotelsService($http){

        this.getHotels = getHotels;

        function getHotels() {
            return $http.get('/hotels')
                .then(function (res){
                    return res.data;
                });
          }
      }
})();
