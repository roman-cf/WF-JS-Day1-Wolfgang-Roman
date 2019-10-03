rgbArr = [];
for(i=0; i<3; i++){
	var rgb = (Math.floor(Math.random()*256));
	rgbArr.push(rgb);	 
}
document.body.style.backgroundColor = "rgb("+rgbArr[0]+","+rgbArr[1]+","+rgbArr[2]+")";
