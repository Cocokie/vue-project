const path = require("path");
const webpack = require('webpack')
const htmlweb = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//这个配置文件，其实就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"), // 打包文件的输出目录
    filename: "bundle.js"
  },
  devServer: {//这是配置dev-server命令参数得第二种形式
    // --open --port 3000 --contentBase src --hot
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true  //启用热更新
  },
  output: {
    //指定输出选项..
  },
  module: {// 配置所有第三方loader模块的...
    rules: [
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  plugins: [ //所有webpack 插件的配置节点
    new webpack.HotModuleReplacementPlugin(), //new 一个热更新的对象
    new htmlweb({
      template: path.join(__dirname, './src/index.html'),//指定模板页面
      filename: 'index.html' //指定生成的页面名称
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.js"
    }
  }
};