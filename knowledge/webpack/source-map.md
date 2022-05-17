## source-map

### 作用

前端代码上线前要经过编译（ts->js，es6->es5）、合并、压缩，出现问题的时候定位困难，因此需要通过 source map 找到原始代码定位问题

### .map文件包含信息

* version：source map 版本
* sources： 转换前的文件。该项是一个数组，可能存在多个文件合并成一个文件
* names: 转换前的所有变量名和属性名
* mappings: 记录位置信息的字符串
* sourceContent: 原始内容

### 原理

```json
"sources": [ 
    "src/example.js" 
  ], 
  "names": [ 
    "example", 
    "console", 
    "log" 
  ], 
  "mappings": ";;AAAA,IAAMA,OAAO,GAAG,SAAVA,OAAU,GAAM;AACpBC,EAAAA,OAAO,CAACC,GAAR,CAAY,SAAZ;AACD,CAFD", 
  "sourcesContent": [ 
    "const example = () => {\n  console.log(\"example\");\n};\n" 
  ] 
```
mappings 字段含义：编译后单词位置+文件名+编译前单词位置，分号代表换行，这样就能通过 map 文件中的字段把编译后的文件转换成编译前的文件

## webpack

source map 是用来记录编译后代码到原始代码的映射关系，所以理论上每一个编译过程都可以产生一份 source map，如 ts 转 js，es6 转 es5，代码压缩等等。webpack 中的source map 是将每一步生成的 source map合并起来的最终结果

### webpack 中的各种 sourcemap

webpack 通过 devtool 控制需要生成的 source map 类型

* cheap：速度较快的一种选择，因为生成的source map中不会有列信息而只有行信息，编译计算量少，不过loader输出的source map信息不会被采用
* module： loader输出的source map信息会被采用，这样可以看到loader处理前的原始代码，该配置对应于 cheap，其他情况不需要单独配置
* inline： 生成的source map是经过Base64格式编码的，这个词也会产生map文件，但map文件是经过Base64编码后，作为DataURI内嵌
* eval: 使用eval包裹模块代码，可以提高rebuild的速度
* hidden：bundle里不包含source map的引用地址，这样浏览器开发者工具里看不到原始代码

### eval

eval 模式是使用 eval 将 webpack 中每个模块包裹，然后在模块末尾添加模块来源**souceURL**， 依靠 souceURL 找到原始代码的位置，此选项会非常快地构建

缺点：映射到转换后的代码，不能准确展示行数和信息

### source-map

最标准的 source-map 打包形式，在编译后的 js 文件中通过 sourceMappingURL 字段对应到相应的 .map 文件，错误信息最准确

缺点：打包慢

### inline-source-map

不生成单独 .map 文件，产生的 map文件内容通过 Base64 编码后内嵌到编译后的 js 文件中，效果同 source-map，但是产生的 js 文件会很大，可用于一些第三方工具

### hidden-source-map

同样生成 .map 文件，但是编译后的 js 文件中没有 sourceMappingURL 字段，无法对应到源文件，适用于只想收集错误信息，但不想为浏览器开发工具暴露 source map

### eval-source-map

eval 和 source-map 模式的组合，使用 eavl 语句包裹了代码块，同时也产生了.map 文件，js 文件的 sourceMappingURL 指向了生成的 .map 文件

### cheap-source-map

cheap-source-map 生成的 .map 文件要少很多代码，因为产生的 .map 文件不包含列信息，并且**不包含 loader 的 sourcemap**，这句话的意思是如果你使用了诸如 babel 等代码编译工具时， 定位到的原始代码将是经过编译后的代码位置，而非原始代码。

### cheap-module-source-map

同 cheap-source-map，会保留 loader 处理前的代码信息

### nosources-source-map

创建的 .map 文件不包含 sourcesContent，它可以用来映射客户端上的堆栈跟踪，而无须暴露所有的源代码。你可以将 source map 文件部署到 web 服务器。

## source map 文件是否影响网页性能

不会，其实 source map 只有在打开 dev tools 的情况下才会开始下载，大部分用户都不会去打开这个面板，使用抓包工具的话就能发现在打开 dev tools 的时候开始下载 source map 了。

## 最佳实践

### 开发环境

cheap-module-eval-source-map，使用 eval 能加快 rebuild 速度，cheap 模式只有行信息速度也较快

### 生产环境

#### 不考虑 .map 文件的暴露：

直接使用source-map

#### 考虑 .map 文件的暴露：

使用 hidden-source-map，通常会用一些前端监控系统，将源代码以及 source map 文件传到该系统上，JavaScript 出错后上报错误信息，系统使用第三方工具（mozilla/source-map库）还原源代码的报错位置，快速定位线上问题

或者通过服务端白名单配置，来判断是否让用户获取 .map 文件