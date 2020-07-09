var Queue = function(){
    var item = []
    //添加
    this.enqueue = function(element){
        item.push(element)
    }
    //弹出
    this.dequeue = function (){
       return item.shift()
    }
    //查看队列头
    this.front = function(){
        return item[0]
    }
    //查看队列是否为空
    this.isEmpty = function(){
        return item.length ==0
    }
    //返回队列长度 
    this.size = function(){
        return item.length
    } 
}

//击鼓传花
var names= ['a','b','c','d','e','f','g']
var num = 3
var chuanhua = function(names,num){
    var queue = new Queue()
    for(var i=0;i<names.length;i++){
        queue.enqueue(names[i])
    }
    var out
    while(queue.size() >1){
        for(var i =0;i<num-1;i++){
            queue.enqueue(queue.dequeue())
        }
       out =  queue.dequeue()
    }
    return queue.dequeue()
}
// console.log(chuanhua(names,num))

var PriorityQueue = function(){
    var item = []
    var QueueItem = function(element,priority){
        this.element = element
        this.priority = priority
    }
    this.enqueue = function(element,priority){
        var queueItem = new   QueueItem(element,priority)
        var addid = false
        for(var i =0;i<item.length;i++){
            if(queueItem.priority>item[i].priority){
                item.splice(i,0,queueItem)
                addid = true
                break
            }
        }
        if(!addid){
            item.push(queueItem)
        }
    }
    this.get =function (){
        return item
    }
}
