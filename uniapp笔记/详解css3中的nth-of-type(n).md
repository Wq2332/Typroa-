# 详解css3中的:nth-of-type(n)

*nth-of-type与nth-child的区别，对于初学者来说是一个比较头疼的问题，也是一个初级前端常见的面试题，那么nth-of-type与nth-child有什么区别呢？下面带你彻底弄懂它们之间的区别。*

**MDN上的概念**：

**某个元素`:nth-of-type(n)`**这个[CSS 伪类](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/CSS/Pseudo-classes)是针对具有一组兄弟节点的标签, 用 n 来筛选出在一组兄弟节点的位置。

**某个元素`:nth-child(n)`**这个[CSS 伪类](https://link.zhihu.com/?target=https%3A//developer.mozilla.org/en-US/docs/CSS/Pseudo-classes)首先找到所有当前元素的兄弟元素，, 用 n 来筛选出在当前元素的兄弟元素节点的位置。

我们可以注意到:**nth-of-type他是当前元素的兄弟元素的第n个，而nth-child是当前元素的兄弟节点的第n个当前元素。**

我们可以举个例子，来弄懂他们之间的区别

这是p:nth-child(4) ，他取到了p标签的第4个

![img](https://pic3.zhimg.com/80/v2-42ce09ad7302d9048c58b7f8bf992e3a_720w.jpg)

这是p:nth-of-type(4)，他也取到了p标签的第4个

![img](https://pic2.zhimg.com/80/v2-52e92044866741731117558a0e2febbd_720w.jpg)

但如果我们在 第二个与第三个之间加个h1呢，结果p:nth-of-type(4)取到了p元素的第四个，但是p:nth-child(4)取到的是p元素的第三个，这下我们就可以搞懂啦！

![img](https://pic3.zhimg.com/80/v2-2f064374566c406dde14d7b083aebd76_720w.jpg)

因为**nth-of-type他是当前元素的兄弟元素的第n个，而nth-child是当前元素的兄弟节点的第n个当前元素，**所以p:nth-of-type(4)是第四个p元素，只能是p元素的第四个，即 当前元素:nth-of-type无论中间加入什么元素，都只能是当前元素的第n个，而p:nth-child(4)是取第四个兄弟节点的p元素，所以我们发现第三个p被p:nth-child(4)取到啦。当p:nth-child(4)的第四个兄弟节点不是p元素的话，会怎么样呢？

![img](https://pic3.zhimg.com/80/v2-a5ac386f1d355cda06cf67a6f8f84a96_720w.jpg)

我们可以看到，就取不到p:nth-child(4)了。

总结：**nth-of-type是取当前元素的兄弟元素的第n个，nth-child取的是当前元素的第n个节点的当前元素，**现在你搞懂了吗？