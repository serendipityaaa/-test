var insert_sort = function(arr,gap){
    for(let i = gap;i<arr.length;i+=gap){
        let temp = arr[i]
        let j = i-gap
        while(j>=0&&arr[j]>temp){
            arr[j+gap]= arr[j]
            j-=gap
        } 
        arr[j+gap] = temp
    }
}

var shell_sort = function(arr){
    let d = Math.floor(arr.length/2)
    while(d>=1){
        insert_sort(arr,d)
        d = Math.floor(d/2)
    }
    return arr
}

arr = [2,4,3,5,76,8,4,6,4,3,5]
console.log(shell_sort(arr))