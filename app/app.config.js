// Declare app level module which depends on views, and core components
'use strict';

angular.module('Knowledge').config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/login', {
    template: '<login></login>'
  }).when('/signup', {}).when('/main', {
    template: '<home></home>'
  }).otherwise("/main");
}]);
