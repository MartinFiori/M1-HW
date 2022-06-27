function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
    this.total = 1;
}


BinarySearchTree.prototype.insert = function (value) {
    if (value > this.value) {
        if (this.right) this.right.insert(value);
        else this.right = new BinarySearchTree(value);
    } else {
        if (this.left) this.left.insert(value);
        else this.left = new BinarySearchTree(value);
    }
    this.total++;
}

BinarySearchTree.prototype.size = function () {
    let count = 1;
    if (!this.left && !this.right) return count;
    if (this.left) {
        this.left.size();
        count++;
    }
    if (this.right) {
        this.right.size();
        count++;
    }
    return count;
}

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) return true;
    if (value < this.value) {
        if (!this.left) return false;
        return this.left.contains(value);
    } else {
        if (!this.right) return false;
        return this.right.contains(value)
    }
}

const valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]

let tree = new BinarySearchTree(20);
valuesToInsert.forEach(el => tree.insert(el))

console.log(tree.contains(35))