let tohex = function () {
    let voros = document.getElementById("voros").value;
    let zold = document.getElementById("zold").value;
    let kek = document.getElementById("kek").value;
    let eredmeny = "#";
    eredmeny += toHexString(voros);
    eredmeny += toHexString(zold);
    eredmeny += toHexString(kek);
    beallit(eredmeny);
    document.getElementById("hexa").value = eredmeny
}

let torgb = function () {
    let hexa = document.getElementById("hexa").value;
    let voros = parseInt(hexa.substring(1, 3), 16);
    let zold = parseInt(hexa.substring(3, 5), 16);
    let kek = parseInt(hexa.substring(5), 16);
    beallit(hexa);
    document.getElementById("voros").value = voros;
    document.getElementById("zold").value = zold;
    document.getElementById("kek").value = kek;
}

function beallit(color) {
    document.getElementById("teszt").style.backgroundColor = color;
}

function toHexString(kod) {
    let eredmeny = Number(kod).toString(16).toUpperCase();
    if (eredmeny.length < 2) {
        eredmeny = "0" + eredmeny;
    }
    return eredmeny;

}

let rgbGomb = document.getElementById("toHex");
let hexGomb = document.getElementById("toRGB");
rgbGomb.addEventListener("click", tohex, false);
hexGomb.addEventListener("click", torgb, false);

const piroska = "Piroska";
let érték = 15;
console.log("A mese hős neve: " + piroska + ", a kosarában " + érték + " darab gyümölcs van!");
console.log(`A mese hős neve: ${piroska}, a kosarában ${érték} darab gyümölcs van!`);
console.log("A mese hős neve: ${piroska}, a kosarában ${érték} darab gyümölcs van!");

let a = 1;
let b = -2;
let c = 1;
let diszkriminans = b * b - 4 * a * c;
//Ha a nulla, nem másodfokú
let x1 = (-b + Math.sqrt(diszkriminans)) / (2 * a);
let x1 = (-b - Math.sqrt(diszkriminans)) / (2 * a);