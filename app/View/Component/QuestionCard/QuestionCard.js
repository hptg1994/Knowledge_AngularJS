'use strict'
angular.module('QuestionCardModule', []).directive('questionCard', function () {
  return {
    restrict: "E",
    templateUrl: "View/Component/QuestionCard/QuestionCard.html",
    scope: {
      questionTitle: "@",
      answer: "@",
      answerProvider: "@"
    },
    controller: ["$scope", function ($scope) {
      $scope.random = "Random Words";
    }]
  }
});