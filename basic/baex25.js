
volumeCalc(5,15,25);

function volumeCalc(width,height,depth){
	
	var volume = width*height*depth;
	var bottom_plate = width*depth;
	var sidePlateOne = height*depth;
	var sidePlateTwo = height*width;
	document.getElementById("dieID").innerHTML 	= "The Box has a Volume of: "
												+ volume
												+ ", it's bottom plate has an area of "
												+ bottom_plate
												+ " and the side plates have an area of "
												+ sidePlateOne
												+ " or "
												+ sidePlateTwo
												+ ".";

}