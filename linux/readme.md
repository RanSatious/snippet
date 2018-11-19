# commands on linux

## ssh-key

### 生成 ssh-key

```
ssh-keygen -t rsa -C "xxx@xx.com" -f ~/.ssh/github_id_rsa
```

**-t** 密匙类型
**-C** 注释
**-f** 密匙名

### 配置多个 ssh-key

1. 生成 ssh-key1：

```
ssh-keygen -t rsa -C 'xxxxx@company.com' -f ~/.ssh/gitee_id_rsa
```

2. 生成 ssh-key2：

```
ssh-keygen -t rsa -C 'xxxxx@qq.com' -f ~/.ssh/github_id_rsa
```

3. 在 **~/.ssh** 目录下新建 **config** 文件，添加如下内容：

```
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
```

## references

- [公钥管理 - 码云](https://gitee.com/help/categories/38)
