const randomNumber1 = (Math.floor(Math.random() * 3));
if (randomNumber1 === 0){
    console.log("Sten");
}
else if (randomNumber1 === 1){
    console.log("Saks");
}
else
    {
    console.log("Papir");
}


const randomNumber2 = (Math.floor(Math.random() * 3));
if (randomNumber2 === 0){
    console.log("Sten");
}
else if (randomNumber2 === 1){
    console.log("Saks");
}
else 
    {
    console.log("Papir");
}

//uafgjort
if (randomNumber1 === randomNumber2){
    console.log("Uafgjort");
}

// Sten imod saks
if (randomNumber1 == 0 && randomNumber2 == 1){
    console.log("Sten vinder");
}

//Saks imod papir
if (randomNumber1 == 1 && randomNumber2 == 2){
    console.log("Saks vinder");
}
// Sten imod papir
if  (randomNumber1 == 0 && randomNumber2 == 2){
    console.log("Papir vinder");
}

// andet udfald
// Sten imod saks
if (randomNumber2 == 0 && randomNumber1 == 1){
    console.log("Sten vinder");
}

//Saks imod papir
if (randomNumber2 == 1 && randomNumber1 == 2){
    console.log("Saks vinder");
}
// Sten imod papir
if  (randomNumber2 == 0 && randomNumber1 == 2){
    console.log("Papir vinder");
}




console.log("_____________________________________________________")


const choises = ["Sten", "Saks", "Papir"]
console.log ("length of choises: " + choises.length)

//tager et tal og sender det retur til efterspørgeren (linje 93 og ned)
function choise (){
    const choise = (Math.floor(Math.random() * choises.length));
    return choise
}

//siger hvad udfaldene for hver spiller bliver, samt hvem der har vundet
function stenSaksPapir (player1choise, player2choise){
    console.log ("Player1: " + choises[player1choise])
    console.log ("Player2: " + choises[player2choise])
    if (player1choise == player2choise){
        console.log ("Uafgjort!!")
    }

    // player1choise = 3 - 1 og player2choise = 0
    else if (player1choise == player2choise - 1 || (player1choise == choises.length - 1 && player2choise == 0)){
        console.log ("Player1 wins!!")
    }
    else {
        console.log("Player2 wins!!")
    }
}

// spørger efter et tal
const newPlayer1 = choise ();
const newPlayer2 = choise ();
stenSaksPapir (newPlayer1, newPlayer2)
