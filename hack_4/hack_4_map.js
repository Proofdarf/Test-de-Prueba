/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let original=[];
i=0;
for(i;i<=7;i=i+2){
    original.push(i)
};
    result = original.map(x => x+1);


    console.log(result);
//export result
module.exports = result;