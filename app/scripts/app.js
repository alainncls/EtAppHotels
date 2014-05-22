'use strict';

angular
  .module('projetAngularJsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/hotel/:id', {
        templateUrl: 'views/hotel.html',
        controller: 'HotelCtrl'
      })
      .when('/hotelFind', {
        templateUrl: 'views/hotelFind.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
