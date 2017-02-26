starterApp.controller('newNoteController', function($scope, $mdToast){
  var ctrl = this;
  ctrl.test = "Test String";
  ctrl.note = {
    title : "",
    content : ""
  };

  ctrl.clear = function(){
    var toast_content = $mdToast.simple()
      .textContent('Are you sure?')
      .action('Yes')
      .highlightAction(true)
      .position('top right')
      .highlightClass('md-accent');


    $mdToast.show(toast_content).then(function(response){
      if(response== 'ok'){
        ctrl.note = {
          title : "",
          content : ""
        };
      };
    });
  };

  ctrl.save = function(){
    var toast_content = $mdToast.simple()
      .textContent('Are you sure?')
      .action('Yes')
      .highlightAction(true)
      .position('top right')
      .highlightClass('md-accent');


    $mdToast.show(toast_content).then(function(response){
      if(response== 'ok'){
        console.log('Call to Save Service')
      };
    });
  };
});
