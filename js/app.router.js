starterApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    // Home page route
    .when('/', {
      title : 'Home',
      templateUrl : 'html/home.html'
    })
    .when('/add_note', {
      title : 'Add Note',
      templateUrl : 'html/addnote.html',
      controller : 'newNoteController',
      controllerAs : 'ctrl'
    })
    .when('/review_notes', {
      title : 'Review Notes',
      templateUrl : 'html/reviewnotes.html'
    })
    .when('/settings', {
      title : 'Settings',
      templateUrl : 'html/settings.html'
    });
}]);
