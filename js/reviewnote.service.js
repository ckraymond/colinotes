starterApp.service('reviewNoteService', function(){
  var service = this;

  service.getNotes = function() {
    var noteList = [
      {title : 'Item One',
      content : 'This is some stuff in a note.'},
      {title : 'Item Two',
      content : 'This is some stuff in a note.'},
      {title : 'Item Three',
      content : 'This is some stuff in a note.'},
      {title : 'Item Four',
      content : 'This is some stuff in a note.'},
      {title : 'Item Five',
      content : 'This is some stuff in a note.'},
      {title : 'Item Six',
      content : 'This is some stuff in a note.'},
      {title : 'Item Seven',
      content : 'This is some stuff in a note.'},
      {title : 'Item Eight',
      content : 'This is some stuff in a note.'},
      {title : 'Item Nine',
      content : 'This is some stuff in a note.'},
      {title : 'Item Ten',
      content : 'This is some stuff in a note.'}
    ];
    return noteList;
  };
});
