// Declare app level module which depends on views, and core components
'use strict';

angular.module('Knowledge').config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    template: '<login></login>'
  }).when('/signup', {}).otherwise("/");
}]);
