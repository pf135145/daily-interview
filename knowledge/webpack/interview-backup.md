## tree-shaking 实现原理

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

