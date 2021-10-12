function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64CAOwLoI4P":
        Script1();
        break;
      case "6IhCAk4zSd5":
        Script2();
        break;
      case "6d335GmwIfX":
        Script3();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

script.src = 'https://code.jquery.com/jquery-3.5.1.min.js';

head.appendChild(script);
}

function Script2()
{
  var player = GetPlayer();

WEB_APP_URL="https://script.google.com/macros/s/AKfycbwkjT3Ci7OEaH-InQ7M9Vn0QX178uMkDji5HEZxXA5sPQKiIY3u/exec";  

storyline =

{

 "UserName" : player.GetVar("UserName"),

  "Misto" : player.GetVar("Misto"),

  "PNFP" : player.GetVar("PNFP"),
   
  "Course_pass" : player.GetVar("Course_pass"),
 }

//Не вносить изменений

$.ajax(

 {

  url: WEB_APP_URL,

  type: "POST",

  data: storyline,

  success: function(data)

  {

   console.log(data);

  },

  error: function(err)

  {

   console.log('Error:', err);

  }

 });

 return false;
}

function Script3()
{
  window.location.href="https://www.google.com/";
}

