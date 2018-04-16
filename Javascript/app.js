var bhccApp = angular.module('bhccApp', ['bhccControllers', 'ui.bootstrap'],
	function ($interpolateProvider) {
	    $interpolateProvider.startSymbol('[[');
	    $interpolateProvider.endSymbol(']]');
	});

bhccApp.filter('secondsToDateTime', [function() {
	return function(seconds) {
		return new Date(1970, 0, 1).setSeconds(seconds);
	};
}])