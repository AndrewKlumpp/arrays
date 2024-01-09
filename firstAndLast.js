function firstAndLast(array) {
  if (array.length % 2 === 0) {
    let evenArray = array[0] + array[array.length - 1];
    return evenArray;
  } else {
    let oddArray = array[0] - array[array.length -1];
    return oddArray;
  }
}



console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
