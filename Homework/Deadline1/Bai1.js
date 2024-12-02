
// Use For
const arr= [1,2,3,4,5]
let sum=0;
function sumArray(arr){
    for(let x of arr){
        sum+=x;
    }
    return sum;
}

console.log(`Sum of array [${arr}]= ` + sumArray(arr))



// Use reduce

let total= arr.reduce(getSum,0);
function getSum(total,num){
    return total+ num;
}
console.log(`Sum of array [${arr}]= ` +  total);