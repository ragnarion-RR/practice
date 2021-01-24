//1.Переменные
//const firstName = 'sergey'

//let age = 26


//console.log('name ' +  lastName  +  age)
//console.log(age.toString())

//2.Мутирование
//const lastName = prompt( 'введите фамилию' )
//alert(firstName + '' + lastName)

//3.Операторы (сложение, умножение, сравнение и т.д.)
//console.log(++age)
//console.log(--age)


//4.Типы данных (5 типов: boolean, string, number, undefined, null и еще три)
//const isProgrammer = true
//const name = 'sergey'
//const age = 32
//let x
//null
//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(typeof null)

//5. Приоритет операторов

//6.Условные операторы
//const courceStatus = 'fail'
//if(courceStatus === 'ready') { console.log('Курс готов')}
//else if(courceStatus === 'pending') { console.log('Курс в разработке')}
//else {console.log ('курс не получился')}

//const isReady = false
//if (isReady===true) { console.log ('Все готово')}
//else { console.log('Все не готово')}

//Тернарное выражение
//isReady ? console.log('Все готово') : console.log('Все не готово')
  


//const num1 = 42 // number
//const num2 = '42' //string
//console.log(num1===num2)


//7.Булевая логика mdn logical operators (запрос) оперирует запросами true\false


//8.Функции
// function calculateAge(year) {
// return 2020 - year}

// // console.log(calculateAge(1993))
// // console.log(calculateAge(1999))
// // console.log(calculateAge(2003))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)
//   if (age > 0) {
//   console.log ('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else console.log ('Это уже будущее')
// }

// logInfoAbout('Sergey',1988)
// logInfoAbout('Sergey',2005)
// logInfoAbout('Sergey',2025)


//9.Массивы
// const cars = ['мазда', 'мерседес', 'форд']
//const cars = new Array('мазда', 'мерседес', 'форд')
// console.log(cars.length)

//console.log(cars)

// console.log (cars[1])
// console.log (cars[0])
// console.log (cars[2])

// cars [0] = 'Порше'
// console.log(cars)
// cars[3]='мазда'
// console.log(cars)


//10. Циклы
// const cars = ['мазда', 'мерседес', 'форд', 'Порше']
// for (let i = 0; i < cars.length; i++) {
//   const car = cars [i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }


//11. Объекты
// const person = {     //объект const группирует значения ниже (модель ЧЕЛОВЕК содержит показатели)
//   firstName: 'Sergey',
//   lastName: 'RR',
//   year: 1988,
//   languages: ['ru', 'by', 'en'],
//   hasWife: true,
//   greet: function() {
//     console.log('greet for person')
//   }
// }

// console.log(person.firstName)      //обращение к модели
// console.log(person['lastName'])      //обращение к модели

// const key = 'languages'               //обращение к модели
// console.log(person[key])

// const key1 = 'year'                    //обращение к модели
// console.log(person[key1])

// person.hasWife = false  //изменяем объект
// console.log(person)

// person.isProgrammer = true //добавляем объект
// console.log(person)

// person.greet()