//Объекты
// const person = {
//   name: 'Sergey',
//   age: 26,
//   isProgrammer: true,
//   languages: ['ru','en','de'],
//   // 'complex key': 'Complex Value',  
//   // ['key_'+(1+3)]: 'Computed Key'    //key_4
// } 

// console.log(person.name)
// const ageKey='age'
// console.log(person[ageKey])
// console.log(person['complex key'])

// console.log(person['age'])
// console.log(person.age)

// person.age++                   //+1 к возрасту
// console.log(person.age)

// person.languages.push('by') //добавляет бел язык
// console.log(person.languages)

// person['key_4'] = undefined //делает его undefined
// delete person['key_4']                  //удаляет его совсем



// const name = person.name
// const age = person.age
// const languages = person.languages
// console.log(name, age, languages)

// const {name, age, languages} = person // то же самое, что и выше
// console.log(name, age, languages)

// const {name,  age: personAge = 10, languages} = person // то же самое, что и выше? но с заменой
// console.log(name, personAge, languages)


// for (let key in person) {   // цикл for in, 
//   if (person.hasOwnProperty(key)) { //если у объукта person есть свойство, которое не находится в прототипе key то тогда можно делать консоль логи
//   console.log('key', key)
//   console.log('value:', person[key])
// }
// }


// const keys = Object.keys(person)   //смотрим ключи этого объекта , не бежит по прототипу
// console.log(keys)
// console.log('key', key)

// const keys = Object.keys(person)    //то же самое
// keys.forEach( key => {
//     console.log('key', key)
//     console.log('value:', person[key])
// })


//Контекст
// const person = {
//   name: 'Sergey',
//   age: 26,
//   isProgrammer: true,
//   languages: ['ru','en','de'],
//   // 'complex key': 'Complex Value',  
//   // ['key_'+(1+3)]: 'Computed Key'    //key_4
//   greet() {
//     console.log('greet from person')
//   },
//   info() {
//     console.info('Информация про человека по имени:', this.name) //this указывает на person (он и есть) внутри функции
//   }
// } 
// // person.info()


// const logger = {
//   keys(obj) {
//     console.log('object keys:', Object.keys(this))
//   }
// }
// const bound = logger.keys.bind(logger)
// bound()

// logger.keys.call(person)    //то же что и bind

// withParams(top=false, between=false, bottom=false) {
//   if (top) {
//     console.log('---start---')
//   }
//   Object.keys(this).forEach(key => {
//     console.log(`"${key}":${this[key]}`)
//     if (between) {
//       console.log('---------')
//     }
//   })

//   if (bottom) {
//     console.log('---end---')
//   }
// }
// logger.withParams.call(person)





