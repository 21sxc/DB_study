const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'db_study'
})

connection.connect()

/**
 * get user info
 * @param {Number} uid 
 */
function getUser(uid, callback) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM user WHERE uid = ?';
        const params = [uid]
        connection.query(sql, params, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result[0])
            }
        })
    })
}

function updateUser(uid, params, callback) {
    return new Promise((resolve, reject) => {
        let sql = 'UPDATE user SET ';
        let data = []
        let isFirst = true
        for (const key in params) {
            if (isFirst) {
                sql += ` ${key} = ? `
                isFirst = false
            } else {
                sql += `, ${key} = ?`
            }
            data.push(params[key])
        }
        sql += ` WHERE uid = ? `
        console.log(sql)
        data.push(uid)
        connection.query(sql, data, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result.affectedRows === 1)
            }
        })
    })
}

function insertUser(user) {
    return new Promise((resolve, reject) =>{
        let sql = 'INSERT INTO user (name, birthday) VALUES(?,?)';
        let params = [user.name, user.birthday]
        connection.query(sql, params, function (err, result) {
            if(err){
                reject(err)
            } else {
                resolve(result.insertIds)
            } 
        })
    });
}

function quit(params) {
    connection.end()
}



module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.insertUser = insertUser
module.exports.quit = quit