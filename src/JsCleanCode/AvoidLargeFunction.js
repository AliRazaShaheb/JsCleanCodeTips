// Avoid large function
//example - bad-practice

export const add_subs_multply_func = (n1, n2, n3) => {
  // add
  const add = n1 + n2 + n3;

  // substract
  const substract = n1 - n2 - n3;

  // multiply
  const multiply = n1 * n2 * n3;

  return `${add} ... ${substract} ... ${multiply}`;
};

//example - good-practice
/*
  make small resuable function
*/
const add = (n1, n2, n3) => n1 + n2 + n3;
const substract = (n1, n2, n3) => n1 - n2 - n3;
const multiply = (n1, n2, n3) => n1 * n2 * n3;

export const add_subs_multply_func1 = (n1, n2, n3) => {
  return `${add(n1, n2, n3)} ... ${substract(n1, n2, n3)} ... ${multiply(
    n1,
    n2,
    n3
  )}`;
};

// console.log(add_subs_multply_func1(100, 25, 25));

// console.log(add_subs_multply_func(101, 26, 26));
