const arr = [1, 2, 3, 4, 5,5,3,4];

function countOccurrences(arr, value){
    

    return arr.reduce(caculate,0)

    function caculate(total,currentValueofArray){
        return currentValueofArray== value ? total+=1: total;
    }
}

console.log(countOccurrences(arr,5));