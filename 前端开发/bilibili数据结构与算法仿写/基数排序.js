var radix_sort = function(arr){
    max_number = Math.max(...arr)
    let i = 0
    while(10**i<=max_number){
        let list = []
        for(let j = 0;j<10;j++){
            list.push([])
        }
        for(let val of arr){
            let digit = Math.floor(val/(10**i))%10
            list[digit].push(val)
        }
        arr.length=0
        for(let k of list){
            arr.push(...k)
        }
        i+=1
    }
    return arr
}

let arr = Array.from({length:100},()=>Math.floor(Math.random()*10001))
console.log(radix_sort(arr))