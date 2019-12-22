//这是node中向外暴露成员的形式
//module.exports={} 和 exports来暴露成 员
//var sd = require("模块标识符")



//在ES6中，也通过规范的形式，规定了ES6中如何导入和导出的模块
//ES6中导入模块 使用 import 名称 from 模块标识符   import 表示路径
//在ES6中，使用export default和export向外暴露成员:

var info = {
    name: 'zs',
    age: 200
}

export default info

// export default {
//     address: 'xixi'
// }

//用export default向外暴露的成员，可以使用任意的变量来接收
//注意用export default，在一个模块中，只允许向外暴露一次
//在一个模块中,可以同时使用export default和export向外暴露成员
export var title ='vue学习'
export var content ='hahha'
export var info
//使用export向外暴露的成员，只能使用{}的形式来接收，这种形式，叫做【按需导入】
//export向外可以暴露多个成员
//注意：使用export导出的成员，如果想换个名字来接收，可以用as来起别名

