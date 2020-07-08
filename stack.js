var stack = function (){
    var item = [];
    //入栈
    this.push = function(element){
        item.push(element)
    }
    //出栈
    this.pop = function(){
        item.pop()
    }
    //检查item
    this.get = function (){
        return item
    }
    //获取栈顶
    this.peek = function (){
        return item[item.length-1]
    }
    //检查是否为空
    this.isEmpty = function(){
        return item.length == 0
    }
    //清除栈
    this.clear = function (){
        item = []
    }
    //栈的大小
    this.size = function (){
        return item.length
    }
}