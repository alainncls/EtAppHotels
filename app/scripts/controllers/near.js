'use strict';

angular.module('projetAngularJsApp')
.controller('NearCtrl', function ($scope, $window, $http, $location) {
	$scope.distance = 1000;

	$scope.dist = [
		{name: '500 m', val: 500},
		{name: '1 km', val: 1000},
		{name: '2 km', val: 2000},
		{name: '5 km', val: 5000},
		{name: '10 km', val: 10000}
	];

	$scope.map = {
		center: {
			latitude: 0,
			longitude: 0
		},
		zoom: 14,
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
				url: 'http://icons.iconarchive.com/icons/icons-land/vista-map-markers/32/Map-Marker-Marker-Outside-Azure-icon.png'
			}
		}
	};

	$scope.circle = [{
		//center: marker.coords,
		radius: $scope.distance,
		fill: {
			color: 'blue',
			opacity: 0.3
		},
		stroke: {
			color: 'blue',
			weight: 1,
			opacity: 1
		}
	}];

	$scope.width = document.getElementById('gmap').offsetWidth;

	/*Geolocalisation*/
	$window.navigator.geolocation.getCurrentPosition(function(position) {
		$scope.$apply(function() {
			$scope.position = position;

			$scope.map.center.latitude = position.coords.latitude;
			$scope.map.center.longitude = position.coords.longitude;

			$scope.marker.coords.latitude = position.coords.latitude;
			$scope.marker.coords.longitude = position.coords.longitude;

			$scope.around();
		});
	}, function(error) {
		alert(error);
	});

	$scope.around = function () {
		$scope.circle[0].radius = $scope.distance;
		var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
		urlJSON += 'dataset=hotels-classes-en-france';
		var requete = urlJSON + '&rows=60&geofilter.distance=' + $scope.marker.coords.latitude + ',' + $scope.marker.coords.longitude + ',' + $scope.distance;
		$http.get(requete).success( function (data) {
			$scope.hotels = data.records;
			$scope.hotels.forEach( format, $scope.hotels);
		});
		switch($scope.distance){
			case 500:
				$scope.map.zoom = 15;
				break;
			case 2000:
				$scope.map.zoom = 13;
				break;
			case 5000:
				$scope.map.zoom = 12;
				break;
			case 10000:
				$scope.map.zoom = 11;
				break;
			default:
				$scope.map.zoom = 14;
				break;
		}
		
	};

	function format(element,index){
		this[index] = element.fields;
		this[index].recordid = element.recordid;
		this[index].geometry = element.geometry;
		this[index].classement = element.fields.classement.substring(0,1);
	}

	$scope.goTo = function (id) {
		$location.path('/hotel/' + id);
	};
});