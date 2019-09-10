class Node{
    constructor(element){
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addElement(element) {
        let node = new Node(element);
        if (this.size) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.size++;
    }

    printListFront() {
        if (!this.sizeOfList()){
            console.log("The list is empty!");
            return -1;
        }
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    printListBack() {
        if (!this.sizeOfList()){
            console.log("The list is empty!");
            return -1;
        }
        let curr = this.tail;
        let str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.previous;
        }
        console.log(str);
    }

    sizeOfList() {
        return this.size;
    }

    indexOf(element) {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.element === element) {
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }

    searchOf(position) {
        if ((position >= this.size) || (position < 0)) {
            return -1;
        }
        let currentNode = this.head;
        let count = 0;
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.element;
    }

    removeElement(position) {
        if(position < 0 || position > (this.sizeOfList()))
        {
            return -1;
        }
        let i = 1;
        let Del = this.head;
        while(i < position)
        {
            Del = Del.next;
            i++;
        }
        let PrevDel = Del.previous;
        let AfterDel = Del.next;
        if(PrevDel != null && this.sizeOfList() != 1) {
            PrevDel.next = AfterDel;
        }
        if(AfterDel != null && this.sizeOfList() != 1) {
            AfterDel.previous = PrevDel;
        }
        if(position == 1)
            this.head = AfterDel;
        if(position == (this.sizeOfList() - 1)) {
            this.tail = PrevDel;
        }
        Del = null;
        this.size--;
    }
}

let list = new LinkedList();
list.addElement(10);
list.addElement(20);
list.addElement(30);
list.addElement(40);
list.printListFront();
list.printListBack();
console.log("The size of the list is: " + list.sizeOfList());
console.log("Index of element 30: " + list.indexOf(30));
console.log("Searching an element by index 1: " + list.searchOf(1));
list.removeElement(3);
console.log("The list after deleting the third element: " );
list.printListFront();