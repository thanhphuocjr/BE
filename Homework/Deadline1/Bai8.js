function findMostFrequent(arr) {
  // Implement here

  const frequencyMap={};
  let maxCount=0;
  let mostFrequency=null;
  for(const num of arr){
    frequencyMap[num]=(frequencyMap[num] || 0)+1;
    if(frequencyMap[num]>maxCount){
        maxCount= frequencyMap[num];
        mostFrequency= num;
    }
  }
   return `${mostFrequency} : ${maxCount}`;
  
}
console.log(findMostFrequent([1, 2, 3, 2, 1, 2])); // 2
