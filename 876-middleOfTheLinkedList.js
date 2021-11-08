
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

const middleNode2 = head => {
	let current = head; // current node
	let runner = head; // leading node

	while (runner && runner.next) {
		current = current.next;
		runner = runner.next.next;
	}

	return current;
};

console.log(middleNode2([1,2,3,4,5]))
