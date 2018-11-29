# updates && tips of vscode

# 基本配置

## 配置文件

通过 文件 -> 首选项 -> 设置 打开设置文件，设置文件有 json 格式和图形化界面 2 种形式

使用 json 文件编辑器

```json
{ "workbench.settings.editor": "json" }
```

使用设置 ui 编辑器

```json
{ "workbench.settings.editor": "ui" }
```

一些常用的配置项目：

```json
{
  "workbench.colorTheme": "颜色主题",
  "workbench.iconTheme": "图标主题",
  "editor.formatOnSave": "是否在保存时格式化文件",
  "editor.tabSize": "一个制表符等于的空格数量",
  "editor.renderWhitespace": "显示空格的方式",
  "editor.renderControlCharacters": "是否显示控制字符",
  "editor.lineHeight": "行间距",
  "editor.fontFamily": "字体"
}
```

## 代码片段

可以整理自己常用的代码片段，提高开发效率

```json
{
  "js commit": {
    "scope": "javascript,typescript",
    "prefix": "commit",
    "body": ["/** $1 */"],
    "description": "commit some javascript"
  },
  "promise": {
    "scope": "javascript,typescript",
    "prefix": "newPromise",
    "body": ["new Promise((resolve, reject) => {", "\t$1", "})"],
    "description": "promise snippet"
  }
}
```

# 扩展

## 语言包

[简体中文](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)

## Prettier

代码格式化
[https://prettier.io/](https://prettier.io/)

## ESLint

检查 js 语法规范，可使用不同的规范，如 airbnb、standard、google 等
[https://eslint.org/](https://eslint.org/)

## TSLint

检查 ts 语法规范
[https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)

## GitLens

Git 功能增强

## Settings Sync

同步 vscode 设置

## references

- [visual studio docs](https://code.visualstudio.com/docs)
- [visual studio updates](https://code.visualstudio.com/updates)
- [visual studio updates（中文）](https://www.oschina.net/p/visual-studio-code)
- [能让你开发效率翻倍的 VSCode 插件配置（上）](https://juejin.im/post/5a08d1d6f265da430f31950e)
- [能让你开发效率翻倍的 VSCode 插件配置（中）](https://juejin.im/post/5ad13d8a6fb9a028ce7c0721)
- [强大的 VS Code](https://juejin.im/post/5b123ace6fb9a01e6f560a4b)
- [VS Code 折腾记](https://juejin.im/post/586cf732128fe10066602d43)
