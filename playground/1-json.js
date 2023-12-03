const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


// //Allows to read file
// const dataBuffer = fs.readFileSync('1-json.json') //Red to the file in binary data
// const dataJSON = dataBuffer.toString()//Converted the data into a string
// const data = JSON.parse(dataJSON)//parsed the string in json data into a object
// console.log(data.title)//accessed a property

const dataBuffer = fs.readFileSync('1-json.json')//read the file
const dataJSON =  dataBuffer.toString()//convertt to a string
const data =  JSON.parse(dataJSON)//parsed the string

user.name = 'Brenda' //changed the name
user.age = 54  //changed the age

const userJSON = JSON.stringify(data) //data in a varible called userJSON
fs.writeFileSync('1-json.json', userJSON) //overwrites it 