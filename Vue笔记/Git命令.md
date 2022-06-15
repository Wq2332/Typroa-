# Git命令

<img src="C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220615101356311.png" alt="image-20220615101356311" style="zoom:200%;" />

1. ### git config --global user.name ""  配置全局name

2. ### git config --global user.email "515475323@qq.com"配置全局邮箱

3. 查找配置文件，C盘下的user文件下的gitconfig文件C:\Users\HP

4. git config --list --global 查看所有全局配置项

5. git config -h 获取git config 命令

6. git init 将目录转化为git仓库

7. git status -s查看文件处于什么状态

8. git add 开始跟踪文件 --添加所有文件 git config/*添加config目录下所有文件

9. git commit 进行提交 -m选项是加入描述

10. git checkout --文件名  撤销文件修改

11. git reset HEAD 文件名  从暂存区移除对应文件

12. git commit -a -m 跳过暂存区直接提交

13. git rm -f 文件名 从git仓库与工作区同时移除   

14. git rm --cached 文件名 从git仓库中移除，但是保留在工作区

15. ![image-20220615112103304](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220615112103304.png)