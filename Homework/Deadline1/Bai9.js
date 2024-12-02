function mergeAndRemoveDuplicates(arr1, arr2) {
  // Implement here

  let arr=[]
  for(let x of arr1){
    if(!arr.includes(x)){
        arr.push(x)
    }
  }
    for (let x of arr2) {
      if (!arr.includes(x)) {
        arr.push(x);
      }
    }

    return arr

}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
