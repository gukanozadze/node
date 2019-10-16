const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('This is my error!')
    resolve([1, 4, 7])
  }, 1000)
})

doWorkPromise.then((result) => {
  console.log('Success!', result)
}).catch((error) => {
  console.log('Error!', error)

})