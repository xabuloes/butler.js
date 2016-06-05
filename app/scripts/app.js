'use strict';

/**
 * @ngdoc overview
 * @name butlerjsApp
 * @description
 * # butlerjsApp
 *
 * Main module of the application.
 */
angular
  .module('butlerjsApp', [
    'ngRoute',
    'textToSpeechService',
    'butlerBasic'
  ])
  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
