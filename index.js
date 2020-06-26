// ** FREQUENCY COUNTER *****

// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has 
// it's corresponding value squared
// in the second array. 
// The frequency of values must be the same.
// [1,2,3,2] , [9, 1, 4,4]

// **** NAIVE SOLUTION *****
const same = (arr1,arr2) => {
    if(arr1.length !== arr2.length) return false
    for(let i=0; i<arr1.length;i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) return false
        console.log(correctIndex)
        arr2.splice(correctIndex,1)
    }
    return true
}

const same2 = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false
    for(let i = 0; i<arr1.length;i++){
        for(let j=0; j<arr2.length; j++){
            let kuadrat = arr1[i] ** 2
            console.log('index j ke ',j,'=', arr2[j])
            if(kuadrat === arr2[j]){
                console.log(kuadrat=== arr2[j], 'ini sama', kuadrat, arr2[j])
                arr2.splice(arr2[j],1)
                console.log(arr2,'Ini arr2')
            }
        }
        // return false
    }
    return true
}

// console.log(same([1,2,3,2],[9,1,4,4]))
// console.log(same2([1,2,3,2],[9,1,8,4]))

const state = {
    id : 0,
    username : '',
    email : '',
    roleId : 0,
    loading : false
}

let data = {
    id : 1,
    username : 'lianeddy',
    email : 'lian.eddy@gmail.com',
    roleId : 2
}

let reducer = {
    ...state,
    ...data,
}

console.log(reducer)