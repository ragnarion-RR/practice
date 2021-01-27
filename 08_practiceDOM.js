//DOM document object model
// window.alert('1')  //обращаемся к глобальной функции alert, которая доступна объекту window 
// alert('1')   //т.к. она глобальная, то window можно убрать
// prompt('привет', 'Андрей') //вызывает поле с привет и окнов ввода с первоначальным значением Андрей

// let age = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!

// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK
// все методы выше - модальные (все останавливается, пока они не закрыты)


//мы хотим что-то поменять
//обращаемся к глобальному объекту document
//используем метод getElementById (поиск по ID, который задан в html)
// document.getElementById('Hello')
//данный метод вернет новый узел, т.е. ссылку на тот элемент, который мы нашли
//назовем его heading
// const heading = document.getElementById('Hello')
// console.log(heading) //посмотрим, что это
// console.dir(heading)  //посмотрим его свойства
// console.dir(heading.id) //можем сразу свойства id получить (посмотреть)
// console.dir(heading.textContent) //можем пулучить текстовое содержимое // Practice!

//хорошо тем, что мы можем сразу обратиться к этому содержимому и поменять его
// heading.textContent = 'Changed from JS' // присваиваем новое
// heading.style.color = 'red' // или поменять цвет через свойства style
// heading.style.textAlign = 'center' //или по центру разместить
// heading.style.backgroundColor = 'black' //сменить цвет задний
// heading.style.padding = '2rem'


//можно это все преобразовать с замедлением 1,5s
// document.getElementById('Hello')
// const heading = document.getElementById('Hello')
// setTimeout(()=> {
//   heading.textContent = 'Changed from JS' // присваиваем новое
//   heading.style.color = 'red' // или поменять цвет через свойства style
//   heading.style.textAlign = 'center' //или по центру разместить
//   heading.style.backgroundColor = 'black' //сменить цвет задний
//   heading.style.padding = '2rem'
// }, 1500)

//напишем функцию, которая будет переданному элементу задавать такие стили
//о же самое
// const heading = document.getElementById('Hello')
// console.log(heading)
// setTimeout(()=> {     //все та же функция отложенности
//   addStylesTo(heading) //и мы тот узел передаем в фукцию, которая применяет к нему стили
// }, 1500)

// function addStylesTo(node) {     //в функцию, которую мы назвали addStylesTo передаем узел (элемент) node
//   node.textContent = 'Changed from JS' //т.е. описали функцию, которая работает с рядом параметров
//   node.style.color = 'red' 
//   node.style.textAlign = 'center'
//   node.style.backgroundColor = 'black'
//   node.style.padding = '2rem'
// }

// const heading2 =document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2class')[0]
// const heading2 = document.querySelector('h2')   //самый современный метод поиска по любым значениям (селекторам)
// const heading2 = document.querySelector('.h2class') //по классу
// const heading2 = document.querySelector('#h2class')    //по ID
//querySelector всегда ищет первый попавшийся элемент по поиску
//querySelectorAll все элементы и работает с ними
//также можно находить элементы, вложенные, допустим, во все querySelectorAll
//с помощью:
//const heading21 = heading2[heading2.lenght-1]
//или
//const heading21 = heading2.nextElementSibLing
// console.log(heading2)
// heading2.style.color = 'blue'

// setTimeout(()=> {      //и в ту же функцию, что раньше использовали, вставляем новый узел, который необходимо трансформировать
//   addStylesTo(heading2) 
// }, 3000)



//Поработаем с функцией
const heading = document.getElementById('Hello')
const heading2 = document.querySelector('#h2class')

heading2.style.color = 'blue'

setTimeout(()=> {    
  addStylesTo(heading, 'практикуйся', 'white', '100px') 
}, 1500)

setTimeout(()=> {      
  addStylesTo(heading2, 'и все получится') 
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {    
  node.textContent = text,
  node.style.color = color,
  node.style.textAlign = 'center',
  node.style.backgroundColor = 'black',
  node.style.padding = '2rem'

  if (fontSize) {      //если фонтсайз не falsy(дребедень) (т.е. что-то есть), то мы заходим в блок if и он принимает значение, которые мы укажем
    node.style.fontSize = fontSize
  }
}


heading.onclick = () => {    //вызываем событие через on и click
  console.log('click')
  if (heading.style.color === 'white') {
    heading.style.color = 'black'
    heading.style.backgroundColor = 'yellow'
  } else {
    heading.style.color = 'white'
    heading.style.backgroundColor = 'black'
  }
}

//то же самое, но для heading2 и с помощью addEventListener (добавляет событие слушателя)
// где есть два параметра: событие и функцию
heading2.addEventListener('dblclick', () => {    //вызываем событие через on и click
  console.log('click')
  if (heading2.style.color === 'white') {
    heading2.style.color = 'black'
    heading2.style.backgroundColor = 'yellow'
  } else {
    heading2.style.color = 'white'
    heading2.style.backgroundColor = 'black'
  }
})

const link = document.querySelector('a')
link.addEventListener('click',(event)=>{
  event.preventDefault()
  console.log('click', event.target.getAttribute('href'))

  const url = event.target.getAttribute('href')   //переходим по ссылке, а не в новом окне
  window.location = url
})











