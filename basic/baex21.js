	var number_children = 3;
	var partners_name = "Susi";
	var location_home  = "Vienna";
	var job_title = "Web Developer";

crystalGazer(number_children, partners_name, location_home, job_title);


function crystalGazer(child,partner,geo,job){


	document.getElementById("dieID").innerHTML 	= "You will be "
												+ job 
												+ " in "
												+ geo 
												+ " and married to "
												+ partner
												+ " with "
												+ child
												+" children."	
}