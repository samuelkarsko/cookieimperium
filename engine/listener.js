$(document).ready(function() {
console.log("engine/listener.js - ready");


$("#buyoffice1").click(function(){
  if (money >= 250) {
      money -= 250;
      buildgui(1);
   }
});





//event listener
$("#makecookie").click(function() {
  cookies++;
});

$("#buyemployees").click(function(){
  if (fullcapacity < totalcapacity) {
      employees++;
	  fullcapacity++;
   }
});

$("#buymanager").click(function(){
  if ((fullcapacity + 5) <= totalcapacity) {
      manager ++;
	  fullcapacity += 5;
   }
});

$("#buyrobots").click(function() {
  if (money >= robotprice) {
    robots++;
    money -= robotprice;
    robotprice = (robotprice * 1.25).toFixed(2);
    multiply++;

  }});

//raise or lower cookieprice
$("#raiseprice").click(function() {
if (price <= 5) { 
price = parseFloat(price);
price += 0.01;
$("#price").html(price);
}});
//raise or lower cookieprice
$("#lowerprice").click(function() {
if (price > .01) {
price = parseFloat(price);
price -= 0.01;
$("#price").html(price);
}});



});