

function getRandomElem (arr) {
	const getRandomIndex = Math.floor (Math.random()*arr.length);
	return arr [getRandomIndex];
}


const photo = document.getElementById('random');
photo.onclick = function(){
	document.body.style.background = getRandomElem (['#5F7880' , '#7EA3A4', '#F7EBFF']);
}