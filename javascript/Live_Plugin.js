videojs.plugin('firstPlugin', function() {
  var player = this,
  ishidden = false,
  overlay = document.createElement('p'),
  imageurl = [
            "http://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/agenda_icon3.png", 
            "http://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/FacebookIcon1.png",
            "http://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/Twitter_Icon2.png",
            "https://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Image/survey2_burned.png"
            ],
  weburl = [
            "http://htmlpreview.github.io/?http://raw.githubusercontent.com/Joechen1210/Live_edit_example/master/Example_html/example_html.html",
            "http://htmlpreview.github.io/?http://raw.githubusercontent.com/Joechen1210/Seminar_live_example/master/Social_Network/facebook_html.html",
            "http://htmlpreview.github.io/?http://github.com/Joechen1210/Seminar_live_example/blob/master/Social_Network/twitter_html.html",
            "http://htmlpreview.github.io/?https://raw.githubusercontent.com/Joechen1210/Seminar_live_example/master/Social_Network/google_doc_question.html"
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
         bodydiv.innerHTML = "<iframe src='" + weburl[0] + "' width= '100%' height= '100%' marginheight= '0' marginwidth= '0' hspeace= '0' vspace= '0' frameborder= '0' scrolling= 'auto'></iframe>";
           
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

document.getElementById("right1").addEventListener("click", middledivevent1);
document.getElementById("right2").addEventListener("click", middledivevent2);
document.getElementById("right3").addEventListener("click", middledivevent3);
document.getElementById("right4").addEventListener("click", middledivevent4);

function middledivevent1()
{
   var webcontent = "<iframe src='" + weburl[0]  + "' width= '100%' height= '100%' marginheight= '0' marginwidth= '0' hspeace= '0' vspace= '0' frameborder= '0' scrolling= 'no'></iframe>";
       if (typeof webcontent === 'string') {
               bodydiv.innerHTML = webcontent;
              }
                else {
                    bodydiv.appendChild(webcontent);
                     }
        player.el().appendChild(parentdiv);
   /*if (document.getElementById("divparent")) 
          {
             console.log("Middle Div is visiable");
             player.pause();
           }
      else {   
              console.log("Middle Div is Hidden");
              
              player.pause();
           }*/
}

function middledivevent2()
{
  var webcontent = "<iframe src='" + weburl[1]  + "' width= '100%' height= '100%' marginheight= '0' marginwidth= '0' hspeace= '0' vspace= '0' frameborder= '0' scrolling= 'no'></iframe>";
        console.log("display " + bodydiv);
              if (typeof webcontent === 'string') {
               bodydiv.innerHTML = webcontent;
              }
                else {
                    bodydiv.appendChild(webcontent);
                     }
                     player.el().appendChild(parentdiv);
}

function middledivevent3()
{
   var webcontent = "<iframe src='" + weburl[2]  + "' width= '100%' height= '100%' marginheight= '0' marginwidth= '0' hspeace= '0' vspace= '0' frameborder= '0' scrolling= 'no'></iframe>";
        console.log("display " + bodydiv);
              if (typeof webcontent === 'string') {
               bodydiv.innerHTML = webcontent;
              }
                else {
                    bodydiv.appendChild(webcontent);
                     }
                     player.el().appendChild(parentdiv);
}

function middledivevent4()
{
    var webcontent = "<iframe src='" + weburl[3]  + "' width= '100%' height= '100%' marginheight= '0' marginwidth= '0' hspeace= '0' vspace= '0' frameborder= '0' scrolling= 'no'></iframe>";
        console.log("display " + bodydiv);
              if (typeof webcontent === 'string') {
               bodydiv.innerHTML = webcontent;
              }
                else {
                    bodydiv.appendChild(webcontent);
                     }
                     player.el().appendChild(parentdiv);
}
   
   closebtn.onmouseup = function()
      {
          console.log("triggler Info close event");
           player.el().removeChild(parentdiv);
       }
       
});
