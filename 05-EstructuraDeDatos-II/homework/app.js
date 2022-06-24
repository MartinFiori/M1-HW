function LinkedList() {
    this._length = 0;
    this.head = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (data) {
    let node = new Node(data)
    let current = this.head;
    if (!current) {
        this.head = node;
        this._length++;
        return node;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    this._length++;
    return node;
}

LinkedList.prototype.remove = function () {
    this._length--;
    let current = this.head;
    let found;
    if (current === null) return null;
    if (current.next === null) {
        current.head = null;
        return current.value
    }
    while (current.next != null) {
        if (current.next.next == null) {
            found = current.next;
            current.next = null;
        } else {
            current = current.next;
        }
    }
    return found;
}
LinkedList.prototype.search = function (data) {
    // if (this.head == null) return undefined;
}


let list1 = new LinkedList();

// list1.add('fede')
// list1.add('franco')
// list1.add('wada')
// list1.add('mati')
// list1.add('carlos')
// list1.add('rosana')
// console.log(list1.remove())
// console.log(list1.remove())
// arr.pop
// console.log(list1.head.next.next.next.next)

var removeDuplicates = function (nums) {
    return nums.filter((el,index)=> nums.indexOf(el) === index)
};

var removeDuplicates2 = function (nums) {
    return nums.reduce((acc,el)=>{
        if(!acc.includes(el)) acc.push(el);
        return acc;
    },[])
};

// console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates2([1, 1, 2]))