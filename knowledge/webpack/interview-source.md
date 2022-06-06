## 1. loader 类型和执行顺序

### loader 执行时机

![image](https://pic4.zhimg.com/80/v2-87544aa0248259a8111cd017eea92943_720w.jpg)

### 执行顺序

每个loader的执行顺序由两部分组成：

* Pitching 过程，loaders的pitching过程从前到后（1 -> 2 -> 3）
* Normal 过程，loaders的normal过程从后到前（3 -> 2 -> 1）

整个过程有点像 eventListener 的冒泡和捕获过程

![image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee8ce36b85f5409090ecafd7b0dfa06e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

### 影响因素

#### 因素一：pitching方法的返回内容

当一个loader的pitching函数有返回值的时候，就会跳过之后的步骤，直接来到前一个loader的normal阶段

![image](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7af66e5177a463da325f0d36ec102f6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

#### 因素二：Rule.enforce的配置

通过配置：rule.enforce: pre/post/normal 这个配置也会影响loader的执行

![image](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/621ffe2555c244168f212ebada228369~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

#### 因素三：inline-loader

inline-loader 是除开 pre， normal， post 三种 loader 之外的另外一种loader，这种 loader 并不建议我们自己手动加入，而是应该由其他的 loader 自动生成

![image](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5984e855df52489e98e5943f12944c78~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)

```js
// 不同 loader 使用 ！分割
const someModule = import('inline-loader-a!inline-loader-b!./someModule.js');
```
### loader-runner

loader 的实现本质上是一个方法，输入一个模块后，在 webpack 内部由 loader-runner 负责组织和调用 loader

![image](https://pic4.zhimg.com/80/v2-aaf357e351a5ccca061c406fb061400b_720w.jpg)

## 2. 描述一下编写loader的思路

* 原来的是什么东西
* 转换成什么东西
* 怎么转


## 3. tree-shaking 实现原理

### 前提

相比于 CommonJs，ESM 方案要求所有的导入导出语句只能出现在模块顶层，模块之间的依赖关系是高度确定的，与运行状态无关，编译工具只需要对 ESM 模块做静态分析，就可以从代码字面量中推断出哪些模块值未曾被其它模块使用，这是实现 Tree Shaking 技术的必要条件。

### 实现原理

* Webpack 先收集模块导出信息，标记各个模块中，哪些导出值有被其它模块用到，哪些没有
* \_\_webpack_exports\_\_ 只导出被引入的模块，而没有使用的模块不会被导出
* 没有使用的模块会打上/* unused harmony export square */ 的注释标识
* 通过由 Terser、UglifyJS 等工具删除这些带标记的模块以及一些无用的代码（比如函数内一些无用的变量声明）

> 标记功能需要配置 optimization.usedExports = true 开启

#### 实现按需加载

* 收集模块导出信息，按不同模块去查找模块对应的代码
* 解构引入方式，从引入整个模块改为引入单个文件

```js
import { flatten, concat } from "lodash";

// 转换为
import flatten from "lodash/flatten";
import concat from "lodash/flatten";
```