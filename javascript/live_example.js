videojs.plugin('firstPlugin', function() {
  var player = this,
  webcontent,
  ishidden = false,
  overlay = document.createElement('p'),
  imageurl = [
            "https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/agenda_icon3.png", 
            "https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/FacebookIcon1.png",
            "https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/Twitter_Icon2.png",
            "https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/catering-button-questionnaire.png"
            ],
  weburl = [
            "http://htmlpreview.github.io/?https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Example_html/example_html.html",
            "https://raw.githubusercontent.com/Joechen1210/Seminar_live_example/master/Social_Network/facebook_html.html",
            "https://github.com/Joechen1210/Seminar_live_example/blob/master/Social_Network/twitter_html.html",
            "https://raw.githubusercontent.com/Joechen1210/Seminar_live_example/master/Social_Network/google_map_html.html"
            ],
  titletext = [
               "Agenda",
               "Facebook",
               "Twitter",
               "Questionnaire"
              ];
              
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = "First Plugin Working!";
  player.el().appendChild(overlay);
  
   var parentdiv = document.createElement('div');
          parentdiv.className = 'vjs-overlay';
          parentdiv.className += ' div-parent';
          parentdiv.id = 'divparent';
          
      var maindiv = document.createElement('div');
      	  maindiv.className = 'vjs-overlay';
      	  maindiv.className += ' div-main';
      	  maindiv.id = 'divmain';
      
      //add web site div
     var headerdiv = document.createElement('div');
         headerdiv.className = 'vjs-overlay';
         headerdiv.className += ' model-header';
         headerdiv.id = 'divheader';
         headerdiv.innerHTML = '<h3>Product Information</h3>';
         
     var bodydiv = document.createElement('div');
     	 bodydiv.className = 'vjs-overlay';
         bodydiv.className += ' model-body';
         bodydiv.id = 'divbody';
           
      //add close web button
      var closebtn = document.createElement('button');
          closebtn.className = 'vjs-overlay';
          closebtn.className += ' closebtn';
          closebtn.id = 'btnclose';
      var closetext = document.createTextNode('x');
      closebtn.appendChild(closetext);
      
        parentdiv.appendChild(closebtn);
        maindiv.appendChild(bodydiv);
        parentdiv.appendChild(maindiv);
  
  for(i=1;i<=4;i++)
  {
    var postdiv = document.createElement('div');
    postdiv.className = 'vjs-overlay';
    postdiv.className += ' vjs-overlay-right'+ i;
    postdiv.innerHTML = "<img title='" + titletext[i-1]  + "' src='" + imageurl[i-1] + "' max-width='200px' max-height='200px' width='100%' height='100%'></img>";
    //postdiv.className += ' vjs-overlay-right' + i ;
    
    console.log("create"+postdiv.className);
    player.el().appendChild(postdiv);
    webcontent = weburl[i-1];
    console.log("create" + webcontent);
      if (typeof webcontent === 'string') {
         bodydiv.innerHTML = webcontent;
         //bodydiv.innerHTML = "<iframe src='http://htmlpreview.github.io/?https://raw.githubusercontent.com/Joechen1210/video_overlay/master/index.html' frameborder='0' border='0' cellspacing='0' style='border-style: none' align='left'></iframe>";
           } 
      else {
          bodydiv.appendChild(webcontent);
           }
    console.log("create " + titletext[i-1]);
    //postdiv.on("click", middledivevent(webcontent));
    postdiv.onmouseup = function()
      {
    if (document.getElementById("divparent")) 
          {
              console.log("diplay " + webcontent);
              var changecontent = document.getElementById("divbody");
               if (typeof webcontent === 'string') {
                   changecontent.innerHTML = webcontent;
                   //bodydiv.innerHTML = "<iframe src='http://htmlpreview.github.io/?https://raw.githubusercontent.com/Joechen1210/video_overlay/master/index.html' frameborder='0' border='0' cellspacing='0' style='border-style: none' align='left'></iframe>";
                     } 
                else {
                    changecontent.appendChild(webcontent);
                     }
              ishidden = false;
              player.pause();
           }
    else if (ishidden) 
          {
              console.log("diplay " + webcontent);
              player.el().removeChild(parentdiv);
              ishidden = false;
              player.play();
           }
      else {   
              player.el().appendChild(parentdiv);
              ishidden = true;
              player.pause();
           }
    
      }
  }
  
  //function middledivevent(webcontent) 

   closebtn.onmouseup = function()
      {
          console.log("triggler Info close event");
           player.el().removeChild(parentdiv);
           ishidden = false;
           player.play();
       }
       
});
