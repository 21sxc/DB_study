const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123',
    database : 'db_study'
});

connection.connect();

/**
 * get user info
 * @param {Number} uid 
 */
function getUser(uid, callback) {
    const sql = 'SELECT * FROM user WHERE uid = ?';
    const params = [uid]
    connection.query(sql, params, function (err, result) {
        if (err) {
            callback(err)
        } else {
            callback(null, result[0])
        }
    })
}

function updateUser(uid, params, callback) {
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
            callback(err)
        } else {
            callback(null, result.affectedRows === 1)
        }
    })
}

// var modSql = 'UPDATE user SET birthday = ? WHERE uid = ?';
// var modSqlParams = ['1994-09-25 00:00:00', 2];
// //改
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

function quit(params) {
    connection.end()
}



module.exports.getUser = getUser
module.exports.updateUser = updateUser
module.exports.quit = quit