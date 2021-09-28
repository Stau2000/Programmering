//Lav et nested objekt som hedder pung og består af
let pung = {
    kort:
        [{
            udbyder: "Nordea",
            udløbsdato: "01/01-2022",
        },
        {
            udbyder: "Danske bank",
            udløbsdato: "02/02-2023",
        },
        {
            udbyder: "Jyske bank",
            udløbsdato: "03/03-2024",
        }],
    kontanter:
        [{
            værdi: "",
            antal: "",
        },
        {
            værdi: "",
            antal: "",
        },
        {
            værdi: "",
            antal: "",
        }]
    }
    for ( let bank in pung.kort) {
        console.log(`${bank}: ${pung.kort[bank].udbyder}`);
    }
    for ( let bank in pung.kort) {
        console.log(`${bank}: ${pung.kort[bank].udløbsdato}`);
    }