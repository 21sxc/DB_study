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