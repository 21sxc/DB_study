const dbHelper = require('./db_helper')

async function testDbFunc() {
    let uid = 2
    try {
        let user = await dbHelper.getUser(uid)
        console.log(`my name is ${user.name} and my birthday is ${user.birthday.toISOString()}`)
    } catch (err) {
        console.log('[QUERY ERROR] - ', err.message);
    }

    let params = {
        name: '我是天才',
        birthday: '2000-1-1 00:00:00',
    }

    try {
        let ok = await dbHelper.updateUser(uid, params)
        console.log('更新成功')
    } catch (err) {
        console.log('[UPDATE ERROR] - ', err.message);
    }
    
    let newUesr = {
        name: 'sssss',
        birthday: '2001-1-1 00:00:00',
    }
    try {
        let add = await dbHelper.insertUser(newUesr)
        console.log('添加成功')
    } catch (err) {
        console.log('发生错误')
    }

    dbHelper.quit()
}

testDbFunc()



