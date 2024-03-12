var count_sort = function(arr,max_count=100){
    let li = new Array(max_count+1).fill(0)
    for(let val of arr){
        li[val]+=1
    }
    arr.length = 0
    for(let i =0;i<max_count;i++){
        for(let x = 0;x<li[i];x++){
            arr.push(i)
        }
    }
    return arr
}

arr = [2,2,2,2,3,3,3,1,1,1,1,1,4,4,4,4,5,5,5,6,6,6,4,4,4,3,3]
console.log(count_sort(arr))