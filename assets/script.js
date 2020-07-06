

var day = document.querySelector(".container");
var currentDay = document.querySelector("#currentDay");
var today = moment();
$("#currentDay").text("Today is " + today.format("MM-DD-YYYY"));
var hour8 = document.querySelector(".eight");
var hour9 = document.querySelector(".nine");
var hour10 = document.querySelector(".ten");
var hour11 = document.querySelector(".eleven");
var hour12 = document.querySelector(".twelve");
var hour1 = document.querySelector(".one");
var hour2 = document.querySelector(".two");
var hour3 = document.querySelector(".three");
var hour4 = document.querySelector(".four");
var hour5 = document.querySelector(".five");





if ( today.isAfter(moment("08:00", "hh:mm"))){
   document.querySelector(".eight").style.background = "red";
} else {
   document.querySelector(".eight").style.background = "green";
};

if ( today.isAfter(moment("09:00", "hh:mm"))){
   document.querySelector(".nine").style.background = "red";
} else {
   document.querySelector(".nine").style.background = "green";
};

if ( today.isAfter(moment("10:00", "hh:mm"))){
   document.querySelector(".ten").style.background = "red";
} else {
   document.querySelector(".ten").style.background = "green";
};

if ( today.isAfter(moment("11:00", "hh:mm"))){
   document.querySelector(".eleven").style.background = "red";
} else {
   document.querySelector(".eleven").style.background = "green";
};

if ( today.isAfter(moment("12:00", "hh:mm"))){
   document.querySelector(".twelve").style.background = "red";
} else {
   document.querySelector(".twelve").style.background = "green";
};

if ( today.isAfter(moment("13:00", "hh:mm"))){
   document.querySelector(".one").style.background = "red";
} else {
   document.querySelector(".one").style.background = "green";
};

if ( today.isAfter(moment("14:00", "hh:mm"))){
   document.querySelector(".two").style.background = "red";
} else {
   document.querySelector(".two").style.background = "green";
};

if ( today.isAfter(moment("15:00", "hh:mm"))){
   document.querySelector(".three").style.background = "red";
} else {
   document.querySelector(".three").style.background = "green";
};

if ( today.isAfter(moment("16:00", "hh:mm"))){
   document.querySelector(".four").style.background = "red";
} else {
   document.querySelector(".four").style.background = "green";
};

if ( today.isAfter(moment("17:00", "hh:mm"))){
   document.querySelector(".five").style.background = "red";
} else {
   document.querySelector(".five").style.background = "green";
};





$(hour8).on("click", function(){
   var plan8 = prompt("What would you like to schedule?");
   $("#8").text(plan8);
   localStorage.setItem("8plans", plan8);
});


$(hour9).on("click", function(){
    var plan9 = prompt("What would you like to schedule?");
    $("#9").text(plan9);
    localStorage.setItem("9plans", plan9);
 });

 $(hour10).on("click", function(){
    var plan10 = prompt("What would you like to schedule?");
    $("#10").text(plan10);
    localStorage.setItem("10plans", plan10);
 });
 
 $(hour11).on("click", function(){
     var plan11 = prompt("What would you like to schedule?");
     $("#11").text(plan11);
     localStorage.setItem("11plans", plan11);
  });

  $(hour12).on("click", function(){
    var plan12 = prompt("What would you like to schedule?");
    $("#12").text(plan12);
    localStorage.setItem("12plans", plan12);
 });
 
 $(hour1).on("click", function(){
     var plan1 = prompt("What would you like to schedule?");
     $("#1").text(plan1);
     localStorage.setItem("1plans", plan1);
  });

  $(hour2).on("click", function(){
    var plan2 = prompt("What would you like to schedule?");
    $("#2").text(plan2);
    localStorage.setItem("2plans", plan2);
 });
 
 $(hour3).on("click", function(){
     var plan3 = prompt("What would you like to schedule?");
     $("#3").text(plan3);
     localStorage.setItem("3plans", plan3);
  });

  $(hour4).on("click", function(){
    var plan4 = prompt("What would you like to schedule?");
    $("#4").text(plan4);
    localStorage.setItem("4plans", plan4);
 });

 
 $(hour5).on("click", function(){ //click event 
     var plan5 = prompt("What would you like to schedule?");
     $("#5").text(plan5);
     localStorage.setItem("5plans", plan5);
  }); 

  

  