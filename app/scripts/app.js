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
      .otherwise({
        redirectTo: '/'
      });
  });
