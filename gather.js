var Set = function (){
    var items = {}
    var length=  0
    this.has = function(val){
        return items.hasOwnProperty(val)
    }
    this.add = function(val){
        if(!this.has(val)){
            items[val] = val
            length++
            return val
        }
        return false
    }
    this.remove = function(val){
        if(this.has(val)){
            delete items[val]
            length --
            return true
        }else{
            return false
        }
    }
    this.get = function(){
        return items
    }
    this.clear = function(){
        items = {}
    }
    this.size = function(){
        return length
    }
    this.value = function(){
        var arr = []
        for (var key in items) {
            if (this.has(key)) {
                arr.push(items[key])
            }
        }
        return arr
    } 
    this.union = function(otherSet){
        var resultSet = new Set()
        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            resultSet.add(arr[i])
        }
        arr = otherSet.value()
        for(var i = 0; i < arr.length; i++){
            resultSet.add(arr[i])
        }
        return resultSet
    }
    this.intersection = function(otherSet){
        var resultSet = new Set()
        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            if(otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet
    }
    this.difference = function(otherSet){
        var resultSet = new Set()
        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            if(!otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet
    }
    this.forEach = function(callBack){
        var arr = this.value()
        for(var i = 0; i < arr.length; i++){
            callBack(arr[i],i)
        }
    }
    this.entire = function(){
        var arr = []
        var i =0;
        for (var key in items) {
            arr.push({[key]:items[key]})
        }
        return {
           next:function(){
                var value = Object.entries(arr[i])
                i++ 
                return value[0]
            }
        }
    }
}