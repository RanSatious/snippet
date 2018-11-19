# basic usage of Git

## config

```
git config [--global] name [value]
git config -l | --list
```

## init

```
git init
```

## add && commit file

```
git add <filename>
git commit -m <message>
```

or

```
git commit -a -m <message>
```

## branch

show branch info:

```
git branch [-v | -vv]
```

add and switch to branch:

```
git branch <name>
git checkout <name>
```

```
git checkout -b <name>
```

delete branch:

```
git branch -d <name>
```

## remote

show remote info:

```
git remote [-v | -vv]
```

add remote:

```
git remote add <name> <url>
```

remove remote:

```
git remote remove <name>
```

push to remote:
**-u** add upstream (tracking) reference

```
git push -u <remote> <branch>
```

pull from remote:

```
git fetch <remote>
git merge <branch>
```

or

```
git pull <remote> <branch>
```

## clone

```
git clone <url>
```

## status

```
git status
```

## log

```
git log [--graph]
```

```
git reflog
```

## help

```
git help [command]
```

## references

- [Pro Git](https://git-scm.com/book/zh/v2)
- [廖雪峰的 Git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
