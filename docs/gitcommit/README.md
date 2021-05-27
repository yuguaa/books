---
sidebar: auto
---

# 代码整洁之道和 git

## 类

1、类应该从一组变量列表开始。如果有公共静态常量，应该先出现。然后是私有静态变量，以及私有实体变量。很少会有公共变量。公共函数应跟在变量列表之后。而公共函数调用的私有工具函数紧随在该公共函数后面。这符合了自顶向下原则，让程序读起来就像一篇报纸文章。

2、想办法使之保有隐私。放松封装总是下策。

**3、类应该短小，这个短小用类的权责来衡量。类的名称应当描述其权责。实际上，命名正是帮助判断类的长度的第一个手段。如果无法为某个类命以精确的名称，这个类大概就太长了。类名越含混，该类越有可能拥有过多权责。**

**4、单一权责原则。单一权责原则（SRP）认为，类或模块应有且只有一条加以修改的理由。如果一个类承担的职责过多，就等于把这些职责[耦合](https://baike.baidu.com/item/耦合/2821124)在一起了。一个职责的变化可能会削弱或者抑制这个类完成其他职责的能力。这种耦合会导致脆弱的设计，当发生变化时，设计会遭受到意想不到的破坏。而如果想要避免这种现象的发生，就要尽可能的遵守单一职责原则。此原则的核心就是[解耦](https://baike.baidu.com/item/解耦)和增强[内聚性](https://baike.baidu.com/item/内聚性/4973441)。**

5、系统应该由许多短小的类而不是少量巨大的类组成。每个小类封装一个权责，只有一个修改的原因，并与少数其他类一起协同达成期望的系统行为。

6、类应该只有少量实体变量。类中的每个方法都应该操作一个或多个这种变量。保持函数和参数列表短小的策略，有时会导致为一组子集方法所用的实体变量数量增加。出现这种情况时，往往意味着至少有一个类要从大类中挣扎出来。你应当尝试将这些变量和方法分拆到两个或多个类中，让新的类更为内聚。

7、将大函数拆为许多小函数，往往也是将类拆分为多个小类的时机。因为这往往会多出许多实体变量，降低了类的内聚性。

**8、开放-闭合原则（OCP）：类应当对扩展开放，对修改封闭、**

9、在理想系统中，我们通过扩展系统而非修改现有代码来添加新特性。

10、依赖倒置原则（Dependency Inversion Principle, DIP）。类应当依赖于抽象而不是依赖于具体细节。

<img src="https://static01.imgkr.com/temp/8ca90d6945fa45c088b49fa34e9f5944.png" alt="代码"  />
<img src="https://static01.imgkr.com/temp/569632add7274dc0ad4437ecd553c7c3.png" alt="结果" />

**感受：类和方法都只做好一件事**

## GIT 提交规范

`git`作为一个开发人员必不可少的工具，代码提交也是日常一个非常频繁的操作，如果你或你的团队目前对提交信息还没有一个规范或约束，那么你有必要看看本文的内容了。

## 为什么要规范提交信息

首先规范提交信息肯定是有必要的，简单总结下几点好处：

- 让项目的维护或使用人员能了解提交了哪些更改
- 清晰的历史记录，可能某天自己就需要查到呢
- 规范的提交记录可用于自动生成修改日志(CHANGELOG.md)
- 基于提交类型，触发构建和部署流程

### **先看大厂（大佬）提交的规范。**

![大佬提交规范](https://static01.imgkr.com/temp/76eda84d309c415ea405152611f34904.png)

![大佬项目日志](https://static01.imgkr.com/temp/539dcc22ccbf4719aedb394ce476f1f7.png)

### **优秀开源作品**

![vben-admin](https://static01.imgkr.com/temp/edec3c9b9b904d24bf5f0edb99c97c29.png)
![vben-admin-chang](https://static01.imgkr.com/temp/e992837edb1e426299b505a88325bc7c.png)

在项目开发中，通常都会涉及到多人合作，那么经常就会出现代码风格不一致、提交信息混乱甚至还有代码报错的情况。有可能从远程仓库拉取下来的代码与你的本地代码只是格式不一致而引起冲突或者不是你使用的代码风格，还得去修复和调整。

![340b445cfa9187c78c65a864a53b0187.png](https://img-blog.csdnimg.cn/img_convert/340b445cfa9187c78c65a864a53b0187.png)

### **规范流程**

就个人理解开发规范流程包含了代码语法规则检查(`Linter`)、代码风格格式化(`Formatter`)以及 git 提交校验(`Pre-Commit Check`)等。

- 代码语法规则检查：主要是指利用一些代码检测工具(如`ESLint`、`TSLint`等)对语法规则和代码风格进行检查、提示以及自动修复。比如禁止使用`==`、禁止在变量定义之前使用它们等，其中的校验规则是可以根据团队和个人的习惯自由配置的。
- 代码风格格式化：是指利用一些代码格式化工具(如`ESLint`、`Prettier`等)根据设定规则重新输出格式规范的代码，以避免因不同成员代码风格不一致而产生冲突和带来的代码阅读、理解成本。
- git 提交校验：是指在代码提交时，调用`pre-commit`钩子对代码语法和代码风格进行检查和修复，调用`commit-msg`钩子对 commit message 进行校验。若校验未通过，则提交失败，并抛出相应错误。

### 使用什么规范

**`Conventional Commits`(约定式提交规范)**，是目前使用最广泛的提交信息规范，其主要受 [AngularJS 规范 ](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)的启发,下面是一个规范信息的结构：

```javascript
<type>[optional scope]: <subject>
//空一行
[optional body]
//空一行
[optional footer(s)]
```

### 规范说明

**`type`** 提交的类别，必须是以下类型中的一个

```
feat：增加一个新功能
fix：修复bug
docs：只修改了文档
style：做了不影响代码含义的修改，空格、格式化、缺少分号等等
refactor：代码重构，既不是修复bug，也不是新功能的修改
perf：改进性能的代码
test：增加测试或更新已有的测试
chore：构建或辅助工具或依赖库的更新
```

**`scope`** 可选，表示影响的范围、功能、模块

**`subject`** 必填，简单说明，不超过 50 个字

**`body`** 选填，用于填写更详细的描述

**`footer`** 选填，用于填关联`issus`,或`BREAK CHANGE`

### 使用

- **安装**

```cmd
# 或者本地安装
$ npm install --save-dev commitizen
# 安装适配器
npm install cz-conventional-changelog --save-dev
```

- **`packages.json`在配置文件中指定使用哪种规范**

```
"config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
```

- **安装完成后可以使用`npm run commit` 来代替`git commit`,然后根据提示一步步输入即可**

```
{
"commit": "git-cz"
}
```

![git1](https://static01.imgkr.com/temp/d3a442683e464099988c6a2b7716c262.png)

![git2](https://static01.imgkr.com/temp/e21f48ad28394723811aee97965cab39.png)

- **生成 changelog 脚本**

  ```js
  "log": "conventional-changelog -p angular -i CHANGELOG.md -s",//追加log
  "log:f": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",//第一次生成log
  ```

  ![log](https://static01.imgkr.com/temp/1c0ac97335ae43079dd2ce84842d5475.png)

### 扩展 1 格式校验 commitlint

可能你不想每次都通过交互界面来生成，还是想使用`git commit -m 'message'`，那么为了确保信息的正确性，可以结合`husky`对提交的信息进行格式验证

- **安装依赖**

```
npm install --save-dev @commitlint/config-conventional @commitlint/cli
# 安装husky
npm install --save-dev husky
```

- **添加 `commitlint.config.js`文件到项目**

```js
module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved'
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null
    }
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release'
      ]
    ]
  }
}
```

**`package.json`配置**

```js
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS"//这里配置可校验提交信息
    }
 }
```

### 扩展 2 自动版本管理和生成 CHANGELOG

- **安装依赖**

```
npm i standard-version -D
```

- **添加脚本**

```js
"release": "standard-version"

//其他脚本
"release:alpha": "standard-version --prerelease alpha",
"release:rc": "standard-version --prerelease rc"
```

```
#指定类型 patch/minor/marjor
npm run release -- --release-as patch
#指定版本号
npm run release -- -- release-as 1.1.0
```

![添加tag](https://static01.imgkr.com/temp/abaf1b008a8048c5a90a67230193dbca.png)

![添加changelog](https://static01.imgkr.com/temp/35da8f97e9f54cae8a167a2ba2a84ccf.png)

##### 版本格式

主版本号.次版本号.修订号，版本号递增规则如下：

- 主版本号(major)：当你做了不兼容的 API 修改，
- 次版本号(minor)：当你做了向下兼容的功能性新增，可以理解为 Feature 版本，
- 修订号(patch)：当你做了向下兼容的问题修正，可以理解为 Bug fix 版本。

先行版本号可以加到“主版本号.次版本号.修订号”的后面，作为延伸。

##### 先行版本

当即将发布大版本改动前，但是又不能保证这个版本的功能 100% 正常，这个时候可以发布先行版本：

- alpha: 内部版本
- beta: 公测版本
- rc: 候选版本(Release candiate)

比如：1.0.0-alpha.0,1.0.0-alpha.1,1.0.0-rc.0,1.0.0-rc.1 等。

`standard-version` 会根据提交的信息类型来自动更改对应的版本号,如下:

- feat: 次版本(minor)+1
- fix: 修订号(patch) +1
- BREAK CHANGE: 主板号(marjor) +1

> `standard-verstion` 生成的`CHANGELOG`只会包含`feat`,`fix`,`BREACK-CHANGE`类型的提交记录
