//Event Loop

// setTimeout(()=> {                          //set - глобальная функция
//   console.log('after timeout')
// }, 2500)                                  //спустя 2.5 сек вызвали функцию

// const timeout=setTimeout(()=> {   
//   console.log('after timeout')
// }, 2500)   
// clearTimeout(timeout)             //очистили

//интервал
// const interval=setInterval(()=> {      //задали интервал
//   console.log('interval')
// }, 1000)   
// clearInterval(interval)           //очистили


// const delay=(callback, wait=1000) => {             //вызываем через 2 секунды       
//   setTimeout(callback, wait)
// }
// delay(()=> {console.log('after 2 second')}, 2000)



// const delay = (wait=1000) => {
//   const promise = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
// resolve()
//   }, wait)
// })
// return promise
// }

// delay(2500)
// .then(()=>{
//   console.log('after 2 second')
// })
// .catch(err => console.error(err))
// .finally(()=> console.log('Finally'))










