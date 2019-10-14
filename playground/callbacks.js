// const geocode = (address, callback) => {

//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0
//     }
    
//     callback(data)
//   }, 2000)
  
// }

// geocode('Philadelpiha', (data) => {
//   console.log(data)
// })

const add = (num1, num2, callback) => {
  setTimeout(() => {
    callback(num1 + num2)
  }, 2000)
}


add(1, 4, (sum) => {
  console.log(sum)
})