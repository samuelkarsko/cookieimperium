var cookies = 0;
var oldcookies = 0.00;
var cookiespeed = 50;
var newcookies = 0.00;
var popularity = 100.00;
var robots = 0;
var robotprice = 10;
var money = parseFloat(1000.00);
var price = parseFloat(0.50);
var sold = 0;
var oldsold = 0;
var unsold = 0;
var newsold = 0;
var originalspeed = 300;
var sellspeed = 0
var quanterone = false;
var quantertwo = false;
var givensellspeed = 300;
var b = 0;
var tester = 0;
var pop = 1;
var multiply = 0;
var buyspeed = 300;
var soldpersec = 0;
var totalcapacity = 5;
var fullcapacity = 0;
var employees = 0;
var manager = 0;
//roundings
//real functions

//this script uses only elementary functions (they have to be in the main file)


$(document).ready(function() {
console.log("script.js - ready");




//average Cookies per second
setInterval(function(){
newcookies = cookies - oldcookies;
oldcookies = cookies;
$("#typecookies").html(newcookies);
 }, 1000);

//average Solds per second
setInterval(function(){
newsold = sold - oldsold;
oldsold = sold;
$("#soldpersec").html(newsold);
 }, 1000);


timeoutsell();

function timeoutsell() {
    setTimeout(function () {
      if (unsold > 0) {
      if (quanterone) {
          sold += 11;
          money += (price * 11);
      }else if (quantertwo ) {
          sold += 111;
          money += (price * 111);
      }{
          sold++;
          money += price;
        }
          

             //sellspeed (under 0.5$)
          if (price > 0.5) {
            tester = 0;
            b = (price - 0.5) * 100;
            for (i = 0; i <= b; i++) {
              if (tester == 0) {
                givensellspeed = originalspeed * 1.02;
                  tester = 1;
            }else{
              givensellspeed = givensellspeed * 1.02;
              }
            }
          }


          
          //sellspeed (under 0.5$)

          if (price < 0.5) {
            tester = 0;
            b = (0.5 - price) * 100;
            for (i = 0; i <= b; i++) {
              if (tester == 0) {
                givensellspeed = originalspeed / 1.1;
                  tester = 1;
            }else{
              givensellspeed = givensellspeed / 1.1;
              }
            }
          }

  



      var min = 1;
      var max = 10;
      var x = Math.floor(Math.random() * (max - min)) + min;
      var y = parseFloat((givensellspeed * 5) / x);
      sellspeed = y;

      //Popularity
      pop = popularity / 100;
      sellspeed = sellspeed / pop;  
    } 
        
        timeoutsell();
    }, sellspeed);
}


//Auto-Cookie-Process
setInterval(function() {
  if (multiply > 0) {
  z = false;
  for (var i = 0; i < multiply; i++) {
    if (z == false) {
      z = true;
      cookiespeed = 1000 / 1.5;
      }else{
      cookiespeed /= 1.5;
      } 
    }
  }
}, 50);


timeoutbuy();

function timeoutbuy() {
    setTimeout(function () {
        if (multiply > 0) {
        cookies++;
        }
        timeoutbuy();
    }, cookiespeed);
}







/*
// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 

    modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 */


//the final end
});