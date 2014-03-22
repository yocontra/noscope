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