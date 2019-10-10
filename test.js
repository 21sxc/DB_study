let user = {
    name: 'salamander',
    age: 18,
    height: 150,
}

user.hair = 'black'

user['weight'] = 120

function printProp(obj) {
    let output = ''
    let firstAdd = true
    for (const key in obj) {
        if (firstAdd) {
            output +=` ${key} is ${obj[key]}`
            firstAdd = false
        } else {
            output +=' and ' + ` ${key} is ${obj[key]}`
        }
    }
    console.log(output)
}

function countProp(obj) {
    let count = 0
    for (const key in obj) {
        count++
    }
    return count
}

function copyProp(obj) {
    var newObj = {}
    for (const key in obj) {
        newObj[key] = obj[key]
    }
    return newObj
}

function changeProp(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] ++
        }
    }
}

function countNumProp(obj) {
    let countNum = 0
    for (const key in obj) {
        if (typeof obj[key] === 'number') {
            countNum ++
        }
    }
    return countNum
}

printProp(user)
// console.log(countProp(user))
// console.log(copyProp(user)) 
// console.log(user)
console.log(countNumProp(user))