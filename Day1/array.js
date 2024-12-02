// const arr= [2,3,1]
// arr.sort((a,b)=> b-a);
// console.log(arr)



// Sao chép mảng: Khi sao chép mảng trực tiếp, nó chỉ sao chép tham chiếu (không phải giá trị).

// const arr1 = [1, 2];
// const arr2 = arr1;
// arr2.push(3);
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]


// Để sao chép giá trị::

const arr1 = [1, 2];
const arr2 = [...arr1];
arr2.push(3);
console.log(arr1); // [1, 2]
console.log(arr2); // [1, 2, 3]

console(arr1);