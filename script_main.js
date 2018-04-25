//Main JavaScript File which connects each shopping Item with its data that's stored online
function get(q) //get the necessary value that is designated with the shopping item and connect it with the online database
								//precondition - value should be an integer from 1 - 8
								//postcondition - returns and prints the Aisle no, Section no, Shelf no and price of the seleced item
{
		var x, y;

		if(q === 1)
		{
		a = firebase.database().ref().child('dry_goods').child('pasta').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('pasta').child('price');
		c = firebase.database().ref().child('dry_goods').child('pasta').child('section');
		d = firebase.database().ref().child('dry_goods').child('pasta').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Pasta Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Pasta Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Pasta Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Pasta Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 2)
		{
		a = firebase.database().ref().child('dry_goods').child('rice').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('rice').child('price');
		c = firebase.database().ref().child('dry_goods').child('rice').child('section');
		d = firebase.database().ref().child('dry_goods').child('rice').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Rice Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Rice Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Rice Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Rice Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 3)
		{
		a = firebase.database().ref().child('dry_goods').child('bread').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('bread').child('price');
		c = firebase.database().ref().child('dry_goods').child('bread').child('section');
		d = firebase.database().ref().child('dry_goods').child('bread').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Bread Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Bread Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Bread Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Bread Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 4)
		{
		a = firebase.database().ref().child('dry_goods').child('cereal').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('cereal').child('price');
		c = firebase.database().ref().child('dry_goods').child('cereal').child('section');
		d = firebase.database().ref().child('dry_goods').child('cereal').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Cereal Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Cereal Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Cereal Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Cereal Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 5)
		{
		a = firebase.database().ref().child('dry_goods').child('chips').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('chips').child('price');
		c = firebase.database().ref().child('dry_goods').child('chips').child('section');
		d = firebase.database().ref().child('dry_goods').child('chips').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Chips Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Chips Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Chips Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Chips Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 6)
		{
		a = firebase.database().ref().child('dry_goods').child('crackers').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('crackers').child('price');
		c = firebase.database().ref().child('dry_goods').child('crackers').child('section');
		d = firebase.database().ref().child('dry_goods').child('crackers').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Crackers Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Crackers Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Crackers Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Crackers Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 7)
		{
		a = firebase.database().ref().child('dry_goods').child('flour').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('flour').child('price');
		c = firebase.database().ref().child('dry_goods').child('flour').child('section');
		d = firebase.database().ref().child('dry_goods').child('flour').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Flour Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Flour Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Flour Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Flour Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 8)
		{
		a = firebase.database().ref().child('dry_goods').child('salt').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('salt').child('price');
		c = firebase.database().ref().child('dry_goods').child('salt').child('section');
		d = firebase.database().ref().child('dry_goods').child('salt').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Salt Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Salt Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Salt Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Salt Aisle No: " + snap.val() + "\n" + e.innerText);
		}
		else if(q === 9)
		{
		a = firebase.database().ref().child('dry_goods').child('sugar').child('aisle');
		b = firebase.database().ref().child('dry_goods').child('sugar').child('price');
		c = firebase.database().ref().child('dry_goods').child('sugar').child('section');
		d = firebase.database().ref().child('dry_goods').child('sugar').child('shelf');

		e = document.getElementById("box");

		b.on('value', snap => e.innerText = "Sugar Price: $" + snap.val() + "\n" + e.innerText);
		d.on('value', snap => e.innerText = "Sugar Shelf No: " + snap.val() + "\n" + e.innerText);
		c.on('value', snap => e.innerText = "Sugar Section No: " + snap.val() + "\n" + e.innerText);
		a.on('value', snap => e.innerText = "Sugar Aisle No: " + snap.val() + "\n" + e.innerText);
		}
}
