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
      .when('/cgv', {
        templateUrl: 'views/cgv.html',
        controller: 'MainCtrl'
      })
      .when('/hotel/:id', {
        templateUrl: 'views/hotel.html',
        controller: 'HotelCtrl'
      })
      .when('/findHotel', {
        templateUrl: 'views/findHotel.html',
        controller: 'MainCtrl'
      })
      .when('/findNear', {
        templateUrl: 'views/findNear.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
