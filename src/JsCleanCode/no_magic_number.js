/*
find total second in a day
let sec = 1
let min = sec * 60
let hr = min * 60
let day = hr * 24
export function get_Sec_In_A_Day(sec = 1) {
  let min = sec * 60;
  let hr = min * 60;
  let day = hr * 24;
  return console.log(day);
}
 */
//1. NO MAGIC NUMBER
/* example
for(let i = 0; i < 86400; i=+1){
  // bad code;
}

let SECOND_IN_A_DAY = 86400;
for(let i = 0; i < SECOND_IN_A_DAY; i=+1){
  // GOOD code;
}

// MORAL

  every state in a program shoube meaning full;
  even number;
  make constant in such type
  constant should be SNAKE_CAPITAL_LETTER
*/
