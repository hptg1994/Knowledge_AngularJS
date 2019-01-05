'use strict'

/*angular.module("HomeModule", []).component('home', {
  templateUrl: 'View/MainPage/main.template.html'
}).controller('HomeController', ['$scope', 'Testing', function ($scope, Testing) {
  Testing.test();
}]);*/
angular.module("HomeModule", []).directive('home', function () {
  return {
    restrict: "EA",
    compile: function () {
      console.log("it is call");
    },
    templateUrl: 'View/MainPage/main.template.html'
  }
}).controller('HomeController', ['$scope', 'Testing', function ($scope, Testing) {
  Testing.test();
}]);