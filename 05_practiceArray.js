//Массивы
// const cars = ['mazda','ford','bmw','mercedes']
// const fib = [1, 1, 2, 3, 5, 8, 13] //фибоначчи, пред+след
// // console.log(cars)

// // function addItemToEnd() {} //функция
// // cars.push() //метод (если мы в объекте cars используем например push (в контексте объекта))

// cars.push('porshe') //положили в массив новый элемент
// // console.log(cars)
// cars.unshift('volga') //положили в начало
// // console.log(cars)
// cars.shift()
// console.log(cars) //убирает первый элемент из массива, но с ним можно работать дальше

// const firstItem = cars.shift() //убрали 1 элемент и вывели его
// console.log(firstItem)
// console.log(cars)

// const lastCar = cars.pop()  //убрали последний
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)


//Задача 1
// const text = 'привет, мы изучаем JS'
// const reverseText = text.split('').reverse().join('') 
//             //разбивает текст на элементы, переворачивает, соединяет
// console.log(reverseText)


// const cars = ['mazda','ford','bmw','mercedes'] //ищем и заменяем 
// // const index = cars.indexOf('bmw')   //работает с простыми данными
// const index = people.findIndex()   //работает со сложными данными
// cars [index] = 'porshe'
// console.log(cars)


// const people = [
//   {name: 'Sergey', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
// const index = people.findIndex(function(person) {
//   return person.budget===3500
// })
// console.log(index)   //ищем чела у которого 3500 и находим индекс

// const person = people.find(function(person) {  //то же, но сразу ищет чела
//   return person.budget===3500
// })
// console.log(person) 


// const people = [                      //та же задача, но циклом
//   {name: 'Sergey', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
// let findedPerson
// for (const person of people) {
//    if (person.budget === 3500) {
//     findedPerson = person
//   }
// }
// console.log(findedPerson)


// const people = [                    //та же задача, но стрелочной функцией
//   {name: 'Sergey', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
// const person = people.find((person) => { 
//   return person.budget ===3500
// })
// console.log(person)

// const people = [     //та же задача, но стрелочной функцией и проще
//   {name: 'Sergey', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
// const person = people.find(person => person.budget ===3500)  //лямбда функция
// console.log(person)

// const cars = ['mazda','ford','bmw','mercedes']
// console.log(cars.includes('mazda'))    //провереряет массив на наличие элемента

//Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// const cars = ['mazda','ford','bmw','mercedes']
// const upperCaseCars = cars.map(car => {  //метод map возвращает новый массив
//   return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const fib = [1, 1, 2, 3, 5, 8, 13]
// const powFib = fib.map (num => num**2)
// console.log(powFib)

// const pow2 = num => num**2      //то же самое, ф-ю не вызываем, а передаем
// const pow2Fib = fib.map(pow2)
// console.log(pow2Fib)

// const fib = [1, 1, 2, 3, 5, 8, 13]  //есть массив
// const pow2 = num => num**2          // возводим каждый элемент массива в квадрат
// const sqrt = num => Math.sqrt(num)   // каждый элемент под корень
// const pow2Fib = fib.map(pow2).map(Math.sqrt)  //массив подвергаем методу map два раза с разными действиями
// console.log(pow2Fib)

// const fib = [1, 1, 2, 3, 5, 8, 13] //возвести в кв и отфильтровать
// const pow2 = num => num**2 
// const pow2Fib = fib.map(pow2)
// const FuturedNum = pow2Fib.filter(num => {
//   return num > 20
// })
// console.log(FuturedNum)


//задача 2   ищем сумму без виктории
// const people = [
//   {name: 'Sergey', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
//  //обращаюсь к массиву people и вызываю у него метод reduce с двумя
//  // параметрами (функция и начальное значение), где функция вкл аккумулятор и элемент, по которому делаем иттерацию
// const allBudget = people.reduce((acc, person) => {   
//   if (person.budget>2000) {
//   acc += person.budget}
//   return acc  
// }, 0) 
// console.log(allBudget)


// const people = [                      //то же, но с фильтром перед reduce
//   {name: 'Sergey', budget: 4200},
//   {name: 'Elena', budget: 3500},
//   {name: 'Victoria', budget: 1700}
// ]
// const allBudget = people
// .filter(person => person.budget>2000)
// .reduce((acc, person) => {   
//   if (person.budget>2000) {
//   acc += person.budget}
//   return acc  
// }, 0) 
// console.log(allBudget)

// const displayItems = allItems.filter(item => item.name.contains('phone') !==-1) //пример поиска






// ---------------------------------------------------------------
// работа с массивом волшебников

var wizards = [
  {
    name:'Пендальф',
    eyesColor: 'blue',
    coatColor: 'green'
  },
  {
    name:'Баба Яга',
    eyesColor: 'black',
    coatColor: 'gray'
  },
  {
    name:'Саруман',
    eyesColor: 'white',
    coatColor: 'yellow'
  },
  {
    name:'Радагаст',
    eyesColor: 'red',
    coatColor: 'blue'
  }
];

// // 1. создание массива с именами обычным перебором
// var wizardNames = [];
// for (var i=0; i < wizards.length; i++) {
//   wizardNames[i] = wizards[i].name;
// }
// console.log(wizardNames);


// // 2. Метод push, хорош тем, что можно добавить кого-то в 
// // конец массива, например, просто добавив Кащея в начальный массив
// var wizardNames = ['Кащей'];
// for (var i=0; i < wizards.length; i++) {
//   wizardNames.push(wizards[i].name);
// }
// console.log(wizardNames);

// // 3. Метод pop, удаляющий последний элемент
// var wizardNames = [];
// for (var i=0; i < wizards.length; i++) {
//   wizardNames.push(wizards[i].name);
// }
// console.log(wizardNames);
// wizardNames.pop();
// console.log(wizardNames);

// 4. Метод shift/unshift выполняет то же, только работает с 
// началом массива

// // 5. ИТЕРАТОРЫ (повторяющий метод), метод map (мапирование)
// var wizardNames = wizards.map(function (wizard) {
//   return wizard.name; //перебирает все элем и оставляет имена
// });
// console.log(wizardNames);

// var wizardNames = wizards.map(function (wizard, index, array) {
//   return wizard.name 
//   + ' '
//   + (index +1)
//   + '/'
//   + array.length; //показывает числовой показатель элемента
// });
// console.log(wizardNames);

// // 6. ИТЕРАТОРЫ, метод filter
// var blueEyesWizards = wizards.filter(function (wizard) {
//   return wizard.eyesColor === 'blue'; //ищет голубые глаза
// });
// console.log(blueEyesWizards); //выводит все свойства найденного объекта

// var blueEyesWizards = wizards.filter(function (wizard) {
//   return wizard.eyesColor === 'blue'; //ищет голубые глаза
// }).map(function(wizard) {  //мапированием выводит только имя
//   return wizard.name;
// });
// console.log(blueEyesWizards);

// // 7. ИТЕРАТОРЫ, метод forEach (просто пребор всего массива без возврата)
// wizards.forEach(function (wizard) {
//   console.log(wizard.name + ', цвет глаз: ' + wizard.eyesColor);
// }); //forEach нельзя остановить (весь массив перебирает сразу), а цикл for можно остановить

// 8. Сортировка методом sort
//  метод slice позволяет делать полную копию массива и
// уже потом работать с ним (исходный массив останется неизм)

// Вообще, есть методы, которые изменяют массив, 
// не изменяют массив, и циклические

















