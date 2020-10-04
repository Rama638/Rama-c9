
$("#main-header").text("universe")

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

$("#5hide").click(function(){
  $("black6").hide();
});

$("5show").click(function(){
  $("black6").show();
});

var newline =$("<li></li>").text("A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun.")
$("#starsP").append(newline)



var elements=["Earth","Sun","Moon","Black Hole","A Star"]
var elements2 = ["Moon","Sun","A Star","Earth","Black Hole"]

var button = $("<button></button>").text("Play").attr(id="button-play")
$("#play").append(button)

$("button-play").click(function(){
		var mim = Math.floor(Math.random()+Math.random());
	if (elements[mim] && elements2[mim]){
		alert ("You win , it was " + elements[mim] + "&&" +elements2[mim]+ ".")
	}else{
		alert( "keep trying dude" + elements[mim]+ "&&" + elements2[mim]+ ".")
	}		 
}); 
