// 1.Функции
// Function Declaration вызывает функцию из любого места (даже если функция после (ниже) написана)
// function greet(name) {
//   console.log('Privet - ', name)
// }

// // Function Expression когда мы создаем функцию и вкладываем ее в переменную
// const greet2 = function greet2(name) {
//   console.log('Privet 2 - ', name)
// }
// greet('Sergey')
// greet2('Sergey')

// console.log(typeof greet) //определяем, что это
// console.dir(greet) //определяем, что это

//2.Анонимные функции (не имеет названия)
// let counter = 0
// const interval=setInterval(function(){     //задает интервал
//   if (counter===7){
//   clearInterval(interval)}
//   else {
//   console.log(++counter)}
// }, 1000)

// let counter = 0
// const interval=setTimeout(function(){    //задает задержку
//   if (counter===7){
//   clearInterval(interval)}
//   else {
//   console.log(++counter)}
// }, 1000)


//3.Стрелочные функции
// function greet(name) {
//   console.log('Privet - ', name)
// }
// greet('Sergey')

// const arrow = (name) => {                   // то же самое, что и вверху
//   console.log('Privet - ', name)
// }
// arrow('Sergey')

// const arrow2 = name => console.log('Privet - ', name)       // то же самое, что и вверху
// arrow2('Sergey')

// const pow2 = num => {
//   return num**2                      // в квадрат
// }
// console.log(pow2(5))


//4. Параметры по умолчанию
// const sum = (a, b) => a+b
// console.log(sum(1, 41))

// const sum = (a, b) => a+b
// console.log(sum(41))

// const sum = (a = 40, b = a*2) => a+b
// console.log(sum(41, 4))
// console.log(sum())

// function sumAll(...all) {     //считаем сумму
//   let result = 0
//   for (let num of all) {
//     result += num
//   }
//   return result
// }
// const res = sumAll(1, 4, 5, 8)
// console.log(res)


//5.Замыкания
// function createMember (name) {
//   return function(lastName) {
//     console.log(name+lastName)
//   }
// }
// const logWithLastName = createMember ('Sergey')  //фуннкция name замкнула себя и не меняется
// console.log(logWithLastName(' rr'))
// console.log(logWithLastName(' ragnar'))  //а фамилии можно варьировать


//6.Рекурсивная функция, вызывает сама себя на повторе, пока соблюдается условие
// 
// var washNextItem = function(itemsLeft) {
//   itemsLeft--;
//   console.log('В раковине осталось ' +itemsLeft+ ' предметов посуды');
//   if (itemsLeft > 0) {
//     washNextItem(itemsLeft);
//   }
// };
// washNextItem(10);


// ЦИКЛЫ. while/do...while
// используем while (выполняем условие в скобках, пока в boolean оно true)
// var washNextItem = function(itemsLeft) {           //как и пример выше
//   while(itemsLeft--) {
//   console.log('В раковине осталось ' +itemsLeft+ ' предметов посуды');
//   }
// };
// washNextItem(10);


//или можно написать следующим образом
// var washNextItem = function(itemsLeft) {           //как и пример выше
//   while(itemsLeft-->0) {
//   console.log('В раковине осталось ' +itemsLeft+ ' предметов посуды');
//   }
// };
// washNextItem(10);

// цикл for...
// var printNames = function (names) {
//   for (var i=0; i< names.length; i++) {
//     console.log('Элемент '+i+ ':' + names[i]);
//   }
// }
// printNames(['Гена','Вася','Слава','Макс'])
// console.log('-------------------------------')
// printNames(['Люда','Кира','Нюша','Кнопка'])