var talIBjaelken = "0";
var valgteOperator = "";
var laastTal = "";
var pi = 3.1415926535897932384626433832795;
var ligeRegnet = 0;

//document.getElementById("resultater").innerHTML = talIBjaelken


function tast1(){
    console.log("Taster 1");
    if (ligeRegnet === 1){
        talIBjaelken = "0";
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
    }

    if (ligeRegnet === 1){
        talIBjaelken = "0";
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

function C(){
    talIBjaelken = "0";
    console.log("Sletter...");
    ligeRegnet = 0;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}

function plus(){
    valgteOperator = "+";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Plusser...");
}
function minus(){
    valgteOperator = "-";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Minusser...");
}
function gange(){
    valgteOperator = "*";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Ganger...");
}
function division(){
    valgteOperator = "/";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Dividere...");
}
function iAnden(){
    talIBjaelken = parseInt(talIBjaelken) * parseInt(talIBjaelken);
    console.log("Opløfter i anden...");
    ligeRegnet = 1;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function iY(){
    valgteOperator = "x^y";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("x opløftet i y...");
}
function kvadratRod(){
    valgteOperator = "sqrt";
    talIBjaelken = Math.sqrt(parseInt(talIBjaelken))
    console.log("Tager kvadratroden...");
    ligeRegnet = 1;
    document.getElementById("resultater").innerHTML = talIBjaelken;
}
function plusMinus(){
    if (talIBjaelken === 0) {
        console.log("Ændrer ikke fortegn på grun af 0");
    }
    else if (talIBjaelken != 0) {
        talIBjaelken *= -1
        console.log("Ændrer fortegn");
    }
}



function ligMed(){
    console.log("Resultat er...");
    if (valgteOperator === "+") {
        talIBjaelken = parseInt(talIBjaelken) + parseInt(laastTal)
        console.log(talIBjaelken)
    } 
    else if (valgteOperator === "-") {
        talIBjaelken = parseInt(talIBjaelken) - parseInt(laastTal)
        console.log(talIBjaelken)
    } 
    else if (valgteOperator === "*") {
        talIBjaelken = parseInt(talIBjaelken) * parseInt(laastTal)
        console.log(talIBjaelken)
    } 
    else if (valgteOperator === "/") {
        talIBjaelken = parseInt(talIBjaelken) / parseInt(laastTal)
        console.log(talIBjaelken)
    }
    else if (valgteOperator === "x^y"){
        var resultat = parseInt(laastTal);

        for (let i = 0; i < (parseInt(talIBjaelken)-1); i++) {
            resultat = resultat * parseInt(laastTal);
        }
    
        talIBjaelken = resultat;
        
        console.log(talIBjaelken)
    }
    document.getElementById("resultater").innerHTML = talIBjaelken;
    ligeRegnet = 1
}