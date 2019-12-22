//在webpack构建的项目中，使用vue开发

//复习 在普通网页中如何使用vue：
//1.使用script标签，引入vue包
//2.在index页面中，创建一个id为app的div容器
//3.通过new Vue的到vm实例 

//在webpack中 尝试使用vue


import Vue from 'vue'
//回顾包的查找规则
//1.找项目根目录中有没有node_modeules的文件夹
//2.在node_modules中根据包名，找对应的vue文件夹
//3.在vue文件夹中,找一个package.json的包配置文件
//4.在这个文件中找一个main属性【指定了这个包在被加载的时候，入口文件的位置】
// var login = {
//     template: '<h1>登录组件----</h1>',
//     data() {
//         return {
//             msg: "hahah"
//         }
//     },
//     created() {
//         //通过this.$route.query传参
//         // console.log(this.$route.query.id)

//     }
// }
import login from './login.vue'
//默认webpack无法打包.vue文件，需要安装相关的loader
//npm i vue-loader vue-template-compiler -D
const vm = new Vue({
    el: '#app',
    data: {
        msg: "欢迎学习Vue"
    },
    // components: {
    //     login,
    // }
    // render:function(createElements){//在webpack中，如果想通过vue，把一个组件放到页面中去展示，v
    //     //vm实例中的render函数可以实现
    //     return createElements(login)
    // }

    render: c => c(login)//在webpack中，如果想通过vue，把一个组件放到页面中去展示，v
    //vm实例中的render函数可以实现

    //总结，webpack中如何使用vue
    //1.安装vue的包：npm i vue -S
    //2.由于 在webpack中,推荐使用.vue这个组件模板文件定义组件，所以需要安装
    //能解析这种文件的loader cnpm i vue -loader vue-template-complier -D
    //npm i vue-loader-plugin -S
    //3.在main.js中，导入vue模块 import Vue from 'vue'
    //4.定义一个.vue结尾的组件，其中组件由三部分组成，template script style
    //5.使用import login from './login.vue'导入这个组件
    //6.创建vm的实例 var vm =
    //7.在页面中创建vm要控制的区域
})
import m1, { title as title123,content,info} from './test.js'
console.log(m1)
console.log(info)
console.log(title123+'---'+content)