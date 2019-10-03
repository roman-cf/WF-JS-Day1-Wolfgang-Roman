
ageCalc(1990);

function ageCalc(birt_year){
	
	var heuer = new Date();
	var yourage = (heuer.getFullYear())-birt_year;
	document.getElementById("dieID").innerHTML 	= "You ar either "
												+ (yourage - 1)
												+ " or "
												+ yourage
												+ ".";	
}