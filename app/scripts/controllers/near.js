'use strict';

angular.module('projetAngularJsApp')
.controller('NearCtrl', function ($scope, $window) {

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

    $scope.supportsGeo = $window.navigator;
    $scope.position = null;

    function doTest1 () {
        window.navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.position = position;

                $scope.map.center.latitude = position.coords.latitude;
                $scope.map.center.longitude = position.coords.longitude;

                $scope.map.coords.latitude = position.coords.latitude;
                $scope.map.coords.longitude = position.coords.longitude;
            });
        }, function(error) {
            alert(error);
        });
    };

    $scope.doTest2 = function() {
        $window.navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$apply(function() {
                $scope.position = position;
                $scope.map.center = position;
            });
        }, function(error) {
            alert(error);
        });
    };
});