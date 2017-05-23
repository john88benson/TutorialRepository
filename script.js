//alert('Hello World, from script.js')

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