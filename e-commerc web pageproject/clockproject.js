var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImage = document.getElementById('lolcatImage');
  
  if (time == partytime)
  {
    image = 
    messageText = "Let's party!";
  }
  else if (time == wakeuptime)
  {
    
    messageText = "Wake up!";
  }
  else if (time == lunchtime)
  {
   
    messageText = "Let's have some lunch!";
  }
  else if (time == naptime)
  {
   
    messageText = "Sleep tight!";
    
  }
  else if (time < noon)
  {
   
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    
    messageText = "Good evening!";
  }
  else
  {
    
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);




function order(){
   var order=confirm(" confirm order ");
  }

  function oo1(p){
    p.style.hight="100px"
    p.style.width="100px"
  }
