//1. numbers
// const num = 42 //integer целое
// const float = 42.42 //float с дробной частью
// const pow = 10e3 //
// console.log(num)
// console.log(float)
// console.log(pow)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Math.pow(2 ,53) -1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)

// console.log('2/0', 2/0)
// console.log(Number.NaN) //not a number
// console.log(typeof NaN)

// const weird= 2/undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))

// console.log(Number.isFinite(Infinity)) //конечна ли бесконечность
// console.log(Number.isFinite(42)) //конечно ли число

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2) //получается строка 422
// console.log(Number.parseInt(stringInt)+ 2) // 1 парсим строку в число
// console.log(Number(stringInt)+ 2) // 2 просто строку переводим в число
// console.log(+stringInt+ 2) //3 ставим + перед константой
// console.log(parseInt(stringInt)+ 2) // то же, что и 1, только без number
// console.log(parseInt(stringFloat)+ 2) // парсинт не работает с флоатами
// console.log(parseFloat(stringFloat)+ 2)
// console.log(+stringFloat+ 2)

// console.log(0.4+0.2) // некорректно
// console.log((2/5)+(1/5)) // некорректно
// console.log((0.4+0.2).toFixed(1))  // обрезает количество нулей
// console.log(parseFloat((0.4+0.2).toFixed(1)))




//2.BigInt для работы с очень большими числами
// console.log(typeof 69458609845080468049680468n) //в конце ставим n
// console.log(69458609845080468049680468n - 6945860984508046804968046n)
// console.log(-69458609845080468049680468n)
// console.log(69458609845080468049680468.5757n) // не работает с дробными

// console.log(10n-4) //error
// console.log(parseInt(10n)-4) //парсим и работает
// console.log(10n-BigInt(4))
// console.log(5n/2n)




//3.Math
// console.log(Math.E)  //константа
// console.log(Math.PI)  //константа
// console.log(Math.sqrt(25))
// console.log(Math.pow(5, 3))
// console.log(Math.abs(2-5))
// console.log(Math.max(25, 43, 42, -5, 2))
// console.log(Math.min(25, 43, 42, -5, 2))
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.9))
// console.log(Math.trunc(4.9))
// console.log(Math.sin(1))
// console.log(Math.random()) //выдает рандомное число каждый новый раз

//4. Example
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random()*(max-min+1)+min)
// }
// console.log(getRandomBetween(10, 42)) //задача на получение рандомного числа в пределах мин и макс











