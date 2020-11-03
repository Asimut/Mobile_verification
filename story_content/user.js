function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jMQ01RFjx7":
        Script1();
        break;
      case "5f4Mm9M1Zdc":
        Script2();
        break;
      case "62GEff17YIf":
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

  "Region" : player.GetVar("Region"),

  "Filiya" : player.GetVar("Filiya")
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
  var player = GetPlayer();

WEB_APP_URL="https://script.google.com/macros/s/AKfycbzdZzL-kYbQ3Lul9XVlM7TPaECWg_SPdtZg2bX8Vs7i4TBTLAoJ/exec";  

storyline =

{

 "UserName" : player.GetVar("UserName"),

  "Region" : player.GetVar("Region"),

  "Filiya" : player.GetVar("Filaya")
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

