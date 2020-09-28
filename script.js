var talIBjaelken = "0";
var valgteOperator = "";
var laastTal = "";
var pi = 3.1415926535897932384626433832795;


function tast1(){
    console.log("Taster 1")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "1"
    } else
        talIBjaelken = talIBjaelken + "1"
}
function tast2(){
    console.log("Taster 2")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "2"
    } else
        talIBjaelken = talIBjaelken + "2"
}
function tast3(){
    console.log("Taster 3")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "3"
    } else
        talIBjaelken = talIBjaelken + "3"
}
function tast4(){
    console.log("Taster 4")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "4"
    } else
        talIBjaelken = talIBjaelken + "4"
}
function tast5(){
    console.log("Taster 5")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "5"
    } else
        talIBjaelken = talIBjaelken + "5"
}
function tast6(){
    console.log("Taster 6")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "6"
    } else
        talIBjaelken = talIBjaelken + "6"
}
function tast7(){
    console.log("Taster 7")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "7"
    } else
        talIBjaelken = talIBjaelken + "7"
}
function tast8(){
    console.log("Taster 8")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "8"
    } else
        talIBjaelken = talIBjaelken + "8"
}
function tast9(){
    console.log("Taster 9")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "9"
    } else
        talIBjaelken = talIBjaelken + "9"
}
function tast0(){
    console.log("Taster 0")
    if(talIBjaelken === pi || talIBjaelken === "0"){
        talIBjaelken = "0"
    } else
        talIBjaelken = talIBjaelken + "0"
}
function tastpi(){
    talIBjaelken = pi
    console.log("Taster Pi")
}

function C(){
    talIBjaelken = "0"
    console.log("Sletter...")
}

function plus(){
    valgteOperator = "+";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Plusser...")
}
function minus(){
    valgteOperator = "-";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Minusser...")
}
function gange(){
    valgteOperator = "*";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Ganger...")
}
function division(){
    valgteOperator = "/";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("Dividere...")
}
function iAnden(){
    talIBjaelken = parseInt(talIBjaelken) * parseInt(talIBjaelken);
    console.log("Opløfter i anden...")
}
function iY(){
    valgteOperator = "x^y";
    laastTal = talIBjaelken;
    talIBjaelken = "";
    console.log("x opløftet i y...")
}
function kvadratRod(){
    valgteOperator = "sqrt";
    talIBjaelken = Math.sqrt(parseInt(talIBjaelken))
    console.log("Tager kvadratroden...")
}



function ligMed(){
    console.log("Resultat er...")
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
// implementer noget til at slette når du skriver nye tal ind efter du har regnet noget
}