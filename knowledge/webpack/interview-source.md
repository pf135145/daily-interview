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
