'use strict'

angular.module("Global Services", [])
  .factory("Testing", [function () {
    return {
      test: function () {
        console.log("It is working")
      }
    }

  }])
  .service("CheckIfUserHasLogin", ['$http', function ($http) {
    $http.get("localhost/Knowledge_PHP_Server/api/users/checkIfUserLogin.php").then((result) => {
        if (result.data["Success"]) {
          return true;
        } else {
          return false;
        }
      }
    );
  }])
  .service("GetMainPageQuestionList", ['$http', function ($http) {
    $http.get('localhost/Knowledge_PHP_Server/api/question/getAllQuestion.php').then((result) => {
      return (result.data);
    })
  }]);
