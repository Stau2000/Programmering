
tabelzero = "0 0 0 0 0 0 0 0 0 0"
tabelone = "1 1 1 1 1 1 1 1 1 1"
tabeltwo = "2 2 2 2 2 2 2 2 2 2"
tabelthree = "3 3 3 3 3 3 3 3 3 3"
tabelfour = "4 4 4 4 4 4 4 4 4 4"
tabelfive = "5 5 5 5 5 5 5 5 5 5"
tabelsix = "6 6 6 6 6 6 6 6 6 6"
tabelsevem = "7 7 7 7 7 7 7 7 7 7"
tabeleight = "8 8 8 8 8 8 8 8 8 8"
tabelnine = "9 9 9 9 9 9 9 9 9 9"
    console.log(tabelzero + "\n" + tabelone + "\n" + tabeltwo + "\n" 
             + tabelthree + "\n" + tabelfour + "\n" + tabelfive + "\n"
             + tabelsix + "\n" + tabelsevem + "\n" + tabeleight + "\n"
             + tabelnine)

console.log("_________________")

for (let i = 0; i <= 9; i++) {
    let row = ""
    for (let u = 0; u <= 9; u++) {
        row = row + i + " "
    }
    console.log(row); 
}