#### 为了规范项目的 git 使用，在提交代码前会强制进行 eslint 和 stylelint 的检查

#### 在进行 commit 提交时必须填写消息说明

#### 消息格式如下：

```
<type>: <subject>
注意冒号后面有空格

type
用于说明 commit 的类别，只允许使用下面7个标识，也可以自己在配置文件中更改或者扩展。
标准类型如下：
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式方面的优化
refactor：重构
test：测试
chore：构建过程或辅助工具的变动

subject
subject是 commit 目的的简短描述，不能超过50个字符，且结尾不加英文句号。

如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。
```
