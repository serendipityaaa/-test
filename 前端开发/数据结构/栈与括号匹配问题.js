class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return '栈为空'
        }else{return this.items.pop()}
    }
    checkTop(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length==0
    }
}


let bracket_match = function(s){
    let arr = [...s]
    if(arr.length%2 !==0){
        return false
    }
    let list1 = new Stack()
    let list2 = {'}':'{',')':'(',']':'['}
    for(let val of arr){
        if(['(','{','['].includes(val)){
            list1.push(val)
            console.log(val)

        }else{
            if(list2[val]==list1.checkTop()){
                list1.pop()
            }else{return false}
            

        }
    }
    if(list1.isEmpty()){
        return true
    }else{return false}

    }

let string1 = '{}()[][{(())}'
console.log(bracket_match(string1))