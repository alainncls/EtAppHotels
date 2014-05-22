'use strict';

angular.module('projetAngularJsApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.map = {
			center: {
				latitude: 43.45,
				longitude: 4.43
			},
			zoom: 2
		};
	});
