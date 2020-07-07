var today = moment();
$("#currentDay").text("Today is " + today.format("MM-DD-YYYY"));
var hours = [(today.hour(8).format("hh:00") + " am"), (today.hour(9).format("hh:00")+ " am"), (today.hour(10).format("hh:00") + " am"), (today.hour(11).format("hh:00")+ " am"),(today.hour(12).format("hh:00") + " pm"), (today.hour(13).format("hh:00")+ " pm"), (today.hour(14).format("hh:00") + " pm"), (today.hour(15).format("hh:00")+ " pm"), (today.hour(16).format("hh:00") + " pm"), (today.hour(17).format("hh:00")+ " pm"), (today.hour(18).format("hh:00") + " pm")];
var userPlans=[{}];
var timeReference =[];
var buttonNumbers = [];
// var input = $("<input>");

//retrieves any values accordding to their keys from local storage upon loading
$(document).ready(function(){
    for(var j=0; j<10; j++){
        if((localStorage.getItem("plan"+[j])!= null)){
    $(".planDisplay"+[j]).text(localStorage.getItem("plan"+[j]));
}
    }
});





function createRow(businessHours){
    for(var i=0; i<10; i++){
        
        
        $(".container").append(`<div class=" row"> 
        <button class="btn button btn-outline-dark timeSlot" id="button${[i]}">${hours[i]}</button>
         <div class="col-md-7 planDisplay${[i]} outline-dark">
        </div>
        </div>`);
        //create if else to style the buttons red or green according to time
        var numbers = {"button": i};
        buttonNumbers.push(numbers.button);
        
    };
    console.log(buttonNumbers);
   
}
createRow(8);

//switch statement for figuring out which button to create this on
//empty() timeslots
$(`#button${0}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay0").text(given);
    console.log(userPlans);
    localStorage.setItem("plan0", given)
    
});
$(`#button${1}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay1").text(given);
    console.log(userPlans[2]);
    localStorage.setItem("plan1", given)
    
});
$(`#button${2}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay2").text(given);
    localStorage.setItem("plan2", given)
    
});
$(`#button${3}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay3").text(given);
    localStorage.setItem("plan3", given)
    
});

$(`#button${4}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay4").text(given);
    localStorage.setItem("plan4", given)
    
});

$(`#button${5}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay5").text(given);
    localStorage.setItem("plan5", given)
});

$(`#button${6}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay6").text(given);
    localStorage.setItem("plan6", given)
});

$(`#button${7}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay7").text(given);
    localStorage.setItem("plan7", given)
    
});
$(`#button${8}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay8").text(given);
    localStorage.setItem("plan8", given)
    
});

$(`#button${9}`).on("click", function(){
    var given = prompt("whats gucci");
    userPlans.push(given); // look into storing as object
    //console.log(userPlans);
    $(".planDisplay9").text(given);
    localStorage.setItem("plan9", given)
    
});


if ( today.isAfter(moment("08:00", "hh:mm"))){
    document.querySelector(".planDisplay0").style.background = "red";
 } else {
    document.querySelector(".planDisplay0").style.background = "green";
 };
 
 if ( today.isAfter(moment("09:00", "hh:mm"))){
    document.querySelector(".planDisplay1").style.background = "red";
 } else {
    document.querySelector(".planDisplay1").style.background = "green";
 };
 
 if ( today.isAfter(moment("10:00", "hh:mm"))){
    document.querySelector(".planDisplay2").style.background = "red";
 } else {
    document.querySelector(".planDisplay2").style.background = "green";
 };
 
 if ( today.isAfter(moment("11:00", "hh:mm"))){
    document.querySelector(".planDisplay3").style.background = "red";
 } else {
    document.querySelector(".planDisplay3").style.background = "green";
 };
 
 if ( today.isAfter(moment("12:00", "hh:mm"))){
    document.querySelector(".planDisplay4").style.background = "red";
 } else {
    document.querySelector(".planDisplay4").style.background = "green";
 };
 
 if ( today.isAfter(moment("13:00", "hh:mm"))){
    document.querySelector(".planDisplay5").style.background = "red";
 } else {
    document.querySelector(".planDisplay5").style.background = "green";
 };
 
 if ( today.isAfter(moment("14:00", "hh:mm"))){
    document.querySelector(".planDisplay6").style.background = "red";
 } else {
    document.querySelector(".planDisplay6").style.background = "green";
 };
 
 if ( today.isAfter(moment("15:00", "hh:mm"))){
    document.querySelector(".planDisplay7").style.background = "red";
 } else {
    document.querySelector(".planDisplay7").style.background = "green";
 };
 
 if ( today.isAfter(moment("16:00", "hh:mm"))){
    document.querySelector(".planDisplay8").style.background = "red";
 } else {
    document.querySelector(".planDisplay8").style.background = "green";
 };
 
 if ( today.isAfter(moment("17:00", "hh:mm"))){
    document.querySelector(".planDisplay9").style.background = "red";
 } else {
    document.querySelector(".planDisplay9").style.background = "green";
 };
 

  

  