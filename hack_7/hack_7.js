/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];
let i=0;
const j=0;
let limite = arr.length;
console.log(limite);


while(i<limite){
    result.push(arr[i][j].toUpperCase()+arr[i].substring(1))
    i++
}

console.log(result);
//export result
module.exports = result;