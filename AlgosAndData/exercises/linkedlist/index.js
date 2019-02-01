// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
   constructor(data, next=null){
        this.data = data;
        this.next = next;
   }
}


class LinkedList {
    constructor(){
        this.head = null;
    }
    //Insert data from first
    insertFirst(data){
         this.head = new Node(data, this.head);
    }

    //Getting the size of the node
    size(){
        let counter = 0;
        let node = this.head;

        while (node){
            counter++;
            node = node.next;
        }
        return counter;
    
    }

    //Getting the first node of the linked list
    getFirst(){
         return this.head; 
    }
    //Gettin the last node of the linked list
    getLast(){
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }
    }
    //Empty the linked list of any nodes
    clear(){
        this.head = null;
    }
    //Remove the first node from the linked list
    removeFirst(){
       if(!this.head){
           return;
       }
       this.head = this.head.next;
       }
    //Remove the last node from the linked list
    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
          this.head = null;
          return;
        }

        let previous = this.head;
        let node = this.head.next; 
        while(node.next){
            previous = node;
            node = node.next;
        }

        previous.next = null;
    } 
    //Insert Last node at the end of the linked list
    insertLast(){
        const last = this.getLast();
        if(last){
            last.next = new Node(data);
        }
        else {
            this.head = new Node(data);
        }
    }  
}


module.exports = { Node, LinkedList };
