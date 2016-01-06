videojs.plugin('firstPlugin', function() {
  var player = this,
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
    postdiv.id = 'right' + i;
    console.log("create div id: " + postdiv.id);
    player.el().appendChild(postdiv);
  }

document.getElementById('right1').addEventListener("click", middledivevent1());
/*document.getElementById("right2").addEventListener("click", middledivevent2());
document.getElementById("right3").addEventListener("click", middledivevent3());
document.getElementById("right4").addEventListener("click", middledivevent4());*/

function middledivevent1()
{
   var webcontent = weburl[0],
       changecontent = document.getElementById("divbody");
       console.log("display " + webcontent);
               if (typeof webcontent === 'string') {
                   changecontent.innerHTML = webcontent;
               }
                else {
                    changecontent.appendChild(webcontent);
                     }
   if (document.getElementById("divparent")) 
          {
             console.log("Middle Div is visiable");
              player.pause();
           }
      else {   
              console.log("Middle Div is Hidden");
              player.el().appendChild(parentdiv);
              player.pause();
           }
}

/*function middledivevent2()
{
  var webcontent = weburl[1],
       changecontent = document.getElementById("divbody");
       console.log("display " + webcontent);
               if (typeof webcontent === 'string') {
                   changecontent.innerHTML = webcontent;
               }
                else {
                    changecontent.appendChild(webcontent);
                     }
   if (document.getElementById("divparent")) 
          {
             console.log("Middle Div is visiable");
              player.pause();
           }
      else {   
              console.log("Middle Div is Hidden");
              player.el().appendChild(parentdiv);
              player.pause();
           }
}

function middledivevent3()
{
   var webcontent = weburl[2],
       changecontent = document.getElementById("divbody");
       console.log("display " + webcontent);
               if (typeof webcontent === 'string') {
                   changecontent.innerHTML = webcontent;
               }
                else {
                    changecontent.appendChild(webcontent);
                     }
   if (document.getElementById("divparent")) 
          {
             console.log("Middle Div is visiable");
              player.pause();
           }
      else {   
              console.log("Middle Div is Hidden");
              player.el().appendChild(parentdiv);
              player.pause();
           }
}

function middledivevent4()
{
   var webcontent = weburl[3],
       changecontent = document.getElementById("divbody");
       console.log("display " + webcontent);
               if (typeof webcontent === 'string') {
                   changecontent.innerHTML = webcontent;
               }
                else {
                    changecontent.appendChild(webcontent);
                     }
   if (document.getElementById("divparent")) 
          {
             console.log("Middle Div is visiable");
              player.pause();
           }
      else {   
              console.log("Middle Div is Hidden");
              player.el().appendChild(parentdiv);
              player.pause();
           }
}*/
   
   closebtn.onmouseup = function()
      {
          console.log("triggler Info close event");
           player.el().removeChild(parentdiv);
           ishidden = false;
           player.play();
       }
       
});
