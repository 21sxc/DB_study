const dbHelper = require('./db_helper')

const uid = 2

dbHelper.getUser(uid, function (err, user) {
    if(err) {
        console.log('[QUERY ERROR] - ', err.message);
        return;
    }
    console.log(`my name is ${user.name} and my birthday is ${user.birthday.toISOString()}`)
    // dbHelper.quit()
})


const params = {
    name: '1111',
    birthday: '2000-1-1 00:00:00',
}

dbHelper.updateUser(uid, params, function (err, ok) {
    if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         return;
    }
    if (ok) {
        console.log('更新成功')
    }    
    dbHelper.quit()
});
// connection.query('SELECT * FROM user birthday', function (error, results, fields) {
//     if (error) throw error;
//     for (let index = 0; index < results.length; index++) {
//         const element = results[index];
//         console.log(`my name is ${element.name} and my birthday is ${element.birthday.toISOString()}`)
//     }
//   });

// var  addSql = 'INSERT INTO user(name,birthday) VALUES(?,?)';
// var  addSqlParams = ['阿龙', '1994-05-03 00：11：12'];
// //增
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });

// var delSql = 'DELETE FROM user where uid=4';
// //删
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });

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



