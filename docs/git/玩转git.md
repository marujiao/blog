# 玩转git


# 1.配置别名

```shell
# 配置别名 将commit简写为ci 提交git commit可简写为git ci
git config --global alias.ci commit
git config --global alias.br branch
# 很强大的历史记录 建议试试
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

# 2.拉取代码

```shell
git checkout -b feat-a
git pull origin feat-a
#简写
git checkout -b feat-a origin/feat-a
```

# 3.暂存未提交的代码

```shell
#将代码储存在本地缓存
git stash save "暂存代码"
#切换主分支再拉新分支
git checkout -b fix-b origin/master
```

# 4.stash

```shell
git stash # 暂存当前正在进行的工作，比如想 pull 最新代码，又不想加新 commit，或者为了 fix 一个紧急的 bug，先 stash，使返回到自己上一个 commit，改完 bug 之后再 stash pop, 继续原来的工作
git stash save "message" # 暂存时加备注 方便查找
git stash show # 默认显示第一个改动 如果显示其他 git stash show "stash@{1}"
git stash show -p # 改动的具体内容
git stash apply # 恢复第一个存储 恢复其他使用 git stash apply "stash@{1}"
git stash drop "stash@{2}" # 删除stash@{2}存储
git pop # stash apply 和 stash drop 结合体
git stash clear # 清空stash
```

# 5.amend

```shell
#修改上一次提交的提示信息
git commit --amend -m"fix:修改上一次修改"
git push
#只修改文件不修改提交信息
git add.
git commit --amend --no-edit
git push
#修改提交信息和文件
git commit --amend
```

# 6.reset

```shell
#将HEAD回退到上一次提交
git reset HEAD~1
#退回到某一次提交
git reset commitId
#软重置 soft
#退回上一次提交 ~后跟退回前几次提交
git reset --soft HEAD~1
#硬充值 hard
git reset --hard HEAD~1
#重新提交
git commit -am "fix"
#将本地提交覆盖远程提交(慎用)
git push -f
```

# 7.cherry-pick

```shell
#将指定提交合并到master分支
git cherry-pick commitId
```

# 8.checkout

```shell
#快速切回上一个分支
git checkout -
```

# 9.删除分支

```shell
# 删除本地分支
git branch -d fix-xxx
# 删除远程分支
git push origin --delete fix-xxx
# 删除分支名包含fix的分支
git branch | grep 'fix' |xargs git branch -d
# 删除除fix外所有的分支
git branch |xargs git br -d fix
```

# 10.rebase

```shell
git pull --rebase
# 拉取远程代码有冲突时
git add .
# 继续rebase操作
git rebase --continue
git push
# 跳过此布丁操作
git rebase --skip
# 直接退出rebase
git rebase --abort
#将当前分支的提交复制到指定分支
git rebase master
```

