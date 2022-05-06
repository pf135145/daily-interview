## HMR 模块热替换

HMR 全称：Hot Module Replacement，是无需完全刷新整个页面的同时，更新模块。可以**保留当前的页面状态**，比如复选框的选中状态、输入框的输入，唤起的弹窗，节省开发时间，提升开发体验

### 开启方式

#### 方式一：使用 devServer

```js
// webpack.config.js

const webpack = require('webpack')
module.exports = {
     // ...
+    devServer: {
+        hot: true,   // 启动模块热更新 HMR
+    },
   plugins: [
+       new webpack.HotModuleReplacementPlugin()
   ]
}

// package.json
{
  // ...
  "scripts": {
+    "start": "webpack-dev-server"
  }
}
```
#### 方式二、使用命令行参数

另一种是通过添加 --hot 参数来实现。添加 --hot 参数后，devServer 会告诉 Webpack 自动引入 HotModuleReplacementPlugin ，而不需要我们手动引入。

```js
// package.json
{
  // ...
  "scripts": {
+    "start": "webpack-dev-server --hot"
  },
  // ...
}
```

### 使用方式

当我们启用了 HMR，它的接口将被暴露在全局 module.hot  属性下面。通常，可以先检查这个接口是否可访问，然后开始使用它。

```js
// hello.js
export default () => 'hi leo!';

// index.js
import hello from './hello.js'
const div = document.createElement('div');
div.innerHTML = hello();
document.body.appendChild(div);

+ if (module.hot) {
+   module.hot.accept('./hello.js', function() {
+     console.log('现在在更新 hello 模块了~');
+     div.innerHTML = hello();
+   })
+ }
```

然后修改 hello.js 文件内容，测试效果：

```js
- export default () => 'hi leo!';
+ export default () => 'hi leo! hello world';
```
