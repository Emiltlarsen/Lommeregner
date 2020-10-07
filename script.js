var talIBjaelken = "0";
var valgteOperator = "";
var laastTal = "";
var pi = 3.1415926535897932384626433832795;
var ligeRegnet = 0;
var format = /./;
var punktumSporgsmalstegn = 0

//document.getElementById("resultater").innerHTML = talIBjaelken;
//document.getElementById("miniTal").innerHTML = laastTal + valgteOperator;


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


// Nulstiller lommeregneren
function C(){
    talIBjaelken = "0";
    ligeRegnet = 0;
    valgteOperator = "";
    console.log("Nulstiller...");
    document.getElementById("miniTal").innerHTML = "...";
    document.getElementById("resultater").innerHTML = talIBjaelken;
}

// Sætter tal i bjælken = 0
function CE(){
    talIBjaelken = "0";
    console.log("Sletter...");
    document.getElementById("resultater").innerHTML = talIBjaelken;

    if (ligeRegnet === 1) {
        document.getElementById("miniTal").innerHTML = "...";

    }
}


function komma(){
    if (format.test(talIBjaelken)) {
        talIBjaelken = talIBjaelken + ".";
        console.log("Taster .");
        document.getElementById("resultater").innerHTML = talIBjaelken;
    } else {
        console.log("Der er allerede et punktum");
    }


    /*
    if (punktumSporgsmalstegn) {
        talIBjaelken = talIBjaelken + ".";
        console.log("Taster .");
        document.getElementById("resultater").innerHTML = talIBjaelken;
    }
*/
    /*if (talIBjaelken === ".") {
        talIBjaelken = "0.";
        document.getElementById("resultater").innerHTML = talIBjaelken;
    }*/
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
    document.getElementById("miniTal").innerHTML = talIBjaelken + "^2 =";
    talIBjaelken = parseFloat(talIBjaelken) * parseFloat(talIBjaelken);
    console.log("Opløfter i anden...");
    ligeRegnet = 1;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function iY(){
    valgteOperator = "x^y";
    laastTal = talIBjaelken;
    talIBjaelken = "0";
    console.log("x opløftet i y...");
    document.getElementById("miniTal").innerHTML = laastTal + "^"
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function kvadratRod(){
    document.getElementById("miniTal").innerHTML = "sqrt(" + talIBjaelken + ") =";
    valgteOperator = "sqrt";
    talIBjaelken = Math.sqrt(parseFloat(talIBjaelken))
    console.log("Tager kvadratroden...");
    ligeRegnet = 1;
    document.getElementById("resultater").innerHTML = talIBjaelken;    
}
function plusMinus(){
    if (talIBjaelken != 0) {
            talIBjaelken = talIBjaelken * -1
            console.log("Ændrer fortegn");
            document.getElementById("resultater").innerHTML = talIBjaelken;
        } else
        console.log("Ændrer ikke fortegn på grund af 0");
}


// Eksikverer matematiske operatorer
function ligMed(){
    console.log("Resultat er...");
    if (valgteOperator === "+") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken = parseFloat(laastTal) + parseFloat(talIBjaelken);
        console.log(talIBjaelken);
    } 
    else if (valgteOperator === "-") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken = parseFloat(laastTal) - parseFloat(talIBjaelken);
        console.log(talIBjaelken);
    } 
    else if (valgteOperator === "*") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken = parseFloat(laastTal) * parseFloat(talIBjaelken);
        console.log(talIBjaelken);
    } 
    else if (valgteOperator === "/") {
        document.getElementById("miniTal").innerHTML = laastTal + " " + valgteOperator + " " + talIBjaelken + " =";
        talIBjaelken = parseFloat(laastTal) / parseFloat(talIBjaelken);
        console.log(talIBjaelken);
    }
    else if (valgteOperator === "x^y"){
        document.getElementById("miniTal").innerHTML = laastTal + "^" + talIBjaelken + " =";
        var resultat = parseFloat(laastTal);

        for (let i = 0; i < (parseFloat(talIBjaelken)-1); i++) {
            resultat = resultat * parseFloat(laastTal);
        }
    
        talIBjaelken = resultat;
        
        console.log(talIBjaelken)
    }
    document.getElementById("resultater").innerHTML = talIBjaelken;
    ligeRegnet = 1;
}