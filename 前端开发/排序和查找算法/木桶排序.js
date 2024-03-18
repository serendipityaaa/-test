var bucket_sort = function(arr,n=100,n_max=10000){
    let list = []
    for(let i =0;i<Math.floor(n_max/n);i++){
        list.push([])
    }
    for(let val of arr){
        let i = Math.floor(val/(n_max/n))
        list[i].push(val)
        for(let j = list[i].length-1;j>0;j--){
            if(list[i][j-1]>list[i][j]){
                let temp = list[i][j]
                list[i][j] = list[i][j-1]
                list[i][j-1] = temp

            }
        }

    }
    let list2 = []
    for(let k of list){
        list2.push(...k)
    }
    return list2
}

let list = Array.from({length:100},()=>Math.floor(Math.random()*10001))
console.log(bucket_sort(list))