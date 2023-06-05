var goodList = [];
var cartList = [];

function addToCart(cartlist, goodlist, id, amount){
	for (let i = 0; i < goodlist.length; i++){
		if (goodlist[i]['id'] == Number(id))
			cartlist.push({
				'good':goodlist[i], 
				'amount': amount,
				});
	}
}

function printCart(cart){
	if (cart.length==0)
		return false;
	for (let i = 0; i < cart.length; i++){
		console.log('%s',cart[i].good);
		console.log('количество: %d',cart[i].amount);
	}
	return true;
}

function printGoods(good){
	for (let i = 0; i < good.length; i++)
		console.log('%s',good[i]);
}

function removeFromCart(cart, id){
	for (let i = 0; i < cart.length; i++){
		if (cart[i]['good']['id'] == Number(id))
			cart.splice(i,1);
	}
}

function clearCart(cart){
	cart.splice(0,cart.length);
}

function calculate(cart) {
	console.log('=======');
	console.log(cart.length);
	let tAmount = 0;
	let tSum = 0;
	for (let i = 0; i < cart.length; i++){
		console.log(cart[i]['good']);
		tSum = tSum + cart[i]['good']['price'] * cart[i]['amount'];
		tAmount = tAmount + cart[i]['amount'];
	}
	return {
		'totalAmount': tAmount,
		'totalSum': tSum,
	}
}

goodList[0] = {
	id: 1,
	name: 'Брюки',
	description: '',
	sizes: ['S','M','XL'],
	price: 100,
	available: true,
}
goodList[1] = {
	id: 2,
	name: 'Футболка',
	description: '',
	sizes: ['XL','XXL','M'],
	price: 50,
	available: true,
}
goodList[2] = {
	id: 3,
	name: 'Шорты',
	description: '',
	sizes: ['S','M','XL'],
	price: 40,
	available: true,
}
goodList[3] = {
	id: 4,
	name: 'Кроссовки',
	description: '',
	sizes: ['39','40','42'],
	price: 150,
	available: true,
}
goodList[4] = {
	id: 5,
	name: 'Ботинки',
	description: '',
	sizes: ['42','43','44'],
	price: 300,
	available: true,
}

cartList[0] = {
	good: goodList[0],
	amount: 5,
}
cartList[1] = {
	good: goodList[1],
	amount: 4,
}

addToCart(cartList, goodList, 3, 1);
addToCart(cartList, goodList, 5, 1);
printCart(cartList);
removeFromCart(cartList, 1);
removeFromCart(cartList, 5);
//printCart(cartList);
//clearCart(cartList);
//console.log('-----2-------------------------');
//printCart(cartList);

let result = calculate(cartList);
console.log('Общее количество товаров в корзине: %d', result['totalAmount']);
console.log('Общая стоимость товаров в корзине: %d', result['totalSum']);
