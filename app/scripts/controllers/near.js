'use strict';

angular.module('projetAngularJsApp')
.controller('NearCtrl', function ($scope, $window, $http) {

	$scope.map = {
		center: {
			latitude: 0,
			longitude: 0
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

	doTest1();

	$scope.position = null;

	function format(element,index){
		this[index] = element.fields;
		this[index].recordid = element.recordid;
		this[index].geometry = element.geometry;
		this[index].classement = element.fields.classement.substring(0,1);
	}

	function doTest1 () {
		window.navigator.geolocation.getCurrentPosition(function(position) {
			$scope.$apply(function() {
				$scope.position = position;

				$scope.map.center.latitude = position.coords.latitude;
				$scope.map.center.longitude = position.coords.longitude;

				$scope.map.coords.latitude = position.coords.latitude;
				$scope.map.coords.longitude = position.coords.longitude;

				var urlJSON = 'http://public.opendatasoft.com/api/records/1.0/search?';
				urlJSON += 'dataset=hotels-classes-en-france';
				var requete = urlJSON + '&geofilter.distance='+$scope.map.coords.latitude+','+$scope.map.coords.longitude+',10000';
				alert(requete);
				$http.get(requete).success( function (data) {
					$scope.hotels = data.records;
					$scope.hotels.forEach( format, $scope.hotels);
				});
				
			});
		}, function(error) {
			alert(error);
		});
	}

	$scope.goTo = function (id) {
		$location.path('/hotel/' + id);
	};
});