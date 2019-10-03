var grade1 = 3;
var grade2 = "5";
var grade3 = 5;

averager(grade1,grade2,grade3);

function averager(g1,g2,g3) {

	sum = Number(g1)+Number(g2)+Number(g3);
	average= sum/3;

}

document.getElementById("dieID").innerHTML = "Sum: "+ sum + "<br> Average: " + average.toFixed(2);