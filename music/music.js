
const arr = [
	 {
		name: 'At War with Walls & Mazes',
		link: 'https://open.spotify.com/album/2HG007OhjESoljS0ivVH4G?si=hKLfrGFTRDeMdaxJgXx3oA'
	}, {
		name: 'We Are Rising',
		link:'https://open.spotify.com/album/3pZPddcGG3XOoScg0OVidY?si=GsjDdqDASpi_kSxBmUdPhA'
	}, {
		name: 'Lanterns',
		link: 'https://open.spotify.com/album/0DXzTaMzhm1ojc6b5H3PaJ?si=1drQ3HP-TEC7QfI8Awqd0A'
	}, {
		name: 'Tomorrows I',
		link: 'https://open.spotify.com/album/49leS9Adpf8wPfT6fnu1Ix?si=iEAVPiOMQGeyvT1khuAetw'
	}
]

function getRandomElem (arr) {
	const getRandomIndex = Math.floor (Math.random()*arr.length);
	return arr [getRandomIndex];
}

const elem = document.getElementById('target')
const link = document.getElementById('link')

elem.onclick = function(){
	const obj = getRandomElem(arr);
	elem.innerText = obj.name;
	link.setAttribute('href', obj.link);
}

