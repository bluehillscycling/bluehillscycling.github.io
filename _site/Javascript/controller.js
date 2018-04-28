var bhccControllers = angular.module('bhccControllers', ['ui.bootstrap']);

bhccControllers.controller('NavController', function ($scope) {

    $scope.isCollapsed = true;

});


bhccControllers.controller('SegmentController', function ($scope, $http) {

    

    var headers =  {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
    };

    var req = {
        method: 'GET',
        url: 'https://bhcc-strava.herokuapp.com/bhcc/leaderboard.json',
        headers: headers,
        useXDomain: true,
        dataType: "jsonp"
        //data: { test: 'test' }
    }



        $http(req).then(function (data) {

            $scope.StravaData = data.data

            var d = ""

        }, function (error) {

            console.log(error, 'can not get data.');

        })




});


bhccControllers.controller('FunFactController', function ($scope, $http) {

    

    var headers =  {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
    };

    var req = {
        method: 'GET',
        url: 'https://bhcc-strava.herokuapp.com/bhcc/funFacts.json',
        headers: headers,
        useXDomain: true,
        dataType: "jsonp"
        //data: { test: 'test' }
    }



        $http(req).then(function (data) {

            $scope.StravaData = data.data

            var d = ""

        }, function (error) {

            console.log(error, 'can not get data.');

        })




});