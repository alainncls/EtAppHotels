'use strict';

angular.module('projetAngularJsApp')
	.controller('MainCtrl', function ($scope, $http, $location) {
		var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
		urlJSON += 'dataset=hotels-classes-en-france';

		$scope.map = {
			center: {
				latitude: 20,
				longitude: 0
			},
			zoom: 2,
			options: {
				disableDoubleClickZoom:true,
	        	draggableCursor:"move",
	        	draggingCursor:"auto",
	        	keyboardShortcuts:false,
	        	streetViewControl:false
			}
		};

		$scope.hotels = [];

		$http.get(urlJSON + '&rows=500&start=0').success( function (data2) {
			$scope.hotels = data2.records;
			$scope.hotels.forEach( format, $scope.hotels);
		});

		function format(element,index){
			this[index] = element.fields;
			this[index].recordid = element.recordid.substring(21);
			this[index].geometry = element.geometry;
		};

		$scope.goTo = function (id) {
			$location.path('/hotel/' + id);
		};
	});