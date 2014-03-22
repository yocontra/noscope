module.exports = function(file) {
  var audio = new Audio(file);
  audio.play();
  return audio;
};