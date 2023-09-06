class Queue {
    constructor(){
        this.items = []
    }
    enqueue(item){
        this.items.push(item)
    }
    dequeue(){
        if (this.isEmpty()){
            return "No Item to dequeue"
        }
        return this.items.shift()
    }
    isEmpty(){
        if(this.items.length ==0){
            return true
        }
        return false
    }
    print(){
        this.items.forEach(element => {
            console.log(element)
        });
    }

}

class MonotonicQueue {
    // add element n to the end of the line
     push(n){

     }
    // returns the maximum value in the current queue
    max(){

    }
    // if the head element is n, delete it
    pop(){

    }
}

nums = [1,3,-1,-3,5,3,6,7], k = 3
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40);
queue.enqueue(50);
// queue.print()

[2,1,2,4,3]