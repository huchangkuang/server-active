const fs = require('fs')
//读数据
const string = fs.readFileSync('./db/users.json').toString()
const usersList = JSON.parse(string)
// console.log(usersList instanceof Array);
// console.log(usersList);
const users3 = {
    "id": 3,
    "name": "pengyuyan",
    "password": "zzz"
}
usersList.push(users3)
const data = JSON.stringify(usersList)
console.log(data);
fs.writeFileSync('./db/users.json', data)