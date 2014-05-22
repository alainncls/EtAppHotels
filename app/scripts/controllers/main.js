'use strict';

angular.module('projetAngularJsApp')
	.controller('MainCtrl', function ($scope, $http) {
		var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
		urlJSON += 'dataset=hotels-classes-en-france';

		$scope.map = {
			center: {
				latitude: 43.45,
				longitude: 4.43
			},
			zoom: 2
		};

		$scope.hotels = [];

		$http.get(urlJSON+'&rows=100&start=0').success( function (data2) {
			$scope.hotels = data2.records;
		});

		/*$http.get(urlJSON+'&rows=0').success( function (data) {
			var step = 100;
			for (var i=0; i < data.nhits; i = i+step) {
				$http.get(urlJSON+'&rows='+step+'&start='+i).success( function (data2) {
					$scope.hotels.push(data2.records);
				});
			}
		});*/

	});
