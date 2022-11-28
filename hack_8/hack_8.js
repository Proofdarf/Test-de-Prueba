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

    arr.splice(0,1);
    arr.splice(3,1);

    result.push(arr[0].replace("a","@"))
    result.push(arr[1].replace("a","@"))
    result.push(arr[2].toUpperCase())


    console.log(result);

    


//export result
module.exports = result;