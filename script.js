function plus(){
    var a = parseInt(document.getElementById("talInput1").value);
    var b = parseInt(document.getElementById("talInput2").value);
    console.log(a + b)
    return a + b
}

function minus(){
    var a = parseInt(document.getElementById("talInput1").value);
    var b = parseInt(document.getElementById("talInput2").value);
    console.log(a - b)
    return a - b
}

function gange(){
    var a = parseInt(document.getElementById("talInput1").value);
    var b = parseInt(document.getElementById("talInput2").value);
    console.log(a * b)
    return a * b
}

function division(){
    var a = parseInt(document.getElementById("talInput1").value);
    var b = parseInt(document.getElementById("talInput2").value);
    console.log(a / b)
    return a / b
}

function iAnden(){
    var a = parseInt(document.getElementById("talInput1").value);
    console.log(a * a)
    return a * a
}

function iX(){
    var a = parseInt(document.getElementById("talInput1").value);
    var b = parseInt(document.getElementById("talInput2").value);

    var resultat = a;

    for (let i = 0; i < (b-1); i++) {
        resultat = resultat * a;
    }
    console.log(resultat)
    return resultat
}

var pi = 3.1415926535897932384626433832795;

function kvadratRod(){
    var a = parseInt(document.getElementById("talInput1").value);
    console.log(Math.sqrt(a));
    return Math.sqrt(a);
}