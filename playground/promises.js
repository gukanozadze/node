// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('This is my error!')
//     resolve([1, 4, 7])
//   }, 1000)
// })

// doWorkPromise.then((result) => {
//   console.log('Success!', result)
// }).catch((error) => {
//   console.log('Error!', error)

// })






















const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a+b)
    },2000)
  })
}


add(1,1).then((sum) => {
  console.log(sum)
  return add(sum, 4)
}).then((sum2) => {
  console.log(sum2)
})


// add(1,2).then((sum) =>{
//   console.log(sum)

//   add(sum, 5).then((sum2) => {
//     console.log(sum2)

//   }).catch((err)=>{
//     console.log(err)
//   })
// }).catch((err) => {
//   console.log(Err)
// })












