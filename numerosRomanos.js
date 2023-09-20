// Ejemplo 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Ejemplo 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Ejemplo 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function(s) {
    let newDiccionarie=new Map()
newDiccionarie.set("I", 1);
newDiccionarie.set("V", 5);
newDiccionarie.set("X", 10);
newDiccionarie.set("L", 50);
newDiccionarie.set("C", 100);
newDiccionarie.set("D", 500);
newDiccionarie.set("M", 1000);
for (const clave of newDiccionarie.keys()) {
    let separe=s.split("")
    
    for (let i = 0; i < separe.length; i++) {
        let element = separe[i]; 
        let resultado=0
        
            if(element===clave ){
                 resultado=separe.length*newDiccionarie.get(clave)    
                 return resultado
            }

    }
}
    
};

console.log(romanToInt("CCC"))



// diccionary={
//     "I":1,
//     "V":5,
//     "X":10,
//     "L":50,
//     "C":100,
//     "D":500,
//     "M":1000
// }

// newDiccionarie=new Map(("I",1),("V",5),("X",10),("L",50),("C",100),("D",500),("M",1000))

// let arr=[] 
// for (const e in diccionary) {
//    arr.push(e)
// }
// return arr