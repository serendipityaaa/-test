var string_sort = function(s,t){
    
    let arr1 = [...s]
    let arr2 = [...t]
    if(arr1.length!==arr2.length){
        return false
    }else{
        for(let i of arr1){
            let index = arr2.indexOf(i)
            if(index==-1){
                return false
            }else{
                arr2.splice(index,1)
            }
        }
        if(arr2 = []){
            return true
        }else{return false}
    }
}

let s = ''
let t = 'tara'
console.log(string_sort(s,t))


var searchMatrix = function(matrix, target) {
    let arr = []
    for(let i of matrix){
        arr.push(...i)

    }
    let index = arr.indexOf(target)
    if(index==-1){
        return false
    }else{
        return true
    }

}

var searchMatrix2 = function(matrix,target){
    if(matrix.length==0||matrix[0].length===0){
        return false
    }
    let h = matrix.length
    let w = matrix[0].length
    let left = 0
    let right = w*h-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        let i = Math.floor(mid/w)
        let j = mid%w
        if(matrix[i][j]==target){
            return true
        }else if(matrix[i][j]<target){
            left = mid+1
        }else if(matrix[i][j]>target){
            right = mid-1

        }

    }
    return false
}
