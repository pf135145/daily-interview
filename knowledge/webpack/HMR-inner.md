## HMR 原理

### HMR 工作流程

![image](https://image-static.segmentfault.com/964/661/964661129-f9eb18f0126f0a09_fix732)

HMR 工作流程：

1. 当 Webpack（Watchman） 监听到项目中的文件/模块代码发生变化后，将变化通知 Webpack 中的构建工具（Packager）即 HMR Plugin；
2. 然后经过 HMR Plugin 处理后，将结果发送到应用程序（Application）的运行时框架（HMR Runtime）；
3. 最后由 HMR Runtime 将这些发生变化的文件/模块更新（新增/删除或替换）到模块系统中。

其中，HMR Runtime 是构建工具在编译时注入的，通过统一的 Module ID 将编译时的文件与运行时的模块对应起来，并且对外提供一系列 API 供应用层框架（如 React）调用。

### HMR 完整原理和源码分析

![image](https://image-static.segmentfault.com/261/452/2614526569-ef47a9c9416b9f84_fix732)

要了解上面工作原理，我们先理解图中这几个名称概念：

* Webpack-dev-server ：一个服务器插件，相当于 express 服务器，启动一个 Web 服务，只适用于开发环境；
* Webpack-dev-middleware ：一个 Webpack-dev-server 的中间件，作用简单总结为：通过watch mode，监听资源的变更，然后自动打包。
* Webpack-hot-middleware ：结合 Webpack-dev-middleware 使用的中间件，它可以实现浏览器的无刷新更新，也就是 HMR；
