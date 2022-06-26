function LinkedList() {
    this._length = 0;
    this.head = null;
}

function UserNode(name, email, city) {
    this.name = name;
    this.email = email;
    this.city = city;
}

LinkedList.prototype.add = function (data) {
    let node = new UserNode(data)
    let curr = this.head;
    if (!curr) {
        this.head = node;
        return node;
    }
    while (curr.next) curr = curr.next;
    curr.next = node;
    return node;
}

LinkedList.prototype.remove = function () {
    let curr = this.head;
    if (!curr) return null;
    if (!curr.next) {
        this.head = null;
        return curr.value
    }
    while (curr.next.next) curr = curr.next
    let last = curr.next.value
    curr.next = null;
    return last
}

LinkedList.prototype.search = function (data) {
    let curr = this.head;
    if (!curr) return null;
    if (curr.value == data) return data;
    while (curr != null) {
        if (curr.value == data) return curr.value;
        if (typeof data === 'function' && data(curr.value)) {
            return curr.value;
        }
        curr = curr.next;
    }
    return null;
}


let list1 = new LinkedList();


list1.add(new UserNode('Nimit', 'nimit@fs.com', 'New York'));
list1.add(new UserNode('David', 'david@fs.com', 'New York'));
list1.add(new UserNode('Paul', 'paul@yc.com', 'Mountain View'));
console.log(list1.head)
// console.log(list1.search(function (userNode) {
//     return userNode.name === 'Nimit';
// }))

function removeDuplicates(nums) {
    return nums.reduce((acc, el) => {
        if (!acc.includes(el)) acc.push(el);
        return acc;
    }, []);
};

// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates2([1, 1, 2]))