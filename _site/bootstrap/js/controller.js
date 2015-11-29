var bhcccApp = angular.module('bhccAPP', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

bhcccApp.controller('RaceTeamCtrl', function($scope, $http) {
    $http.get("/bootstrap/js/rider_data.json").success(function(data){

        $scope.data = data;   




    });




    $scope.show = function(modalName){
        
        modalName = "#rider-modal-" + modalName;
        var modalDefaultHeight = 500;

        $(modalName).css({"top":"400px"})
        var screenTop = $(document).scrollTop();
        var windowH = $(window).height();

        var modalH = $(modalName).height();
        var newHeight = (windowH/2) - (modalH/2)

        //$(".rider-modal").css({"height":(windowH/2)-300 + "px"});

        // $(".rider-modal").css({"top":(screenTop)+"px"});


        $(modalName).modal('show');







    }



});

