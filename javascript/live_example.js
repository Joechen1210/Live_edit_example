videojs.plugin('firstPlugin', function() {
  var player = this,
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "First Plugin Working!";
  player.el().appendChild(overlay);
  
  //for(i=1;i<5;i++)
  //{
    var postdiv = document.createElement('div');
    postdiv.className = 'vjs-overlay';
    postdiv.className += ' vjs-overlay-right1';
    postdiv.innerHTML = "<img src='https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/agenda-logo.png' max-width='200px' max-height='200px' width='100%' height='100%'></img>";
    //postdiv.className += ' vjs-overlay-right' + i ;
    console.log("create"+postdiv.className);
    player.el().appendChild(postdiv);
  //}
});
