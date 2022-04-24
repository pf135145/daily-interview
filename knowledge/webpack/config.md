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
    modules: [path.resolve(__dirname, "./node_modules")],
    // 用于配置webpack去哪些目录下寻找第三方模块，默认是 ['node_modules']，如果没有找到，就会去上一级node_modules里找  
  },
  externals: {
    // 第三方库是通过CDN引入，但是在使⽤时仍然可以通过import的⽅式去引⽤，并且希望webpack不会对其进⾏打包
    // key是第三方依赖库的名称，值是赋值给window的全局变量名称
    'jquery': 'jQuery'
  },
  // 优化，抽离公共代码，单独打包
  optimization: {
    splitChunks: {
      chunks: "all", // 对同步 initial，异步 async，所有的模块有效 all
      cacheGroups: {
        // 分组条件，可以覆盖外层配置
      }     
    },
  }
}
```

### 其他优化项

#### 缓存

对每次解析后的文件进行缓存

* cache-loader
* HardSourceWebpackPlugin

#### 开启多进程打包

* happypack
* thread-loader

