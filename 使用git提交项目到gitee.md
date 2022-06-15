# 使用git提交项目到gitee

## 1、进入项目文件夹，打开git，输入git init，文件夹中出现git文件夹

## 2、 输入git remote add origin+仓库路径

![image-20220509221521426](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220509221521426.png)

## 3、输入git pull origin master拉取文件

## 4、输入 git add .添加文件

## 5、输入git commit -m "一般写项目更新了什么内容"

## 6、输入git pull --rebase origin master

常见的错误
报错内容基本都是error: failed to push some refsto‘远程仓库地址’。

导致产生原因
我们想把自己本地的某个项目关联到远程仓库并推送上去

操作
本地项目—>远程仓库—>本地关联远程—>推送最新代码
错误往往发现在最后一个步骤

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200522092950149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODkzOTk5,size_16,color_FFFFFF,t_70)

根本原因
我们在创建仓库的时候，都会勾选“使用Reamdme文件初始化这个仓库”这个操作初识了一个README文件并配置添加了忽略文件。当点击创建仓库时，

它会帮我们做一次初始提交。于是我们的仓库就有了README.m和.gitignore文件，然后我们把本地项目关联到这个仓库，并把项目推送到仓库时，我们在关联本地与远程时，两端都是有内容的，但是这两份内容并没有联系，当我们推送到远程或者从远程拉取内容时，都会有没有被跟踪的内容，于是你看git报的详细错误中总是会让你先拉取再推送，但是拉取总是失败。

解决办法
对于error: failed to push some refsto‘远程仓库地址’
1 使用如下命令
git pull --rebase origin master

2 然后再进行上传:

git push -u origin master

推送成功

![img](https://img-blog.csdnimg.cn/20200522093241788.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1ODkzOTk5,size_16,color_FFFFFF,t_70)

## 7、输入git push -u origin master 



今天使用git 添加远程[github](https://so.csdn.net/so/search?q=github&spm=1001.2101.3001.7020)仓库的时候提示错误：fatal: remote origin already exists.

最后找到解决办法如下：
1、先删除远程 Git 仓库

$ git remote rm origin

2、再添加远程 Git 仓库

$ git remote add origin git +仓库路径



## 8、如果是空仓库，只需要进行1，2，4，5，7步骤