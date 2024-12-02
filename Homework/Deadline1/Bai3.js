const arr = [1, 2, 10, 4, 5];

function filterEvenNumber(arr){
    return arr.filter(value=>value%2==0 ? true: false)
}
console.log(`Even Number of array: ` + filterEvenNumber(arr))