//1. NO MAGIC NUMBER
/*
find total second in a day
let sec = 1
let min = sec * 60
let hr = min * 60
let day = hr * 24
 */
//example

export function get_Sec_In_A_Day(sec = 1) {
  let min = sec * 60;
  let hr = min * 60;
  let day = hr * 24;
  return console.log(day);
}
get_Sec_In_A_Day();
