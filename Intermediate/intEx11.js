var cars = ["Tesla","Audi","Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

carsort(cars);

function carsort(cars) {

	cars.sort()
	
document.getElementById("dieID").innerHTML = cars;
}