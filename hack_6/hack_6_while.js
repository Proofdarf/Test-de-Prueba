/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let i=0;
let limite = str.length;

while(i<limite){
    str.split(i)
    result.push(str[i])
    i++
}

console.log(result);


//export result
module.exports = result;