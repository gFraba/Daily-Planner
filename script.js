// Moment.js
let currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
let currentHour = moment().format('h:mm:ss a');
let hour = moment().hours();
let userInput;
let hourSpan;

// Date and Hour
let interval = setInterval(function() {
  let momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

// Text value
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");

// Retrive local
function initPage() {

  console.log("Current Hour " + hour);
  let nine = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(nine);

  let ten = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(ten);
  
  let eleven = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(eleven);
  
  let twelve = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(twelve);
  
  let one = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(one);
  
  let two = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(two);
  
  let three = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(three);
 
  let four = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(four);
  
  let five = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(five);
  
} 

// Time styling
function timeColor () {
      
  $(".form-control").each(function () {
      let timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  timeColor()

  // Save user input
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })
  // Clear local storage 
  $("#newDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});