#总结
###1学习方法
####1.1五毒神掌--一定要多做题，刻意练习，每一题都要多做几遍
####1.2多看题解--没有思路的题要多看题解，取其精华去其糟粕
####1.3都是套路--城市套路深，我要回农村，掌握规律，套用模板
###2.代码模板
####2.1二叉树递归(DFS)
```javascript
function dfs(root) {
  if (!root) return // 递归终止条件
  // 前序遍历逻辑处理
  dfs(root.left)
  // 中序遍历逻辑处理
  dfs(root.right)
  // 后序遍历逻辑处理
}
```
####2.2二叉树递归(BFS-前序)
```javascript
function bfs(root) {
  const stack = [root]
  while (stack.length){
    let q = stack.pop()
    console.log(q.val)
    if (q.right) stack.push(q.right)
    if (q.left) stack.push(q.left)
  }
}
```
####2.3二叉树递归(BFS-中序)
```javascript
function bfs(root) {
  const stack = []
  let node = root
  while (stack.length || node){
    while (node){
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    console.log(node.val)
    node = node.right
  }
}
```
####2.4二叉树递归(BFS-后序)
```javascript
function bfs(root) {
  const stack = [root]
  let node = root
  while (stack.length || node){
    let top = stack[stack.length - 1]
    if (
      top.left === node ||
      top.right === node ||
      (!top.left && !top.right)
    ){
      node = stack.pop()
      console.log(node.val)
    }else {
      top.right && stack.push(top.right)
      top.left && stack.push(top.left)
    }   
  } 
}
```


