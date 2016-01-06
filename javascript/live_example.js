videojs.plugin('firstPlugin', function() {
  var player = this,
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "First Plugin Working!";
  player.el().appendChild(overlay);
  
  for(i=1;i<5;i++)
  {
    var postdiv = document.createElement('div');
    postdiv.className = 'vjs-overlay';
    postdiv.className += ' vjs-overlay-right' + i ;
    console.log("create"+postdiv.className);
    player.el().appendChild(postdiv);
  }
});
