/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

let i=1;
for (; i < arr.length - 1; i++) {
    result.push(arr[i]);
  }

let j=0;
for (; j < 2; j++) {
    result[j] = result[j].replace("a", "@");
  }
  
result[result.length - 1] = result[result.length - 1].toUpperCase();


console.log(result);

    


//export result
module.exports = result;