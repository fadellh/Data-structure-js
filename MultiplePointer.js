
//!------------- Patern Example -----------

const sumZero = (arr) => {
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left],arr[right]]
        }else if(sum > 0){
            right --
        }else{
            left ++ 
        }
    }
}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])) // [-3,3]

//------ Count unique values ---------------
//! Hint: Building up the unique value
//------ Solution sendiri

const countUniqueValues = (arr) => {
    let left = 0
    let right = 1
    while(right<arr.length){
        if(arr[left] === arr[right]){
            right ++ 
        }else if(arr[left] !== arr[right]){
            arr[left + 1] = arr[right]
            left ++            
            // console.log(arr)
        }
        
    }
    if(arr.length>0){
        return left + 1
    }else{
        return left
    }
    // console.log(left + 1) 
}

// console.log(countUniqueValues([1,1,1,1,1,1,2])) //2
// console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7])) //
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))//7
// console.log(countUniqueValues([]))//0
// console.log(countUniqueValues([-2,-1,-1,0,1]))//4

//!---- Hitung Array----
// let arr3 = [4,5,6,7,8,9,10]
// console.log(arr3[4].length)
//!---------------END--------------------------------

//!---------------SOLUTION---------------------------
//! Hint: Building up the unique value

const countUniqueValuesSol = (arr) => {
    if(arr.length === 0) return 0
    var i = 0
    for(var j = 1 ; j < arr.length; j++ ){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i+ 1
}

console.log(countUniqueValuesSol([1,1,2,3,3,4,5,6,6,7])) //



//!----------------END SOLUTION-------------------------


