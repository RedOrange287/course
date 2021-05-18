function raschitat() {
	weight  = document.getElementById('weight').value;
	if (weight == "") {
		alert("Вы не указали вес");
	} else {
		result = parseFloat(weight)* 0.07;
		result = result.toFixed(3);
		document.getElementById('result').innerHTML = "Количество пищи: "+ result +" г";
		protein_food = result * 0.28;
		protein_food = protein_food.toFixed(3);
		document.getElementById('protein_food').innerHTML = "Белковая пища: "+ protein_food +" г";
		dairy_food = result * 0.27;
		dairy_food = dairy_food.toFixed(3);
		document.getElementById('dairy_food').innerHTML = "Молочная пища: "+ dairy_food +" г";
		cereal = result * 0.27;
		cereal = cereal.toFixed(3);
		document.getElementById('cereal').innerHTML = "Крупа: "+ cereal +" г";
		vegetables = result * 0.18;
		vegetables = vegetables.toFixed(3);
		document.getElementById('vegetables').innerHTML = "Овощи: "+ vegetables +" г";
	}
}