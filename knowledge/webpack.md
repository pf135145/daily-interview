## webpack 如何配置，常见的配置项有哪些

* entry
* loader
* plugin
* output
* devServer
* resolve

```
{
  mode: 'production' // 环境变量
  entry: {
    app: index.js // 入口文件
  },
  devtool: {      // 是否生成，以及如何生成 source map
    "source-map"  // 不配置该选项默认不生成 source map
  },
  output: {
    path: path.resolve(__dirname, 'dist') // 输出路径
    name: [name].[hash].js // 输出文件名字
    clean: true // 先清空文件夹再输出
  }
  // loader
  module: {
    rules: [{
      test: /\.(j|t)s$/,         // 匹配文件
      use: 'babel-loader',       // 使用的loader
      exclude: /node_modules/,   // 排出目录
      options: {                 // loader 配置
        presets: []
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({      // 插件实例化
      title: '测试',              // 插件配置
      template: './assets/index.html'
    })
  ],
  // 本地开发server
  devServer: {
    proxy: {          // 请求代理
      "/api": "http://localhost:3000",  // 把本地请求path中含有'api'的代理到xxx
    },
    compress: true,   // 启用gzip压缩
    hot: true,        // 热更新
    port: 8080,       // 监听的端口号
  },
  // 设置模块如何被解析
  resolve: {
    alias: {        // 设置别名，用于替换引用模块的路径
      utils: path.resolve(__dirname, 'src/utils/'),
              // 替换前 import date2Str from '../../utils/date2Str';
              // 可改成 import date2Str from 'utils/date2Str';
    },
    extensions: ['.js', '.json', '.ts'], // webpack 解析后缀名，加上后引入文件时可不带后缀
              // 替换前 import File from '../path/to/file.js';
              // 可改成 import File from '../path/to/file';
  },
  // 优化
  optimization: {

  }
}
```