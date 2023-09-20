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
    for (let i = arr.length-1; i >=0; i--) {
        arrI.push([arr[i]])
    }
    
    if(arrD.join()===arrI.join()){
        return true
    }
    return false;

};
console.log(isPalindrome(-121))


// resolver sin convertir a cadena 

