'use strict';

var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?dataset=hotels-classes-en-france&q=recordid:';

angular.module('projetAngularJsApp')
.controller('HotelCtrl', function ($scope, $http, $routeParams) {
	$scope.hotel = [];

	$http.get(urlJSON+'hotels_classescsvzip/'+$routeParams.id).success( function (data) {
		$scope.hotel=data.records;
	});
});