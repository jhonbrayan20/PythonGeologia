// --------------------------------ALGORITMOS-------------------------------------------
// caramelos

let ratings=[1,0,2]
var candy = function(ratings) {
    // denotamos la variable dar, donde a cada niño si o si tenga un dulce
    let dar=new Array(ratings.length).fill(1)
    // de izquierda a derecha
    for (let index = 1; index < ratings.length; index++) {
        if(ratings[index-1]>ratings[index]){
            dar[index-1]=dar[index-1]+1
        }
        // const element = ratings[index-1];
        // const compare=ratings[index]
    
    }
    // de derecha a izquierda
    for (let index=ratings.length-1; index>0; index--) {
        if(ratings[index]>ratings[index-1]){
            dar[index]=dar[index]+1
        }
    const element = ratings[index];
    const compare=ratings[index-1]
    }
    let suma=0
    for (let i = 0; i < dar.length; i++) {
        suma+=dar[i]
    }
    
    return suma
};

console.log(candy(ratings))

// Sumas
// Explanacion
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// complejidad teporal  O(n**2)


// 

// Ahora bajaremos la complejidad temporal a 0(n)
// let nums=[3,9,5,6];
// let target=9;
// var twoSum = function(nums, target) {
//    const dicioNums= new Map()
   
//    for (let i = 0; i<nums.length; i++) {
//     complemento= target-nums[i];
//     if(dicioNums.has(complemento)){
//         return([dicioNums.get(complemento),i])
//    }
//    dicioNums.set(nums[i],i)
// }

// return []

// }
//  console.log(twoSum(nums,target))

 
// Numero Palindromo
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
    x=x.toString()
    arr=x.split("")
    arrD=[]
    arrI=[]
    // para la derecha
    for (let i = 0; i < arr.length; i++) {
        arrD.push([arr[i]])     
    }
    // para izquierda
    for (let i = arr.length-1; i >=0; i++) {
        arrI.push([arr[i]])
    }
    if(arrD===arrI){
        return true
    }
    return false;
    console.log(arrD,arrI)

};
console.log(isPalindrome(121))

