/*
Del 1:Anton skal til piratfest på reffen og vil gerneinvitere alle 
sine homies med. For atpolitiet ikke skal opdage at Anton inviterer
til fest, sender han derfor en hemmelig besked tilsine venner, med
instrukser til at dekode beskeden, som kun folk der kan kode i 
javascriptkan følge (hvilket politiet selvfølgelig ikke kan!).
*/

let hemmeligBesked = 
["hej", "Klaus", "vil", "du", "med", "til", "fodbold", "i", 
"klubben", "i", "aften", "?", "Kurt"]

//1.Brug en array metode til at slette det sidste element af 
//arrayet hemmeligBesked.

let removelast = hemmeligBesked.pop()
//console.log(hemmeligBesked)

//2. Brug en array metode til at tilføje separate strenge: ‘adressen’,’er’,’Priratvej’ og ’100’
//til slutningen af hemmeligBesked

let addStrings = hemmeligBesked.push ("adressen","er", "piratvej", "100")
//console.log (hemmeligBesked)

//3. Ændrer ordet ‘Klaus’ til ‘bro!’ ved at tilgå indekset og erstatte det
let addBroInsteadOfKurt = hemmeligBesked.splice(1,1, "bro")
//console.log(hemmeligBesked)

//4. Brug en array metode til at fjerne det første element af array’et

let removefirst = hemmeligBesked.shift()
//console.log(hemmeligBesked)

// 5. Brug en array metode til at tilføje ‘yo’ til starten af array’et
let addYoInsteadofHej = hemmeligBesked.splice(0,0, "yo")
//console.log(hemmeligBesked)

// 6
let addPiratfest = hemmeligBesked.splice(6,3, "piratfest")
//console.log(hemmeligBesked)

//7
let faktiskBesked = hemmeligBesked.join(" ")
console.log(faktiskBesked)
//del 2: Anton vil gerne sende den samme besked til alle hans 1000+ facebookvenner, men
//han vil gerne gøre beskeden lidt mere personlig



function gørBeskedPersonlig(name) {
    console.log("Yo " + `${name}` + " vil du med til pirafest på reffen aften? Adressen er piratvej 100")
}
//gørBeskedPersonlig("Sigurd")

let catalog = {
   venneListe:
    [{
        navn: "Sigurd",
        sang: "Hit me baby one more time",
    },
    {  
        navn: "Tessa",
        sang: "Ben",
    },
    {
        navn: "Mia",
        sang: "Love will tear us apart",
    }]
}
for (let people in catalog.venneListe) {
    console.log("yo " + `${catalog.venneListe[people].navn}` + " vil du med til piratfest på reffen i aften? Adressen er Piratvej 100")
}
for (let sange in catalog.venneListe) {
    console.log([`${catalog.venneListe[sange].sang}`])
}
