/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

    numberArray.splice(0,1,"one");
    numberArray.splice(2,1,"three");
    numberArray.splice(4,1,"five");
    
    stringArray.splice(0,1,"f00");
    stringArray.splice(1,1,"Bar");
    stringArray.splice(2,1,"b@z");
    stringArray.splice(3,1,"quX");
    stringArray.splice(4,1,"3ch0");

    stringUnion=[...numberArray, ...stringArray];
    stringUnion.splice(numberArray.length,0,"h@ck");
    stringUnion.unshift("h@ck");
    stringUnion.push("h@ck");
    

    result = stringUnion;

    console.log(numberArray);
    console.log(stringArray);
    console.log(stringUnion);
    console.log(result);
//export result
module.exports = result;