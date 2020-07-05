// create calendar display elements the current day && elements for each business hour of the day (8-5)

// allow a user to inject their plan for that hour block and save it inside local storage

// change text and color coordinate for the past present and future

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






//upon loading display the calendar for the current day for business hours only (8-5)
//  var test = $("<div>");
//  $(test).text("I did it!!");
//  $(day).append(test);

$(hour8).on("click", function(){
   var plan8 = prompt("What would you like to schedule?");
   $("#8").text(plan8);
});

$(hour9).on("click", function(){
    var plan9 = prompt("What would you like to schedule?");
    $("#9").text(plan9);
 });

 $(hour10).on("click", function(){
    var plan10 = prompt("What would you like to schedule?");
    $("#10").text(plan10);
 });
 
 $(hour11).on("click", function(){
     var plan11 = prompt("What would you like to schedule?");
     $("#11").text(plan11);
  });

  $(hour12).on("click", function(){
    var plan12 = prompt("What would you like to schedule?");
    $("#12").text(plan12);
 });
 
 $(hour1).on("click", function(){
     var plan1 = prompt("What would you like to schedule?");
     $("#1").text(plan1);
  });

  $(hour2).on("click", function(){
    var plan2 = prompt("What would you like to schedule?");
    $("#2").text(plan2);
 });
 
 $(hour3).on("click", function(){
     var plan3 = prompt("What would you like to schedule?");
     $("#3").text(plan3);
  });

  $(hour4).on("click", function(){
    var plan4 = prompt("What would you like to schedule?");
    $("#4").text(plan4);
 });
 
 $(hour5).on("click", function(){
     var plan5 = prompt("What would you like to schedule?");
     $("#5").text(plan5);
  });
 
 


 
 











 


