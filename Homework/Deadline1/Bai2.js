const arr = [1, 2, 10, 4, 5];




function findMax(arr){
    let maxValue= arr[0];
    for(let x of arr){
        if(x>maxValue){
            maxValue=x;
        }
    }
    return maxValue;
}

console.log(findMax(arr))