// class Node{
//     constructor(item){
//         this.item = item
//         this.next = null

//     }
// }

// var create_linklist = function(arr){
//     let head = new Node(arr[0])
//     for(let val of arr.slice(1)){
//         let node = new Node(val)
//         node.next = head
//         head = node
//     }
//     return head
// }
// var create_linklist_tail = function(arr){
//     let head = new Node(arr[0])
//     let tail = head
//     for(let val of arr.slice(1)){
//         let node = new Node(val)
//         tail.next = node
//         tail = node
//     }
//     return head
// }
// var print_list = function(lk){
//     let result = ''
//     while(lk){
        
//         result += lk.item + '\n'
//         lk = lk.next

//     }
//     return result

// }

// let arr = [1,2,3,4]
// // console.log(print_list(create_linklist(arr)))
// // console.log(print_list(create_linklist_tail(arr)))


console.log('a'.charCodeAt())