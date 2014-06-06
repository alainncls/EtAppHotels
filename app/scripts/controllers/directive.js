'use strict';

angular.module('projetAngularJsApp')
	.directive('hotelDisplay', function (){
		return {
			restrict: 'AEC',
			templateUrl:'views/parts/hotel.html'
		};
	})
	.directive('hotelsDisplay', function (){
		return {
			restrict: 'AEC',
			templateUrl:'views/parts/hotels.html'
		};
	})
	.directive('hotelsPaginationDisplay', function (){
		return {
			restrict: 'AEC',
			templateUrl:'views/parts/hotelsPagination.html'
		};
	});