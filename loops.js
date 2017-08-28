function forLoop(array){
	for(var i = 0; i < 25; i++){
		if(i === 1){
			var str = `I am ${i} strange loop.`;
		}
		else{
			var str = `I am ${i} strange loops.`;
		}
	array.push(str);
	}
	return array;
}

function whileLoop(n){
	while(n > 0){
		console.log(--n);
	}
	return 'done';
}

//copied from README.md
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array){
	do{
		array.pop();
		maybeTrue();
	} while(maybeTrue() || array.length == 0)

	return array;
}