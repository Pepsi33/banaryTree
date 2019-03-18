### 二叉树和二叉树搜索
> 二叉树最多2个节点，一个是左侧子节点，一个是右侧子节点。这些定义有助于我们写出更高效的向树中插入、查找和删除节点的算法。 
二叉树搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大（或者等于）的值。

![](https://img-blog.csdn.net/20170915225412499?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcnRoMzYyMTQ3Nzcz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


#### 中序遍历
> 中序遍历是一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。可以应用于树的排序操作
![](https://img-blog.csdn.net/20170917210348575?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcnRoMzYyMTQ3Nzcz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 先序遍历
> 先序遍历是试以优先于后代节点的顺序访问每个节点的。可以应用于打印树的结构文档。 
![](https://img-blog.csdn.net/20170917210411491?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcnRoMzYyMTQ3Nzcz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

#### 后序遍历
> 后序遍历是先访问节点的后代节点，再访问节点本身。后序遍历可以应用于计算一个目录和它的子目录中所有文件所占空间的大小。
![](https://img-blog.csdn.net/20170917210435461?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcnRoMzYyMTQ3Nzcz/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


参考
https://blog.csdn.net/rth362147773/article/details/77996814
