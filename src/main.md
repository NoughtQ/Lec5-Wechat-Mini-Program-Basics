---
title: Presentation for P1
separator: <!--s-->
verticalSeparator: <!--v-->
theme: simple
highlightTheme: github
css: custom.css
revealOptions:
    transition: 'slide'
    transitionSpeed: fast
    center: false
    slideNumber: "c/t"
    width: 1000
    height: 700
---


<div class="middle center title">
<div style="width: 100%">


# 初识微信小程序

技术部内训 Lec 5

<hr/>



Lecturer: 钱梓洋

Date: 2024/11/29


<!--s-->
<div class="middle center">
<div style="width: 100%">

# Part 1. 引入
<hr/>

<!--v-->
## What?

官方的定义（摘自[微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%AE%80%E4%BB%8B)）：

>小程序是一种全新的连接**用户**与**服务**的方式，它可以在**微信内**被便捷地获取和传播，同时具有出色的使用体验。

<div class="fragment">

更直接的理解：

>小程序可以视为**只能用微信打开和浏览的网站**(by 阮一峰)

</div>

<!--v-->
## Why?

我们为何使用微信小程序——下面来看个例子：

<div class="mul-cols">
<div class="col fragment">

- 某天，你心血来潮，打算中午吃外卖，顺便再买杯咖啡提提神。
    - 如果没有微信小程序的话，你可能要到手机的应用商店里下载某团之类的app。如果人在外面只能用流量下载，或者手机存储空间不够，那么这会带来一点点困扰

</div>

<div class="col fragment">

- 但好在，你的手机里安装了微信。打开微信，在首页搜索“外卖”，映入眼帘的便是和外卖相关的小程序

<div style="text-align: center; margin-top: 0px">
    <img src="images/1.jpg" width="30%">
    <img src="images/2.jpg" width="30%">
</div>

</div>
</div>


<!--v-->
## Comparison

- 微信小程序 vs. 网页
    - 微信小程序：更加轻量化、封装化的开发，并且具有更强的平台集成性（all in 微信开发者工具 & 微信）
    - 网页：更加灵活，可以在不同的平台和浏览器上运行，但需要考虑更多的兼容性和安全性问题


<!--v-->
## Comparison

- 微信小程序 vs. App
    - 微信小程序：
        - 用户角度：具有轻量化、快速启动的特点，适合快速浏览和使用（比如填写各种表格等）
        - 开发者角度：使用HTML、CSS和JavaScript进行开发（~~更适合萌新开发者体质~~）
    - App：
        - 用户角度：提供更丰富的功能和更高的性能，可以实现更复杂的交互和界面效果
        - 开发者角度：通常使用原生开发语言，如Swift（iOS）和Java/Kotlin（Android），或者使用跨平台框架，如React Native、Flutter等

<!--v-->
## Prerequisite

~~先下载微信~~

0. 前面介绍过的前端三件套：HTML、CSS、JavaScript
1. 根据链接给出的步骤[申请账号](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E8%B4%A6%E5%8F%B7)
2. 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，选择稳定版即可（大多数人的电脑应该是 Windows 64位）
3. 下载 [example]()，等会儿我们围绕这个 example 来介绍微信小程序的开发

推荐：vscode 插件安装：

- [wechat-snippet](https://marketplace.visualstudio.com/items?itemName=ChandZhang.wechat-snippet)：微信小程序代码辅助,代码片段自动完成
- [vscode-wechat](https://marketplace.visualstudio.com/items?itemName=qinjia.vscode-wechat)：可以在 vscode 直接预览小程序！


<!--s-->
<div class="middle center">
<div style="width: 100%">

# Part 2. 初识微信开发者工具
<hr/>

<!--v-->
## 新建项目

<div style="text-align: center; margin-top: 0px">
    <img src="images/4.png" width="100%">
</div>

<!--v-->
## 微信开发者工具

（这里缺了张图片，之后补上）

~~似曾相识的感觉，是不是在哪里见过这种 UI~~

<!--v-->
## 微信开发者工具

- ~~个人感觉自带的代码编辑器就是 vscode 的拙劣模仿~~，推荐使用 vscode 敲代码，配合前面提到的插件，体验更佳！
- 小程序的编译和调试还是推荐在微信开发者工具中进行~

<!--v-->
## 文件类型

微信小程序在原有前端文件格式的基础上做了一些魔改，大家可以对照着看看：

- HTML 文件：`.html` -> `.wxml`
- CSS 文件：`.css` -> `.wxss`
- JS 文件：`.js` -> `.js`
- JSON 文件：`.json` -> `.json`


<div class="fragment">

<span style="color: red">提问：回顾一下前面三类文件的功能和作用？</span>

</div>


<div class="fragment">

- HTML：网页の结构与框架

</div>

<div class="fragment">

- CSS：网页の样式（~~让网页变得花里胡哨~~）

</div>

<div class="fragment">

- JS：网页の交互逻辑

</div>


<!--v-->
## JSON 文件概述

全名：JavaScript Object Notation

可以把它视为一个具有多个**键值对**(key-value pair)的**对象**（看起来类似 Python 的字典），有以下的一些规定：

- 键：一定是一个用**双引号**包起来的**字符串**
- 值：数值、字符串、布尔值、数组，甚至也可以是个 JSON 对象
- 对象：外面一定要用一个花括号包起来

Learn more?

- [Wikipedia](https://zh.wikipedia.org/wiki/JSON)
- [现代 JavaScript 教程](https://zh.javascript.info/json)

<!--v-->
## 一个简单的 JSON 文件

```json
{
  "squadName": "Super hero squad",
  "formed": 2016,
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
    },
  ]
}
```

<!--v-->
## 文件目录

<div style="text-align: center; margin-top: -10px">
    <img src="images/6.png" width="100%">
</div>

<!--v-->
## 文件功能详述

<div class="fragment">

- `.wxml` 文件：定义页面的结构/框架/模板/布局，可以使用**小程序的模板语法**，如数据绑定、条件判断、循环等来生成页面的 HTML 结构

</div>
<div class="fragment">

- `.wxss` 文件：几乎同 `.css` 文件，故不再赘述

</div>
<div class="fragment">

- `.js` 文件：在小程序中用于处理整个小程序/单个页面的生命周期函数（比如`onLaunch()`、`onLoad()`、`onShow()`等），数据与方法等

</div>
<div class="fragment">

- `.json` 文件：作用类似 `.wxss` 文件，用于配置页面的属性和样式，比如页面标题、窗口样式、导航栏样式等
    - 在`app.json`文件（全局配置）中，它还可以控制页面的**路由**(route)（包括配置页面路径和切换方式等）

</div>

<div class="fragment">

<span style="color: red">提问：如何新增一个页面呢？</span>

</div>

<!--s-->
<div class="middle center">
<div style="width: 100%">

# Part 3. 微信小程序的特殊语法
<hr/>

<!--v-->
## Warmup

在学习基本语法前，不妨先实操一下之前学过的前端知识

<!-- 在刚刚新建的网页目录下输入下面的内容 -->

看我演示！

<!--v-->
## WXML


<!--v-->
## WXSS



<!--v-->
## JS


<!--s-->
<div class="middle center">
<div style="width: 100%">

# Part 4. 总结
<hr/>

<!--v-->
## 今天我们学了啥(⊙_⊙)?

<div class="fragment">

- 了解微信小程序的基本概念

</div>
<div class="fragment">

- 微信开发者工具的简单使用

</div>
<div class="fragment">

- 微信小程序的各类文件及其文件结构
    - `.wxml`
    - `.wxss`
    - `.js`
    - `.json`

</div>
<div class="fragment">

- 掌握一些微信小程序特有的基本语法

</div>
<div class="fragment">

Learn more?

- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)：~~个人认为写得有点烂，不太适合新手上门~~
- [阮神的微信小程序入门教程](https://www.ruanyifeng.com/blog/2020/10/wechat-miniprogram-tutorial-part-one.html)：墙裂安利！
 
</div>


<!--v-->
## 最后的碎碎念

下面我想讲的内容和今天的主题没什么关系，但我希望任何一位对（泛）CS方向感兴趣的同学能够在课后抽些时间阅读这些材料（可能你们从其他学长那边听说过了），我相信这对各位的CS素养的提升产生不小的帮助！

<div class="fragment">

- [xg 的「实用技能拾遗」系列辅学课程](https://slides.tonycrane.cc/PracticalSkillsTutorial/)：CS 技能 Get!
    - 至少要把 23 秋冬学期的 [lec0](https://slides.tonycrane.cc/PracticalSkillsTutorial/2023-fall-ckc/lec0) 给看完~
    - 今天讲课用的课件[模板](https://github.com/TonyCrane/slide-template)就是 xg 做的，给 xg 膜一个 orz
- [The Missing Semester](https://missing-semester-cn.github.io/)：MIT开设的课程，相比校内开的课程讲得更深入
- [大Q老师的《谈谈如何让自己看上去、闻上去都像一个CS人》](https://www.cc98.org/topic/5370849)：值得反复诵读的经典 orz
- [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)：CS 人应该掌握的沟通技巧

</div>

<!--v-->
## 最最最后附上一些有用资料

- [ZJU 笔记大全](https://isshikihugh.github.io/zju-cs-asio/)：可能是你期末周补天的救命稻草
    - ~~里面有我的笔记~~

- [图灵班学习指南](https://zju-turing.github.io/TuringCourses/)：里面的学习经验即使对非图灵班同学也很有用！

- [浙江大学课程攻略分享计划](https://github.com/QSCTech/zju-icicles)：包含了几乎所有专业大多数课程的资料！  
    - 虽然ZJU是最早一批发起这一项目的学校，但是现在维护状况堪忧，里面的资料过于成就，最新资料还是去98或者别的学长学姐的仓库里翻吧


<!--s-->
<div class="middle center title">
<div style="width: 100%">

# Thanks for Watching!

<hr/>

Any Questions?