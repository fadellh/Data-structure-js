// let frequencyCounter1 = {}
// let arr1 = [1,2,3,2]
// let arr2 = [1,1,1,1]
// let arrkos= []
// for(let val of arr2){
//     frequencyCounter1[val] = (frequencyCounter1[val])+ ' jhai ' + [val]

//     }
    
//     console.log(frequencyCounter1)
    
//     // frequencyCounter1[a]= 'fadel'
//     // arr1[1]= {nama: 'fadel'}
//     // console.log(arr1)
    // frequencyCounter1['nama'] = ('fadel')
    // frequencyCounter1['nama'] = ('lia')
    // arrkos[1] = ('fadel')
    // console.log(frequencyCounter1['nama'])
    // console.log(arrkos)

//!-------------------SOLUTION---------------------------------
// let arr1 = [1,2,3,2]
// let arr2 = [9,1,4,4]

const same = (arr1,arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val]||0) + 1
    }
    for(val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val]||0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
        // console.log(frequencyCounter2[key ** 2])
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    return true
}

console.log(same([1,2,3,2],[9,1,4,4]))