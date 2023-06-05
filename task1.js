function getSimpleNumbers(qty){
	res = [];
	let count = 0;
	
	let t = 2;
	while (count < quantity){
		let flag = true;
		let i = 2;
		while (i < t && flag === true){
			if (t % i === 0) 
				flag = false;
			i++;
		}
		if (flag == true){
			count++;
			res.push(t);
		}
		t++;
	}
	return res;
}

let quantity = Number(process.argv[2]);
if (isNaN(quantity)==true)
	console.log("в параметре не число");
	
if (quantity <=0)
	console.log("количество должно быть больше нуля");
	
if (quantity > 0){
	console.log("поиск %d простых чисел", quantity);
	console.log("простые числа:");
	result = getSimpleNumbers(quantity);
	for (let i = 0; i < quantity;i++)
		console.log(result[i]);
}
