//alert('Hello World, from script.js')

$(document).ready(
    function () {
    //start up code
    alert("jquery works!");
	$('ul').fadeOut().fadeIn();
	$('#header').html("<h2>Jquery Change!</h2>");
	$('.head').append("<h1>Enter Name:</h1>");

}
);


function myNewFunction(){
	alert("How do you do?");
}

function mySecondNewFunction(name){
	var message
	if (name == 'Dave' ){
		message="I'm afraid I can't do that " + name;
	}
	else{
		message = name + "'s World, Party Time! Excellent!";
		document.getElementById("daBox").className = "box2";
	}
	alert (message)
}