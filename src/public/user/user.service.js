(function () {
"use strict";

angular.module('public')
.service('userService', userService);

function userService() {
  var service = this;

  service.saveItems = function(user_info) {
    service.user = user_info;
    console.log('Saved User Info!');
    console.log(service.user);
  }

  service.getUserInfo = function () {
    return service.user;
  }
}

})();
