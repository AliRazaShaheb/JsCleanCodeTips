const suppose_Array = [[["value"]]];
// getting 'value' from an array
// method-1 [bad practice]
// suppose_Array.forEach((arr1) => {
//   arr1.forEach((arr2) => {
//     arr2.forEach((el) => console.log(el));
//   });
// });

//method-2 [good practice - 1]
const getArrayValue = (arr) => {
  if (Array.isArray(arr)) return getArrayValue(arr[0]);
  return arr;
};

console.log(getArrayValue(suppose_Array));
