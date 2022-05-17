## 1. webpack和gulp以及rollup区别

### gulp

* gulp 是一个基于流的自动化构建工具
* gulp 关注的是工作流，着眼于项目的目录文件和类型，去构建项目
* gulp 使用 js 编写配置文件，把所以想做的操作写成 task，由 gulp 去执行

### webpack

* webpack 初衷是模块打包机，基于文件中的依赖关系对文件编译打包，通过 loader 对不同类型的模块进行处理，使用 plugin 来添加额外的功能
* 因为 webpack 是基于模块化，因此可以做代码优化（tree-shaking），代码分割
* webpack 自己实现require，modules.exports，export，让浏览器可以兼容 cjs 和 esm 语法

### rollup

* 适用于开发类库、组件，打包体积更小
* webpack 自己实现 polyfill 支持模块语法，rollup 是利用高版本浏览器原生支持esm（所以rollup无需代码注入，代码体积更精简）
* 可以配置对外暴露模块的方式，esm（es6模块）、cjs（commonjs）、umd（兼容3种写法：cjs，amd，global（global可以初步理解为直接通过window传值）），因此更适合打包类库

## 2 Loader 和 Plugin 区别

* loader 是加载器，webpack 中把一切文件都视为模块，但是 webpack 原生只能解析 js 文件，loader 的作用就是让 webpack 有了加载和解析非 js 文件的能力
* plugin 是插件，用来扩展 webpack 的功能，同时让 webpack 具有更多可能性，在 webpack 运行的生命周期中会广播许多事件，plugin 可以监听这些事件，在合适的时机通过提供的 api 改变输出结果

## 3 webpack 构建流程

* 初始化参数，从配置文件和shell语句中读取与合并参数，得出最终参数
* 开始编译：用上一步得到的参数初始化 Complier 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
* 确定入口：根据配置中的 entry 找出所有的入口文件
* 编译模块：从入口文件出发，调用多有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口的依赖文件都经过了本步骤的处理
* 完成模块编译：再经过上一步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
* 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
* 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

## 4 常见的loader和plugin，它们的作用

### loader

* babel-loader：高版本js -> 低版本js
* css-loader：处理 js 文件中引入的 css 模块，打包后css代码最终在js文件中
* style-loader： 把 css-loader 识别的 css 模块插到 dom 中
* file-loader：把资源文件拷贝到输出目录，并替换代码中的地址
* url-loader： file-loader 的增强版，可以把小于limit限制的文件转换成 base64 格式
* sass/less-loader：css 预处理

### plugin

* html-webpack-plugin：自动生成带有入口文件引用的 html 文件
* terser-webpack-plugin：压缩 js 文件，会开启多线程
* MiniCssExtractPlugin：和style-loader 作用一样，但是可以压缩css 文件，支持 css sourceMap，但是不支持热更新
* copy-webpack-plugin：拷贝文件，有些静态资源，在打包过程中没有任何模块使用到它们，但要把它们放在打包后的资源输出目录
* clean-webpack-plugin：清空本地已有的打包资源，来减少它们对磁盘空间的占用
* html-minimizer-webpack-plugin：压缩html
* CssMinimizerWebpackPlugin：可以去除无用的css代码
* webpack-bundle-analyzer：显示打包后的bundle，帮助分析和优化打包

## 5 source map 作用和使用

见另一个文档

## 6 使用 webpack 优化性能

### 内置功能

* 压缩css、js、图片
* 小图片转 base64 减少请求
* 去掉无用 css 代码
* tree-shaking（production 默认开启）
* Scope Hoisting 作用域提升，通过分析引用合并变量声明，减小打包体积（production 默认开启）

### 代码分割（splitChunks）

为什么要分割代码：

* 多页面情况，每个页面由于采用相同技术栈和样式代码，会包含很多公共代码，如果都包含进来会有问题
* 相同的资源被重复的加载，浪费用户的流量和服务器的成本；
* 每个页面需要加载的资源太大，导致网页首屏加载缓慢，影响用户体验。
* 如果能把公共代码抽离成单独文件进行加载能进行优化，可以减少网络传输流量，降低服务器成本

如何分割：

* 基础类库，方便长期缓存
* 页面之间的公用代码
* 各个页面单独生成文件

首先要清楚动态引入的代码无论如何都是会被拆分的，基本配置如下：

```js
// webpack.config.js

 optimization: {
  splitChunks: {
      chunks: "all", //默认作用于异步chunk，值为all/initial/async
      minSize: 0, //默认值是30kb,代码块的最小尺寸
      minChunks: 1, //被多少模块共享,在分割之前模块的被引用次数
      maxAsyncRequests: 2, //限制异步模块内部的并行最大请求数的，可以理解为是每个import()它里面的最大并行请求数量
      maxInitialRequests: 4, //限制入口的拆分数量
      name: true, //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
      automaticNameDelimiter: "~", //默认webpack将会使用入口名和代码块的名称生成命名,比如 'vendors~main.js'
      cacheGroups: {
        //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
        vendors: {
          chunks: "all",
          test: /node_modules/, //条件
          priority: -10, ///优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中,为了能够让自定义缓存组有更高的优先级(默认0),默认缓存组的priority属性为负值.
        },
        commons: {
          chunks: "all",
          minSize: 0, //最小提取字节数
          minChunks: 2, //最少被几个chunk引用
          priority: -20
        }
      }
    }
```

all 和 initial 区别

* initial：在 a 中同步引入 react，在 b 中动态引入的 react，它其实可以被抽成一个文件供两者使用的，但是因为引入方式不同，配置为 initial 时会被打包成两份
* all：不关心引入的模块是动态方式还是同步方式，

## 7. 如何提高webpack的构建速度

### 
















