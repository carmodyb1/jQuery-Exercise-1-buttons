$(document).on('ready', function() {


//  *** Park I

// *** prints "wow, this works" to console log when button clicked 
// $("button").on("click", function(){
// console.log("Wow, this works!");
//   });


//  ***  Add text to a body of the document
// $("button").on("click", function(){
// $("p").append("This is great!");
//   });


// *** Adding an element and text with jQuery 
$(".my-button").on("click", function(){
  $("body").append("<h1>Testing in my h1 element</h1>");
  });


// *** Adding list to the body element
$(".my-next-button").on("click", function(){
  $("body").append("<ul><li>Chest</li><li>Back</li><li>Legs</li></ul>");
  });


//  *** Part II

//  *** Mouseover function
$("p").on("mouseover", function(){
  $("p").css("color", "red");
  });

$("p").on("mouseleave",function() {
  $(this).css("color", "black");
});

//  *** shortcut
// $("p").mouseover(function(){
//   $(this).css("color", "red");
//   });


//   *** Add ! to end of the heading

$("h1").append("!");


//  *** Confirm when a link is clicked

// $("confirm-box").confirm();



// $(".confirm-box").on("click",function(e) {
//   var response = confirm("Do you really want to go here?");
//   console.log(response);
//   if (response === false) {
//   	alert("Staying on the website");
//   	e.preventDefault();
// }

// });


$(".confirm-box").on("click",function(e) {
  var response = confirm("Do you really want to go here?");
  console.log(response);
  if (response === false) {
  	alert("Staying on the website");
  	e.preventDefault();
  	$(".confirm-box").remove();
}
});


// $(".confirm-box").on("click",function(e) {
//   var response = confirm("Do you really want to go here?");
//   console.log(response);
//   if (!response) {
//   	alert("Staying on the website");
//   	e.preventDefault();
// 	$(".confirm-box").remove();
// }

// });


// Part III


// Adding one giant button with popup that stays in center of the webpage by using position fixed
// $(".huge-button").on("click", function() {
//   var divbox = $("<div><h1 class=' popuptext'>Text for popup here</h1></div>");
//   $(".huge-button").after(divbox);
// });


$(".huge-button").on("click", function() {
  var divbox = $("<div class='popup'><h1 class='popuptext'>Text for popup here</h1></div>");
  $(".huge-button").after(divbox); divbox.append("<button class='close'>Close</button>")
});


$(document).on("click", ".close", function(){
  $(".popup").remove();
})


// closing of first code line for jQuery
});

