// worst case senario O(n^2)
const getUniqueValues = (arrOfNum) => {
  const newArr = [];
  let i = 0;
  while(i < arrOfNum.length){
    let isDuplicate = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arrOfNum[i] === newArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      newArr.push(arrOfNum[i]);
    }
    i++;
  }
  
  return newArr;
};
const arrOfNum = [1, 2, 2, 4, 5, 6, 6, 7, 7, 7, 1, 2,7,2,4,8];
const arrOfNum2 = [1, 2, 2, 4, 5, 6, 6];
console.log(getUniqueValues(arrOfNum)); 
console.log(getUniqueValues(arrOfNum2)); 
