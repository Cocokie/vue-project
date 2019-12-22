//import from 是es6导入模块的方式
//由于ES6的代码太高级了，浏览器解析不了
import $ from 'jquery'

//报错
import './css/index.css'
//webpack默认只能打包处理js类型的文件
//如果要处理非js类型的文件，需要第三方loader加载器
//1.如要打包Css文件，需要npm i style-loader css-loader -D
//2.打开webpack.config.js，新增module节点，有一个rules数组属性，存放了，
//所有第三方文件的匹配和处理规则

$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor',function(){
        return '#D97634'
    })
})

//1.webpack 能够处理JS文件的相互依赖关系
//2.webpack 能够处理js的兼容问题


//使用webpack-dev-server这个工具 来实现自动打包编译的功能
//1.运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
//2.安装完毕后，这个工具的用法和 webpack命令的用法完全一样
//3.由于我们不是全局安装的，是在项目中安装的，所有无法直接用命令，
//4.注意:webpack-dev-server这个工具，如果想要正常运行，在本地项目中 必须安装webpack
//5.webpack-dev-server帮我们打包生成的bundle.js文件，并没有存放到实际的物理磁盘上，而是在内存中
//6.我们可以认为webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了项目的根目录中 

//html-webpack-plugin将Html也放到内存