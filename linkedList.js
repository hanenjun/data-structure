var linkedList = function () {
    var heade = null;
    var length = 0;
    var Node = function (element) {
        this.element = element
        this.next = null
    }
    //添加
    this.append = function (element) {
        var node = new Node(element)
        if (heade == null) {
            heade = node
        } else {
            var current = heade
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    //获取
    this.get = function () {
        return heade
    }
    //位置插入
    this.insert = function (element, position) {
        if (position > -1 && position < length) {
            var node = new Node(element)
            if (position == 0) {
                var current = heade;
                heade = node;
                heade.next = current
            } else {
                var index = 0;
                //当前
                var current = heade;
                //上一个
                var previous = null
                while (index < position) {
                    previous = current
                    current = current.next;
                    index++
                }
                previous.next = node
                node.next = current
            }
        }
    }
    this.removeAt = function (position) {
        if (position < length && position>-1 ) {
            if (position == 0) {
                var current = heade
                heade = current.next
            } else {
                var index = 0;
                var current = heade;
                var previous = null;
                while (index < position) {
                    previous = current;
                    current = current.next
                    index++
                }
                previous.next = current.next
            }
            length--
            return current
        }
    }
    this.indexOf = function(element){
        var index= 0;
        var current = heade
        while(current){
            if(current.element == element){
                return index
            }
            index++
            current = current.next
        }
    }
    this.remove = function(element){
      return  this.removeAt(this.insert(element))
    }
    this.isEmpty = function(){
        return length==0
    }
    this.size = function(){
        return length
    }
}