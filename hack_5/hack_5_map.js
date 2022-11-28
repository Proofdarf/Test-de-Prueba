/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let original=[];
i=8;
for(i;i>=1;i=i-2){
    original.push(i)
};
    result = original.map(x => x-1);

    console.log(result);
//export result
module.exports = result;