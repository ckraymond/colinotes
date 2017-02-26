var starterApp = angular.module('starterApp',['ngRoute','ngMaterial']);

starterApp.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('grey')
  });

starterApp.config(function($mdThemingProvider){
    $mdThemingProvider.theme('dark')
      .primaryPalette('grey')
  });

starterApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
