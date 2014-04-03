var events = require('add-event-listener');
var playAudio = require('./playAudio');
var insertImage = require('./insertImage');

module.exports = function() {

  events.addEventListener(document, 'click', function(e){
    var x = e.pageX;
    var y = e.pageY;

    console.log(e);
    insertImage('res/hitmarker.png', 80, x, y);
    playAudio('res/hitmarker.mp3');
  });

};