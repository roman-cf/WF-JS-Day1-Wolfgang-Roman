var anonymFunc = (function(){
	var mystring = "i am a web developer"
	return mystring.charAt(0).toUpperCase() + mystring.slice(1);
}());

document.getElementById("dieID").innerHTML = anonymFunc;