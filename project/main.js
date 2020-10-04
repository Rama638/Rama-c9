



$("#main-header").text("univers")

  $("#hide").click(function(){
    $("#earthP").hide();
  });
  $("#show").click(function(){
    $("#earthP").show();
  });

  $("#1hide").click(function(){
    $("#sunP").hide();
  });
  $("#1show").click(function(){
    $("#sunP").show();
  });

$("#2hide").click(function(){
    $("#starsP").hide();
  });
  $("#2show").click(function(){
    $("#starsP").show();
  });

$("#3hide").click(function(){
    $("#planetsP").hide();
  });
  $("#3show").click(function(){
    $("#planetsP").show();
  });

$("#4hide").click(function(){
    $("#blackP").hide();
  });
  $("#4show").click(function(){
    $("#blackP").show();
  });

var newline =$("<li></li>").text("A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun.")
$("#starsP").append(newline)

console.log("hi")