const board = document.querySelector('#board');// получаем саму доску
const color = [ 'red', 'green' , 'yellow'];
const SQEAR_NUMBER = 500;// генерируем то колличество квадратиков какое нам надо
// цикл for говорит сздать элеменгт итерации с помощью ключевого слова let i равную 0
//

for( let i = 0; i< SQEAR_NUMBER; i++
	){
		const sqear = document.createElement('div')// СОЗДАЕМ div
      sqear.classList.add('sqear')//в диве создаем класс 
     sqear.addEventListener('mouseover' , () => 
     setColor(sqear) )
	  sqear.addEventListener('mouseleave' , () => 
     removeColor(sqear) )
		board.append(sqear) //с помощью метода аппенд создаем квадрат в html
}  

function setColor(element){
	const colors = getRandomColor();
	element.style.backgroundColor = colors;
}
function removeColor(element){
	element.style.backgroundColor= 'red'
}
function getRandomColor(){
	console.log(getRandomColor)
	const index = Math.floor( Math.random() * color.length)
	return[index]
	
}