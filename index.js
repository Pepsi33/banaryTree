;(function (g) { 
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    function BinaryTree(){
        this.root = null;
    }
    
    // 插入节点
    BinaryTree.prototype.insert = function (data) { 
        var newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }
    
    // 找查
    BinaryTree.prototype.findNode = function (data) {
        this._findNode(this.root, data);
    }
    
    // 获取最小节点
    BinaryTree.prototype.getMinNode = function (node) {
        this._getMinNode(node || this.root);
    }
    
    // 获取最大节点
    BinaryTree.prototype.getMaxNode = function (node) {
        this._getMaxNode(node || this.root);
    }
    
    // 删除节点
    BinaryTree.prototype.removeNode = function (data) {
        this._removeNode(this.root, data);
    }
    
    // 前序遍历
    BinaryTree.prototype.preOrder = function (callback) {
        var backs = [];
        var proOrderTraverseNode = function (node, callback) { 
            if (node !== null) {
                backs.push(callback(node.data));
                proOrderTraverseNode(node.left, callback);
                proOrderTraverseNode(node.right, callback);
            }
        }
        proOrderTraverseNode(this.root, callback);
        return backs;
    }

    // 中序遍历
    BinaryTree.prototype.inOrder = function (callback) {
        var backs = [];
        var inOrderTraverseNode = function (node, callback) { 
            if (node !== null) {
                inOrderTraverseNode(node.left, callback);
                backs.push(callback(node.data));
                inOrderTraverseNode(node.right, callback);
            }
        }
        inOrderTraverseNode(this.root, callback);
        return backs;
    }

    // 后序遍历
    BinaryTree.prototype.postOrder = function (callback) {
        var backs = [];
        var postOrderTraverseNode = function (node, callback) { 
            if (node !== null) {
                postOrderTraverseNode(node.left, callback);
                postOrderTraverseNode(node.right, callback);
                backs.push(callback(node.data));
            }
        }
        postOrderTraverseNode(this.root, callback);
        return backs;
    }


    // 插入新的节点
    BinaryTree.prototype._insertNode = function(node, newNode){
        if (node.data > newNode.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }
    // 删除节点
    BinaryTree.prototype._removeNode = function(node, data) {
        if (node === null) return null;
        if (node.data === data) {
            if (node.left === null && node.right === null)  return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            // left、right 均存在
            var _node = _this.getMinNode(node.right);
            node.data = _node.data;
            node.right = this._removeNode(node.right, data);
            return node;
        } else if (data < node.data) {
            node.left = this._removeNode(node.left, data);
            return node;
        } else {
            node.right = this._removeNode(node.right, data);
            return node;
        }
    }
    // 找查节点
    BinaryTree.prototype._findNode = function(node, data) {
        if (node === null) return false;
        if (node.data === data) return node;
        return this._findNode((data < node.data) ? node.left : node.right, data);
    }
    // 获取最小值节点
    BinaryTree.prototype._getMinNode = function(node) {
        return node ? (node.left ? this._getMinNode(node.left) : node) : null;
    }
    //获取最大节点
    BinaryTree.prototype._getMaxNode = function(node) {
        return node ? (node.right ? this._getMaxNode(node.right) : node) : null;
    }

    g.BinaryTree = BinaryTree;

}(window))

var tree = new BinaryTree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(6);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

const cb = data => data;
console.log(tree);
console.log('前序遍历:', tree.preOrder(cb))
console.log('中序遍历:', tree.inOrder(cb))
console.log('后序遍历:', tree.postOrder(cb))
var warp = document.getElementById('text');

warp.innerHTML = JSON.stringify(tree);

