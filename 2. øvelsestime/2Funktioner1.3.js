function planteHarBrugForVand(dag){
    if (dag == "onsdag"){
        return (true);
    }
    else {
        return false
    }
}
console.log(planteHarBrugForVand("onsdag"))

const planteHarBrugForVand1 = (dag) => (dag == "onsdag") ? true : false;
console.log(planteHarBrugForVand1("fredag"));