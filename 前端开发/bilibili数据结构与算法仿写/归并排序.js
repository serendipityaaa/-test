var merge = function(arr,low,mid,high){
    let i = low
    let j = mid+1
    let k = 0
    var list = new Array(high-low+1)
    while(i<=mid&&j<=high){
        if(arr[i]>arr[j]){
            list[k] = arr[j]
            j+=1
            k+=1
        }else{
            list[k] = arr[i]
            i+=1
            k+=1
        }
    }
    while(i<=mid){
        list[k] = arr[i]
        i+=1
        k+=1

    }
    while(j<=high){
        list[k] = arr[j]
        j+=1
        k+=1
    }
    for(i = 0;i<list.length;i++){
        arr[low+i] = list[i]
    }
}

var merge_sort = function(arr,low,high){
    if(low<high){
        let mid = Math.floor((low+high)/2)
        merge_sort(arr,low,mid)
        merge_sort(arr,mid+1,high)
        merge(arr,low,mid,high)
    }
    return arr
}
