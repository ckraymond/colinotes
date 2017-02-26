starterApp.controller('sideNavController',function($scope, $location){
  var ctrl = this;
  ctrl.sideNav = false;

  // Toggles the sidenav open and closed
  ctrl.toggleNav = function() {
    if (ctrl.sideNav == true ){
      ctrl.sideNav = false;
    } else {
      ctrl.sideNav = true;
    }
  };

  // Changes the routing of the page
  ctrl.navigate = function(page) {
    $location.path(page);
    ctrl.sideNav = false;
  };
});
