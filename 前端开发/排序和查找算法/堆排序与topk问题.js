var sift = function(arr,low,high){
    let i = low
    let j = 2*i+1
    temp = arr[low]
    while(j<=high){
        if(j<high&&arr[j+1]<arr[j]){//变换孩子顺序
            j+=1
        }
        if(temp>arr[j]){
            arr[i]=arr[j]
            i = j
            j = 2*i+1
        }else{
            arr[i]=temp
            break
        }
    }
    arr[i] = temp
}
var topk = function(arr,k){
    let li = arr.slice(0,k)
    let n = li.length
    for(let i =Math.floor(n/2-1);i>=0;i--){
        sift(li,0,n-1)
    }
    for(let j = k;j<arr.length;j++){
        if(arr[j]>li[0]){
            li[0] = arr[j]
            sift(li,0,n-1)
        }

    }
    for(let j = n-1;j>=0;j--){
        let temp = li[0]
        li[0] = li[j]
        li[j] = temp
        sift(li,0,j-1)

    }
    return li

}

// var heap_sort = function(arr){
//     let n = arr.length
//     for(let i = Math.floor(n/2-1);i>=0;i--){
//         sift(arr,i,n-1)
//     }
//     for(let j = n-1;j>=0;j--){
        // let temp = arr[0]
        // arr[0] = arr[j]
        // arr[j] = temp
        // sift(arr,0,j-1)
//     }
//     return arr

// }

var arr = [2,3,5,4,3,6,46,76,4,4343,21,1]
console.log(topk(arr,10))