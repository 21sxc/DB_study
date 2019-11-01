const http = require('http')
const fs = require('fs')
const dbHelper = require('./db_helper')

http.createServer(function (request, response) {
    const pathname = request.url
    route(pathname, response)
}).listen(8888)


async function route(pathname, response) {
    if (pathname === '/') {
        //发送HTTP请求
        //HTTP状态值：200：OK
        response.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                response.end('服务器出错：' + err.message)
                return
            }
            //发送响应数据"Hello World"
            response.end(data)
        })
    } else if (pathname.startsWith('/data')) {
        const userInfo = parseInt(pathname.substring(5))
        if (userInfo <= 0) {
            response.end('userData 不合法')
            return
        }
        response.writeHead(200, {'Content-Type':'application/json; charset=UTF-8'})
        const userAdd = await dbHelper.insertUser(userInfo)
        if (userAdd) {
            response.end('添加成功')
        } else {
            response.end('添加失败')
        }
    } else if (pathname.startsWith('/user/')) {
        const uid = parseInt(pathname.substring(6))
        if (uid <= 0) {
            response.end('uid 不合法')
            return
        }
        response.writeHead(200, {'Content-Type':'application/json; charset=UTF-8'})
        const user = await dbHelper.getUser(uid)
        if (user) {
            response.end(JSON.stringify(user))
        } else {
            response.end(JSON.stringify({}))
        }
    } else if (pathname.startsWith('/users')) {
        console.log('发生请求')
        response.writeHead(200, {'Content-Type':'application/json; charset=UTF-8'})
        const users = await dbHelper.getUsers(10)
        if (users) {
            response.end(JSON.stringify(users))
        } else {
            response.end(JSON.stringify([]))
        }
    } else {
        response.end('')
    }
    
}

console.log('Server running at http://127.0.0.1:8888/')