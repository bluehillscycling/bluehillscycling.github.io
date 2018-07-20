var bhccControllers = angular.module('bhccControllers', ['ui.bootstrap']);

bhccControllers.controller('NavController', function ($scope) {

    $scope.isCollapsed = true;

});


bhccControllers.controller('SegmentController', function ($scope, $http) {

    $scope.segmentsLoaded = false;

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
    }


        $http(req).then(function (data) {

            $scope.StravaData = data.data

            $scope.segmentsLoaded = true;

        }, function (error) {

            console.log(error + ' can not get data.');

        })




});


bhccControllers.controller('FunFactController', function ($scope, $http) {

    $scope.StravaData = []
    var headers =  {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
    };

    var req1 = {

        method: 'GET',
        url: 'https://bhcc-strava.herokuapp.com//bhcc/users.json',
        headers: headers,
        useXDomain: true,
        dataType: "jsonp",
       
    }
    //--Get All user ids
    $http(req1).then(function (userdata) {

        var all_ids = userdata.data.user_ids
        var arrayOfIds = []
        var tempArray = []

        //--Split USer Ids up into Chunks
        for (var i = 0; i < all_ids.length; ++i) {
            if (i % 3 == 0) {
                tempArray = []
            }
            tempArray.push(all_ids[i])
          
            if (i % 3 == 2 || i == all_ids.length-1) {
                arrayOfIds.push(tempArray)
            }
        }
        //--Get Fun facts for each chunk
        for (var i = 0; i < arrayOfIds.length; ++i) {
            
            var req2 = {

                method: 'GET',
                url: 'https://bhcc-strava.herokuapp.com//bhcc/funFacts.json',
                headers: headers,
                useXDomain: true,
                //dataType: "jsonp",
                params: {ids: JSON.stringify(arrayOfIds[i])},
            }

            $http(req2).then(function (data) {

                $scope.StravaData = $scope.StravaData.concat(data.data.fun_facts)


            }, function (error) {

                console.log(error + ' can not get data.');

            })

        }







    }, function (error) {

        console.log(error, 'can not get data.');

    })








});