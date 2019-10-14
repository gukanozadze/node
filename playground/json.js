const fs = require('fs')

const book = {
  title: "Kill or be killed",
  author: "Guka Nozadze"
};

const bookJSON = JSON.stringify(book)


fs.writeFileSync('1-json.json', bookJSON)
