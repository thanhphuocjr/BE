
const arr = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
    arr.sort();
  let arr1=[];
  for( let i=0; i<arr.length; i++){
    if(arr[i]== arr[i-1]) continue;
    arr1.push(arr[i]);
    
    // if(!arr1.includes(arr[i])) arr1.push(arr[i])
  }
  return arr1;
}

console.log(removeDuplicates(arr));