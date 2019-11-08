// var add = (
//     function  () {
//         var counter = 0;
//         return function name(params) {
//             return counter += 1;
//         }
//     }
// )();
// function myFunction(params) {
//     document.getElementById("demo").innerHTML = add();
// }

// document.getElementById("").innerHTML = ""
// document.getElementById("").style.color = ""
// document.getElementById("").style.fontFamily = ""
// {/* <button type = "button" onclick = "document.getElementById("").style.color = 'red'"> */}
// document.getElementById("").onclick = function (params){displayDate()};
// function  displayDate(params) {
//     document.getElementById("demo").innerHTML = Date();
// }

var para = document.createElement("p");
var node = document.createTextNode("这是新段落");
para.appendChild(node);
//创建新段落

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child)
//将新段落插入到div1和p1之间

parent.removeChild(child)
//将段落移除

parent.replaceChild(para, child)

var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "文档包含" + myCollection.length + "个段落。"

function myFunction(params) {
    var myCollection = document.getElementsByTagName("p");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        myCollection[i].style.color = "red";
    }
}
//遍历所有元素“p”,将颜色属性修改为红色

var myNodelist = document.querySelectorAll("p");//选取了所有的“p”节点
document.getElementById("demo").innerHTML = "第二个段落的内容为：<span style = 'color:red;'>" + myNodelist[1].innerHTML + '</span>'

person = new Object();
person.firstName = "john";
person.lastName = "doe";
person.age = 50;
//创建对象，添加3个属性

person = {
    firstName:"john",
    lastName:'doe',
    age:50
};

function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.changeName = changeName;
    function changeName(name) {
        this.lastName = name
    }
}

myMother = new person("sally", "rally", 48) //通过对象构造器，直接构造新的对象
myMother.changeName("doe");//将对象里"lastName"的属性修改为doe

var person = {fname:"s", lname:"xc", age:20};
for (const x in person) {
    txt += person[x];
};//遍历person对象内所有属性,并讲其显示出来

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eye
}

Person.prototype.name = function () {
    return this.firstName + "" + this.lastName
};

var myFather = new Person("joe", "doe", 50, "blue");
document.getElementById("demo").innerHTML = "我的父亲是" + myFather.name();
//继承person对象的基础上，添加了方法，讲对象中firstName和lastName表示出来

Date.prototype.format = function (fmt) {
    var o = {
        "M+" : this.getMonth()+1,
        "d+" : this.getDate(),
        "h+" : this.getHours(),
        "m+" : this.getMinutes(),
        "s+" : this.getSeconds(),
        "q+" : Math.floor((this.getMonth()+3)/3),
        "S" : this.getMilliseconds(),
    };

for (const k in o) {
    if (new RegExp("(" + k +")").test(fmt)) {
        fmt = fmt.replace(
            RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
}

return fmt;
}

document.getElementById("demo1").innerHTML = new Date(79,5,24,11,33,0).format("MM月dd日");

var now = new Date();
var nowStr = now.format("yyyy-MM-dd hh:mm:ss");
document.getElementById("demo2").innerHTML=new Date().format("yyyy年MM月dd日");
var nowStr = now.format("yyyy-MM-dd hh:mm:ss");
document.getElementById("demo3").innerHTML=new Date().format("yyyy年MM月dd日hh小时mm分ss秒");

Array.prototype.myUcase = function () {
    for (i = 0; i < this.length; i++) {
        this[i]=this[i].toUpperCase();
    }
}
function myFunction() {
    var fruits = ["banana", "apple", "Orange", "Mango"];
    fruits.myUcase();
    var x = document.getElementById("demo");
    x.innerHTML = fruits;
}//创建一个数组，调用ucase()方法，并显示结果

function randBool(percent = 0.5) {
    if(Math.random() < percent) 
        return true;
        else
        return false;
}

function randChar(length, characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    //length可自己输入指定长度
    characters = characters.split("");
    result = "";
    while(result.length < length) result += characters[Math.round(Math.random()*characters.length) - 1]
    return result;
}

function randCharAnother(length,rangeMin=0x80,rangeMax=0x7FF){
    //length长度，rangeMin为最小Unicode码，rangeMax为最大Unicode码。
    result="";
    while(result.length<length) result+=String.fromCharCode(Math.round(Math.random()*(rangeMax-rangeMin)) + rangeMin);
    return result;
}

Array.prototype.pick = function () {
    //不能为 ()=>{/*函数*/}，否则this会指向Window。
    return [(this.length?Math.round(Math.random()*(this.length-1)):undefined)];//如果长度为0，返回undefined
}

var num = 123;
window.str = "string";
delete num;
delete str;
console.log(num); //123

console.log(str);//str is not defined
//全局变量不能通过delete删除，因为通过var定义全局变量会有一个名为[Configurable]的属性，默认值为false,所以这样定义的属性不可以通过delete删除。

var newValue = oldValue; //报错：oldValue is not defined
var newValue = window.oldValue;//不会报错
console.log(newValue);//undefined

function a() {
    history.go(1)
}//跳转页面前进

function b() {
    history.go(-1)
}//跳转页面返回上一页

function c() {
    history.go(0)
}//刷新页面

function myFunction() {
    var x;
    var r = confirm("按下按钮");
    if (r == true) {
        x = "你按下了\"确定\"按钮!";
    } else {
        x = "你按下了\"取消\"按钮!";
    }
}

function myFunction() {
    var x;
    var person = prompt("请输入你的名字", "sxc");
    if (person != null && person != "") {
        x = "hello" + person + "!今天感觉如何?";
        document.getElementById("demo").innerHTML = x;
    }
}

var myVar = setInterval(function () {myTimer()}, 1000);
function  myTimer() {
    var d = new Date();
    var t = d.toLocaleDateString();
    document.getElementById("demo").innerHTML = t;
}//当前时间，每秒更新一次

function myStopFunction() {
    clearInterval(myVar);
}//停止计时

function myFunction() {
    setTimeout(function () {alert("hello")}, 3000)
}//三秒后弹出弹窗
function myStopFunction() {
    clearTimeout()
}//去除定时器

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length);}
    }
    return "";
}
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("welcome" + user + "再次访问");
    }
    else {
        user = prompt("请输入你的名字:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30)
        }
    }
}

