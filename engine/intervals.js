$(document).ready(function() {
console.log("engine/intervals.js - ready");




setInterval(function(){ $("#popularity").html(popularity); }, 500);
setInterval(function(){ $("#employees").html(employees); }, 50);
setInterval(function(){ $("#manager").html(manager); }, 50);
setInterval(function(){ $("#fullcapacity").html(fullcapacity); }, 50);
setInterval(function(){ $("#totalcapacity").html(totalcapacity); }, 50);	
setInterval(function(){ $("#speed").html(newcookies); }, 500);
setInterval(function(){ $("#totalcookies").html(cookies); }, 5);
setInterval(function(){ $("#robots").html(robots); }, 50);
setInterval(function(){ $("#robotprice").html(robotprice); }, 50);
setInterval(function(){ $("#money").html(money.toFixed(2)); }, 50);
setInterval(function(){ $("#price").html(price.toFixed(2)); }, 50);
setInterval(function(){ 
  unsold = cookies - sold;
  $("#unsold").html(unsold); }, 50);






});
