



$("#main-header").text("univers")

 ///1 
var earthText=$("<p></p>").text("Earth is the third planet from the Sun and the only astronomical object known to harbor life.</li><li>Earth Age : Earth formed over 4.5 billion years ago. </li><li> About 29% of Earth's surface is land consisting of continents and islands. The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which all together constitute the hydrosphere.")
  $("#hide").click(function(){
    $("#earthP").hide();
  });
  $("#show").click(function(){
  	$("#earthP").append(earthText)
    $("#earthP").show();
  });
  ////2
var sunText=$("<p></p>").text('The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light and infrared radiation. It is by far the most important source of energy for life on Earth.')
  $("#1hide").click(function(){
    $("#sunP").hide();
  });
  $("#1show").click(function(){
  	$("#sunP").append(sunText)
    $("#sunP").show();
  });
/////3
var starsText = $("<p></p>").text("Stars are born within the clouds of dust and scattered throughout most galaxies. A familiar example of such as a dust cloud is the Orion Nebula.")
var newline = $("<li></li>").text("A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity. The nearest star to Earth is the Sun.")

$("#2hide").click(function(){
    $("#starsP").hide();
  });
  $("#2show").click(function(){
  	$("#starsP").append(starsText)
  	$("#starsP").append(newline)
    $("#starsP").show();
  });
/////4
var planetText = $("<p></p>").text("the planets are presently influencing you in a positive way [ Mercury, Venus, Earth, Mars, Jupiter, Saturn,Uranus,Neptune,Pluto(dwarf planet)Planet Nine")

$("#3hide").click(function(){
    $("#planetsP").hide();
  });
  $("#3show").click(function(){
  	$("#planetsP").append(planetText)
    $("#planetsP").show();
  });
/////5
var blackText = $("<p></p>").text("A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. ")
$("#4hide").click(function(){
    $("#blackP").hide();
  });
  $("#4show").click(function(){
  	$("#blackP").append(blackText)
    $("#blackP").show();
  });
//////////////////////////////////////////////////////////=============

//please work 


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
		}else{

		alert( "keep trying dude" +" "+ $("#rollet").val()+ "&&" + elements[mim]+ ".")
		console.log( "keep trying dude" +" "+ $("#rollet").val() + "&&" + elements[mim]+ ".")}
    	
});

$("#button-play").click(function(){
$("#rollet").val("");
});
//////////////////////////////////////////////////////

//////////////////////////////////////////
var stars = [
{name : "SUN",
distance : 0.0000158},
{name : "SIRIUS (BINARY STAR)",
distance:	8.5828},
{name : "PROXIMA CENTAURI",	
distance :4.2421},
{name :"ROSS 154",
distance:	9.6813},
{name :"WOLF 359",	
 distance :7.7825}];


var nearstStar = $.grep(stars,function(star,i){
	return star.distance <= 5
})

var newpara= $("<p></p>").text("the nearest star to earth is" + "  "+ " [ sun"+" , " +"PROXIMA CENTAURI ]" )
console.log(nearstStar)

$("#stars").click(function(){
	$("#DivStars").append(newpara)
});



