
//let today = new Date();   
//document.write(today.toLocaleDateString() + '<br>');
//document.write(today.toLocaleTimeString() + '<br>');
//document.write(today.toLocaleString() + '<br><br>');

//document.write(today.toLocaleDateString('en-US')); 

function showClock(){
    var currentDate = new Date();
    var divClock = document.getElementById('divClock');
    var msg = "";
    if(currentDate.getHours()>12){      
      msg += "오후 ";
      msg += currentDate.getHours()-12+":";
   }
   else {
     msg += "오전 ";
     msg += currentDate.getHours()+":";
   }
   if(currentDate.getMinutes()<10){      
    msg += "0"+currentDate.getMinutes();
   } else {
    msg += currentDate.getMinutes();
   }
    

    divClock.innerText = msg;

    setTimeout(showClock,1000);  

  }