'use strict';

angular.module('projetAngularJsApp')
.controller('HotelCtrl', function ($scope, $http, $routeParams) {
	var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/';
	urlJSON += 'search?dataset=hotels-classes-en-france';
	urlJSON += '&q=recordid:';

	$scope.hotel = [];

	$http.get(urlJSON+$routeParams.id).success( function (data) {
		$scope.hotel=data.records[0];
	});
});