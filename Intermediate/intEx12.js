var fruits = ["apple","banana","kiwi"];

fruitSort(fruits);

function fruitSort(fruits) {

	fruits.push("orange")
}


pets = ["monkey","horse","dog"];
petSort(pets);

function petSort(pets) {
	console.log(pets);		//1
	pets.push("cat");
	console.log(pets); 		//2
	petsAdd = pets;
	petsAdd.sort();
	console.log(pets); 		//3
	console.log(petsAdd); 	//4
	
}
ausgabe= fruits + "<br>" + pets + "<br>" + petsAdd;

document.getElementById("dieID").innerHTML = ausgabe;