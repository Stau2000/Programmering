// den oprindelige måde jeg gjorde det på
/*
let tabel = "0 1 2 3 4 5 6 7 8 9"
for (let number = 0; number <= 10; number += 1) {
  console.log(tabel)
}
*/

for (let i = 0; i <= 9; i++) {
  console.log("0 1 2 3 4 5 6 7 8 9"); 
}
//kortere måde at skrive det på

console.log("______________")

for (let i = 0; i <= 9; i++) {
  let row = ""
  for (let u = 0; u <= 9; u++) {
    row = row + u + " "
  }
  console.log(row); 
}