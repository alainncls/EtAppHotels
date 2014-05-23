'use strict';

angular.module('projetAngularJsApp')
	.controller('MainCtrl', function ($scope, $http, $location) {
		var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
		urlJSON += 'dataset=hotels-classes-en-france';

		$scope.map = {
			center: {
				latitude: 43.45,
				longitude: 4.43
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

		$http.get(urlJSON + '&rows=2&start=0').success( function (data2) {
			$scope.hotels = data2.records;
			$scope.hotels.forEach( encode, $scope.hotels);
		});

		function encode(element,index){
			this[index].recordid = element.recordid.substring(21);
		};

		$scope.goTo = function (id) {
			$location.path('/hotel/' + id);
		};
	});
