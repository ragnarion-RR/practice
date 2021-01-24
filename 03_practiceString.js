// 1. String строки

// const name = 'Sergey'
// const age = 32
// // const output = 'Привет, меня зовут '+ name +', мой возраст '+ age +' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет`
// console.log(output)


// const name = 'Sergey'
// const age = 32
// function getAge() {
//   return age
// }
// // const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет`
// const output = `Привет, меня зовут ${name} и мой возраст ${age<26 ? 'A' : 'B'} лет`
// console.log(output)

// const output = `
// sgsrhgh 
// sggeg
// `
// console.log(output)


// const name = 'Sergey'
// console.log(name.length) //количество букв в строке
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.charAt(2)) 
// console.log(name.indexOf('erg')) //с какого индекса начинается erg
// console.log(name.indexOf('!'))
// console.log(name.startsWith('S')) //стартует ли строка с
// console.log(name.toLowerCase().startsWith('s')) // делает низкими и потом проверяет
// console.log(name.endsWith('S'))
// console.log(name.repeat(4))

// const string = '           password              '
// console.log(string.trim()) // убирает пробелы
// console.log(string.trimLeft())
// console.log(string.trimRight())


// function logPerson (s, name, age) {
//   if (age<0) {age = 'еще не родился'}
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const personName = 'Sergey'
// const personName2 = 'Maxim'
// const personAge = 32
// const personAge2 = -10
// const output = logPerson`Имя ${personName}, Возраст ${personAge}!`
// const output2 = logPerson`Имя ${personName2}, Возраст ${personAge2}!`
// console.log(output)
// console.log(output2)