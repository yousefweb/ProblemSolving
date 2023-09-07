const secondMax = function(array) {
  let max = array[0]
  let secMax= null
  if(array.length<2)
  {
    return "Array must contain at least two elemen";
  }
  for (let i = 1; i < array.length; i++) {

  if(array[i] > max)
  {
    secMax = max
    max = array[i]
  }
  else if (array[i] > secMax && array[i]!==max)
  {
     secMax =array[i]
  }
  }
  if (secMax===null) {
    return 'all element the same.';
  }
  return secMax;
}; 
console.log(secondMax([1, 5, 2]));     
console.log(secondMax([-1, -5, 2]));   
console.log(secondMax([-3, -2, -7]));  

//big O(n)