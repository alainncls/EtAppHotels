'use strict';

angular.module('projetAngularJsApp')
.controller('HotelCtrl', function ($scope, $http, $routeParams) {
	var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/';
	urlJSON += 'search?dataset=hotels-classes-en-france&q=recordid:';

	$scope.hotel = [];

	$scope.map = {
		center: {
			latitude: 43.45,
			longitude: 4.43
		},
		coords: {
			latitude: 0,
			longitude: 0
		},
		zoom: 16,
		options: {
			disableDoubleClickZoom:true,
			draggableCursor:'move',
			draggingCursor:'auto',
			keyboardShortcuts:false,
			streetViewControl:false
		}
	};

	$scope.marker = {
		coords: {
			latitude: 0,
			longitude: 0
		},
		options: {
			clickable:false,
			cursor:'move',
			icon: {
				url: 'http://wiki.april.org/images/9/9e/Etoile.svg',
			    fillColor: 'yellow',
			    fillOpacity: 0.8,
			    scale: 0.1,
			    strokeColor: 'gold',
			    strokeWeight: 0.1
			}
		}
	};

	$http.get(urlJSON + $routeParams.id).success( function (data) {
		$scope.hotel = data.records[0];

		var l = $scope.hotel.fields.classement.substring(0,1);
		var e = '';

		for (var i = 1; i <= l; i++) {
			e += i + '';
		}
		$scope.hotel.fields.classement = e;
		//centrage de la map
		$scope.map.center = $scope.hotel.geometry.coordinates;
		$scope.map.coords = $scope.hotel.geometry.coordinates;
	});
});