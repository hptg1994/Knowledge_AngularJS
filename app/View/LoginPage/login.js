'use strict';

var loginModule = angular.module('login', []);
loginModule.component('login', {
  templateUrl: 'View/LoginPage/login.template.html',
}).controller('LoginController', ['$scope', "$http", function ($scope, $http) {
  $scope.login = function () {
    $http.post('http://localhost/Knowledge_PHP_Server/api/users/login.php', {
      username: $scope.username,
      password: $scope.password
    }).then((result) => {
      console.log(result.data["Success"]);
    })
  }
}]);