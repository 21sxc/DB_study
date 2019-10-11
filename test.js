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


function reverse(arr) {
    const newArr = []
    for (let i = arr.length - 1;  i >= 0; i-- ) {
        newArr.push(arr[i])
    }
    return newArr
}

function reversePro(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2) ; i++) {
        let newNum = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = newNum
    }
}

function sum(arr) {
    let sumNum = 0
    for (let i = 0; i < arr.length; i++) {
        sumNum += arr[i]
    }
    return sumNum
}

function max(arr) {
    let numMax = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (numMax < arr[i]) {
            numMax = arr[i]
        }
    }
    return numMax
}


function searchIdx(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i
        }
    }
    return -1
}

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (arr[j+1] < arr[j]) {
                let sortNum = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = sortNum
            } else if(arr[j+1] >= arr[j]){
                break
            }
        }
    } 
}

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
}

// printProp(user)
// console.log(countProp(user))
// console.log(copyProp(user)) 
// console.log(user)
// console.log(countNumProp(user))
// reversePro(arr)
// let big = max(arr)
// console.log(big)
// searchIdx(arr, target)
// console.log(searchIdx(arr, target))
let user = {
    name: 'salamander',
    age: 18,
    height: 150,
}

user.hair = 'black'

user['weight'] = 120

const arr = [2, 4, -3, -7, 15 ,3 , 6]

const target = 1

insertSort(arr)
console.log(arr)