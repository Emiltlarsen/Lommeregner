var talIBjaelken = "0";
var valgteOperator = "";
var laastTal = "";
var pi = 3.1415926535897932384626433832795;
var ligeRegnet = 0;
var punktumSporgsmalstegn = 0
var historik = [];
var historikString = "";
//document.getElementById("resultater").innerHTML = talIBjaelken;
//document.getElementById("miniTal").innerHTML = laastTal + valgteOperator;
//document.getElementById("historik").innerHTML = historik;


class historikAfBeregninger {
    constructor(forsteTal, andenTal, resultat, operator) {
        this.forsteTal = forsteTal;
        this.andenTal = andenTal;
        this.resultat = resultat;
        this.operator = operator;
    }
}

var tal1 = "0";
var tal2 = "0";
var talResultat = "0";
var operator1 = "0";
var nyHistorikInput = "";
var fuldeHistorik = "";

// Opdatere historikken. Denne function køres efter hver beregning
function updateHistory (historik) {
    fuldeHistorik = historik[0].forsteTal + " " + historik[0].operator + " " + historik[0].andenTal + " = " + historik[0].resultat;
    for (let i = 1; i < historik.length; i++) {
        tal1 = historik[i].forsteTal;
        tal2 = historik[i].andenTal;
        talResultat = historik[i].resultat;
        operator1 = historik[i].operator;
        nyHistorikInput = tal1 + " " + operator1 + " " + tal2 + " = " + talResultat;
        fuldeHistorik = fuldeHistorik + "; " + nyHistorikInput;
    }
    document.getElementById("historik").innerHTML = fuldeHistorik;
}

// Nulsitller historikken og kører funktionen C. Dette resultere i at lommeregneren nulstilles
function nulstilHistorik () {
    historik = [];
    nyHistorikInput = "";
    fuldeHistorik = "";
    document.getElementById("historik").innerHTML = "/Historik Af Tidligere Beregninger Skrives Her/";
    C();
}


// Knapper fra 0 til 9 (og pi)
function tast1(){
    console.log("Taster 1");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";

    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "1";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "1";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast2(){
    console.log("Taster 2");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "2";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "2"
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast3(){
    console.log("Taster 3");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "3";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "3";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast4(){
    console.log("Taster 4");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "4";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "4";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;

}
function tast5(){
    console.log("Taster 5");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "5",
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "5";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;

}
function tast6(){
    console.log("Taster 6");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "6";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "6";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast7(){
    console.log("Taster 7");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "7";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "7";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast8(){
    console.log("Taster 8");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "8";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "8";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast9(){
    console.log("Taster 9");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "9";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "9";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tast0(){
    console.log("Taster 0");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
        document.getElementById("miniTal").innerHTML = "...";
    }

    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "0";
        ligeRegnet = 0;
    } else
        talIBjaelken = talIBjaelken + "0";
        ligeRegnet = 0;

    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function tastpi(){
    talIBjaelken = pi;
    console.log("Taster Pi");
    ligeRegnet = 0;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}


// Nulstiller igangværende beregning
function C(){
    talIBjaelken = "0";
    ligeRegnet = 0;
    valgteOperator = "";
    console.log("Nulstiller...");
    document.getElementById("miniTal").innerHTML = "...";
    document.getElementById("resultater").innerHTML = talIBjaelken;
}

// Sætter tal i bjælken = 0, altså det input der er igang med at skrives nulstilles
function CE(){
    talIBjaelken = "0";
    console.log("Sletter...");
    document.getElementById("resultater").innerHTML = talIBjaelken;

    if (ligeRegnet === 1) {
        document.getElementById("miniTal").innerHTML = "...";

    }
}

// Tilføljer et komma. Tjekker om der er komma i forvejen
function komma(){
    if (talIBjaelken.includes(".")) {
        console.log("Der er allerede et punktum");
    } else {
        talIBjaelken = talIBjaelken + ".";
        console.log("Taster .");
        document.getElementById("resultater").innerHTML = talIBjaelken;
    }
}


// Matematiske operatorer; plus, minus osv.
function plus(){
    valgteOperator = "+";
    laastTal = talIBjaelken;
    talIBjaelken = "0";
    console.log("Plusser...");
    document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function minus(){
    valgteOperator = "-";
    laastTal = talIBjaelken;
    talIBjaelken = "0";
    console.log("Minusser...");
    document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function gange(){
    valgteOperator = "*";
    laastTal = talIBjaelken;
    talIBjaelken = "0";
    console.log("Ganger...");
    document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function division(){
    valgteOperator = "/";
    laastTal = talIBjaelken;
    talIBjaelken = "0";
    console.log("Dividere...");
    document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function iAnden(){
    valgteOperator = "^2";
    document.getElementById("miniTal").innerHTML = talIBjaelken + "^2 =";
    talIBjaelken1 = talIBjaelken;
    talIBjaelken = parseFloat(talIBjaelken) * parseFloat(talIBjaelken);
    const tal = new historikAfBeregninger(talIBjaelken1, "...", talIBjaelken, valgteOperator);
    console.log("Opløftet i anden giver det " + talIBjaelken);
    console.log(tal);
    historik.push(tal);
    ligeRegnet = 1;
    document.getElementById("resultater").innerHTML = talIBjaelken;
    updateHistory(historik);
}
function iY(){
    valgteOperator = "^";
    laastTal = talIBjaelken;
    talIBjaelken = "0";
    console.log("x opløftet i y...");
    document.getElementById("miniTal").innerHTML = laastTal + "^"
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function kvadratRod(){
    document.getElementById("miniTal").innerHTML = "sqrt(" + talIBjaelken + ") =";
    valgteOperator = "sqrt";
    talIBjaelken1 = talIBjaelken
    talIBjaelken = Math.sqrt(parseFloat(talIBjaelken))
    const tal = new historikAfBeregninger(talIBjaelken1, "...", talIBjaelken, valgteOperator);
    console.log("Kvadratroden er " + talIBjaelken);
    console.log(tal);
    historik.push(tal);
    ligeRegnet = 1;
    document.getElementById("resultater").innerHTML = talIBjaelken;
    updateHistory(historik);  
}
function plusMinus(){
    if (talIBjaelken != 0) {
            talIBjaelken = talIBjaelken * -1;
            console.log("Ændrer fortegn");
            document.getElementById("resultater").innerHTML = talIBjaelken;
        } else
        console.log("Ændrer ikke fortegn på grund af 0");
}


// Eksikverer matematiske operatorer
function ligMed(){
    console.log("Resultat er...");
    if (valgteOperator === "+") {
        talIBjaelken1 = talIBjaelken;
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken = parseFloat(laastTal) + parseFloat(talIBjaelken);
        const tal = new historikAfBeregninger(laastTal, talIBjaelken1, talIBjaelken, valgteOperator);
        console.log(talIBjaelken);
        console.log(tal);
        historik.push(tal);
        updateHistory(historik);
    } 
    else if (valgteOperator === "-") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken1 = talIBjaelken;
        talIBjaelken = parseFloat(laastTal) - parseFloat(talIBjaelken);
        const tal = new historikAfBeregninger(laastTal, talIBjaelken1, talIBjaelken, valgteOperator);
        console.log(talIBjaelken);
        console.log(tal);
        historik.push(tal);
        updateHistory(historik);
    } 
    else if (valgteOperator === "*") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken1 = talIBjaelken;
        talIBjaelken = parseFloat(laastTal) * parseFloat(talIBjaelken);
        const tal = new historikAfBeregninger(laastTal, talIBjaelken1, talIBjaelken, valgteOperator);
        console.log(talIBjaelken);
        console.log(tal);
        historik.push(tal);
        updateHistory(historik);
    } 
    else if (valgteOperator === "/") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken1 = talIBjaelken
        talIBjaelken = parseFloat(laastTal) / parseFloat(talIBjaelken);
        const tal = new historikAfBeregninger(laastTal, talIBjaelken1, talIBjaelken, valgteOperator);
        console.log(talIBjaelken);
        console.log(tal);
        historik.push(tal);
        updateHistory(historik);
    }
    else if (valgteOperator === "^"){
        document.getElementById("miniTal").innerHTML = laastTal + "^" + talIBjaelken + " =";
        var resultat = parseFloat(laastTal);

        for (let i = 0; i < (parseFloat(talIBjaelken)-1); i++) {
            resultat = resultat * parseFloat(laastTal);
        }
        talIBjaelken1 = talIBjaelken;
        talIBjaelken = resultat;
        
        const tal = new historikAfBeregninger(laastTal, talIBjaelken1, talIBjaelken, valgteOperator);
        console.log(talIBjaelken)
        console.log(tal);
        historik.push(tal);
        updateHistory(historik);
    }
    document.getElementById("resultater").innerHTML = talIBjaelken;
    ligeRegnet = 1;
}