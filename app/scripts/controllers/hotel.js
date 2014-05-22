'use strict';

var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/';
urlJSON += 'search?dataset=hotels-classes-en-france';
urlJSON += '&q=recordid:';

angular.module('projetAngularJsApp')
.controller('HotelCtrl', function ($scope, $http, $routeParams) {
	$scope.hotel = [];

	$http.get(urlJSON+$routeParams.id).success( function (data) {
		$scope.hotel=data.records[0];
	});
});