//Lav en indkøbsliste med 6 elementer i: 
//ris, gulerødder, mælk, sukker, kaffe, toiletpapir
const indkøbsliste = ["ris", "gulerødder", "mælk", "sukker", "kaffe", "toiletpapir"];
const shift = indkøbsliste.shift();
console.log(shift)
console.log(indkøbsliste)
// .shift() fjerner det første element i et array

console.log("______________________________")
const unshift = indkøbsliste.unshift("pasta");
console.log(unshift)
console.log(indkøbsliste)
//.unshift() tilføjer nye elementer til starten af et array

console.log("______________________________")
const indexOf = indkøbsliste.indexOf("mælk")
console.log(indexOf)
console.log(indkøbsliste [2])  
//finder ud af hvilket nummer et element i mit array har

console.log("______________________________")
indkøbsliste.splice(2, 1)
console.log(indkøbsliste)