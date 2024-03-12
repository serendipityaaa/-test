// var moveZeroes = function(nums) {
//     for(let i =0;i<nums.length;i++){
//         for(let j =i;j<nums.length;j++){
//             if(nums[i]==0){
//                 let a = nums[i]
//                 nums[i]=nums[j]
//                 nums[j]=a
//             }
//         }
// //     }
// //     return nums

// // };
// var Hanno = function(num,a,b,c){
//     if(num>0){
//         Hanno(num-1,a,c,b)
//         console.log(`moving from ${a} to ${c}`)
//         return Hanno(num-1)*2+1
//     }else{
//         return 0
//     }
// }

// console.log(Hanno(3,'A','B','C'))

// var select_sort = function(arr){
//     for(let i = 0;i<arr.length;i++){
//         let j = i-1
//         let temp = arr[i]
//         while(j>=0&&arr[j]>temp){
//             arr[j+1]=arr[j]
//             j-=1

//         }
//         arr[j+1] = temp
//         console.log(arr)

//     }
//     return arr
// }

// arr = [1,4,3,5,6,2,7,9,8]
// console.log(select_sort(arr))


var partition = function(arr,left,right){
    let temp = arr[left]
    while(left<right){
        while(left<right&&arr[right]>=temp){
            right-=1
        }
        arr[left] = arr[right]
        while(left<right&&arr[left]<=temp){
            left+=1
        }
        arr[right] = arr[left]
    }
    arr[left] = temp
    return left
}

var quick_sort = function(arr,left,right){
    if (left<right){
        let mid = partition(arr,left,right)
        quick_sort(arr,left,mid-1)
        quick_sort(arr,mid+1,right)
    }
    return arr

}


arr = [1,4,3,5,6,7,4,5,8,3]
console.log(quick_sort(arr,0,arr.length-1))