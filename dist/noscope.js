!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.noscope=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var start = _dereq_('./lib/start');

module.exports = {
  start: start
};
},{"./lib/start":4}],2:[function(_dereq_,module,exports){
module.exports = function(file, height, x, y) {
  var offset = height;
  var half = (offset/2);

  var img = document.createElement('img');
  img.height = offset;
  img.width = offset;

  // wow hax so i dont have to include a css file
  img.style.position = 'absolute';
  img.style.top = (y-half)+'px';
  img.style.left = (x-half)+'px';
  img.style['-webkit-user-select'] = 'none';
  img.style.transition = 'opacity 0.2s linear';
  img.src = file;

  document.getElementsByTagName('body')[0].appendChild(img);

  // custom fadeout technology
  var interval = setInterval(function(){
    img.style.opacity = 0;
  }, 100);
  return;
};
},{}],3:[function(_dereq_,module,exports){
module.exports = function(file) {
  var audio = new Audio(file);
  audio.play();
  return audio;
};
},{}],4:[function(_dereq_,module,exports){
var events = _dereq_('add-event-listener');
var playAudio = _dereq_('./playAudio');
var insertImage = _dereq_('./insertImage');

module.exports = function() {

  events.addEventListener(document, 'click', function(e){
    var x = e.pageX;
    var y = e.pageY;

    console.log(e);
    insertImage('res/hitmarker.png', 80, x, y);
    playAudio('res/hitmarker.mp3');
  });

};
},{"./insertImage":2,"./playAudio":3,"add-event-listener":5}],5:[function(_dereq_,module,exports){
addEventListener.removeEventListener = removeEventListener
addEventListener.addEventListener = addEventListener

module.exports = addEventListener

var Events = null

function addEventListener(el, eventName, listener, useCapture) {
  Events = Events || (
    document.addEventListener ?
    {add: stdAttach, rm: stdDetach} :
    {add: oldIEAttach, rm: oldIEDetach}
  )
  
  return Events.add(el, eventName, listener, useCapture)
}

function removeEventListener(el, eventName, listener, useCapture) {
  Events = Events || (
    document.addEventListener ?
    {add: stdAttach, rm: stdDetach} :
    {add: oldIEAttach, rm: oldIEDetach}
  )
  
  return Events.rm(el, eventName, listener, useCapture)
}

function stdAttach(el, eventName, listener, useCapture) {
  el.addEventListener(eventName, listener, useCapture)
}

function stdDetach(el, eventName, listener, useCapture) {
  el.removeEventListener(eventName, listener, useCapture)
}

function oldIEAttach(el, eventName, listener, useCapture) {
  if(useCapture) {
    throw new Error('cannot useCapture in oldIE')
  }

  el.attachEvent('on' + eventName, listener)
}

function oldIEDetach(el, eventName, listener, useCapture) {
  el.detachEvent('on' + eventName, listener)
}

},{}]},{},[1])
(1)
});