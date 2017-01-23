(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['menuItems','userService','$http','ApiPath'];
function SignupController(menuItems, userService, $http, ApiPath) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems.menu_items;

  $ctrl.submit = function () {
    if (angular.isUndefined($ctrl.user)){
      $ctrl.menuCheck = false;
      return;
    };

    $http.get(ApiPath + '/menu_items/' + $ctrl.user.favorite + '.json')
    .then (function (response){
      $ctrl.menuCheck = true;
      userService.saveItems($ctrl.user);
      $ctrl.completed = true;
    })
    .catch (function(error){
      console.log(error);
      $ctrl.menuCheck = false;
      $ctrl.completed = false;
    });
  }
}

})();
