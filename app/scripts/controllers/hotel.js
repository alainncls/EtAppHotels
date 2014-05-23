'use strict';

angular.module('projetAngularJsApp')
.controller('HotelCtrl', function ($scope, $http, $routeParams) {
	var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/';
	urlJSON += 'search?dataset=hotels-classes-en-france';

	$scope.hotel = [];

	$scope.map = {
		center: {
			latitude: 43.45,
			longitude: 4.43
		},
		zoom: 10,
		options: {
			disableDoubleClickZoom:true,
        	draggableCursor:"move",
        	draggingCursor:"auto",
        	keyboardShortcuts:false,
        	streetViewControl:false
		}
	};

	$http.get(urlJSON+'&q=recordid:hotels_classescsvzip%2F' + $routeParams.id).success( function (data) {
		$scope.hotel = data.records[0];
		var l = $scope.hotel.fields.classement.substring(0,1);
		var e = '';

		for (var i = 0; i < l; i++) {
			e += i + '';
		}
		$scope.hotel.fields.classement = e;
		//centrage de la map
		$scope.map.center = $scope.hotel.geometry.coordinates;
		
		//tentative d'affichage des hotles  sur un rayon de 5km autour de l'hotel principal
		/*$http.get(urlJSON+'&geofilter.distance='+ $scope.map.center[0]+','+$scope.map.center[1]+',5000' ).success( function (data2) {
			$scope.hotels = data2.records;
		});*/
	});

	$scope.goTo = function (id) {
		$location.path('/hotel/' + id);
	};
});