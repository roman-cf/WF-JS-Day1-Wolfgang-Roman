
radianConverter(90);

function radianConverter(degrees){
	
	var radian = degrees*(Math.PI/180)

	document.getElementById("dieID").innerHTML 	= "The result is: "
												+ radian.toFixed(5)
												+ ".";	
}