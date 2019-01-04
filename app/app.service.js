'use strice'

angular.module("Global Services", []).service("CheckIfUserHasLogin", ['$http', function ($http) {
  $http.get("localhost/Knowledge_PHP_Server/api/users/checkIfUserLogin.php").then((result) => {
      if (result.data["Success"]) {
        return true;
      } else {
        return false;
      }
    }
  );
}]);
