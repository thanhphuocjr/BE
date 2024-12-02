function isSymmetricArray(arr) {
  // Implement here



let n= arr.length;
for(let i=0; i<n/2 ; i++){
    if(arr[i]!= arr[n-i-1]){
        return false;
    }
}
return true;

}
console.log(isSymmetricArray([1, 2, 3, 2, 1])); // true
console.log(isSymmetricArray([1, 2, 3, 4, 5])); // false
