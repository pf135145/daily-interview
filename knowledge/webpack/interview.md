## 1. 构建工具选型

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