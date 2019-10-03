var input ="320";

timeConvert(input);

function timeConvert(input){

	minutes = Number(input);
	result1 = Math.floor(minutes/60);
	result2 = minutes%60 ;

};

document.getElementById("dieID").innerHTML 	= minutes 
											+ " minutes = " 
											+ result1 
											+ " hour(s) and " 
											+ result2 
											+ " minute(s).";