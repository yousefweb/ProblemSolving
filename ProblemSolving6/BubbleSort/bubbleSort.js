const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {

        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

const a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log(bubbleSort(a));
//The worst case is O(n^2) when array not sorted
//The best case is O(n) when array is sorted