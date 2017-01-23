(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['menuItems','userService','ApiPath'];
function myInfoController(menuItems, userService, ApiPath) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems.menu_items;
  $ctrl.basePath = ApiPath;

  $ctrl.userPresent = function () {
    if (angular.isUndefined($ctrl.user)) {
      return false;
    } else {
      return true;
    }
  }

  $ctrl.getUserInfo = function () {
    $ctrl.user = userService.getUserInfo();

    // shows the user info for checking
    console.log('Retrieved User Information!');
    console.log($ctrl.user);
  }

  $ctrl.getFavoriteInfo = function () {
    if ($ctrl.userPresent()) {
      for (var i = 0; i < $ctrl.menuItems.length; i++) {
        if ($ctrl.user.favorite == $ctrl.menuItems[i].short_name) {
          $ctrl.favorite = $ctrl.menuItems[i];
          break;
        }
      }

      console.log($ctrl.favorite);
    }
  }

  $ctrl.$onInit = function () {
    $ctrl.getUserInfo();
    $ctrl.getFavoriteInfo();
    console.log($ctrl.basePath);
  };
}

})();
