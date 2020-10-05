
$("#main-header").text("univers")

 ///1

  $("#hide").click(function(){
    $("#earthP").hide();
  });
  $("#show").click(function(){
    $("#earthP").show();
  });
  ////2

  $("#1hide").click(function(){
    $("#sunP").hide();
  });
  $("#1show").click(function(){
    $("#sunP").show();
  });
/////3
$("#2hide").click(function(){
    $("#starsP").hide();
  });
  $("#2show").click(function(){
    $("#starsP").show();
  });
/////4
$("#3hide").click(function(){
    $("#planetsP").hide();
  });
  $("#3show").click(function(){
    $("#planetsP").show();
  });
/////5
$("#4hide").click(function(){
    $("#blackP").hide();
  });
  $("#4show").click(function(){
    $("#blackP").show();
  });
//////////////////////////////////////////////////////////=============

//please work

var newline = $("<li></li>").text("A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun.")
$("#starsP").append(newline)


//////////////////////////////////////////////////////////////////////////


var button = $("<button id = button-play></button>").text("Play")
$("#play").append(button)


var elements =   ["Earth","Sun","Moon","Black Hole","A Star"]
//var elements2 =  ["Moon","sun","A star","Earth","Black Hole"]

$("#button-play").click(function(){
var mim = Math.floor(Math.random()+Math.random());
if ($("#rollet").val()=== elements[mim]){
alert ("You win , it was " +$("#rollet").val()+ "&&" +elements[mim]+ ".")
console.log ("You win , it was " + $("#rollet").val() + "&&" +elements[mim]+ ".")
$("#rollet").on('click', function(){
         $("#rollet").val("");
});


}else{

alert( "keep trying dude" + $("#rollet").val()+ "&&" + elements[mim]+ ".")
console.log( "keep trying dude" + $("#rollet").val() + "&&" + elements[mim]+ ".")}
   
});

//////////////////////////////////////////////////////



