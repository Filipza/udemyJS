"use strict"

// Aufgabe 1:
// 
// Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert
// werden. Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.
//
// Wandle zuerst den Betrag in die englische Schreibweise um (15.37). Ersetze
// dazu mit Hilfe von .replace() das Komma durch einen Punkt.
//
// Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein, und
// rechne ihn in Cent um. 
// 
// Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann. Der 
// Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt
// (vereinfacht den Code etwas).
// 
// Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den 
// Rest. Versuche, zuerst große Münzen auszugeben!
//
// Tipp: Rechne den Betrag am besten zuerst in Cents um. Sonst treten leicht
// Rundungsfehler auf, die das Programm unnötig kompliziert machen!
//
// Natürlich soll das Programm so geschrieben werden, dass jeder
// Beliebige Betrag zurückgegeben werden kann.
// 
// Beispielausgabe: 
//  - 7x 2€ Münze
//  - 1x 1€-Münze
//  - 0x 50 Cent-Münze
//  - 1x 20 Cent-Münze
//  - 1x 10 Cent-Münze
//  - 1x 5 Cent-Münze
//  - 1x 2 Cent-Münze
//  - 0x 2 Cent-Münze

let amountStr = "22,30"

let amount = parseFloat(amountStr.replace(",", ".")) * 100;


let twoEuros = Math.floor(amount / 200);
let remainder = amount % 200;
let oneEuros = Math.floor(remainder / 100);
remainder = remainder % 100;

let fiftyCents = Math.floor(remainder / 50);
remainder = remainder % 50;

let twentyCents = Math.floor(remainder / 20);
remainder = remainder % 20;

let tenCents = Math.floor(remainder / 10);
remainder = remainder % 10;

let fiveCents = Math.floor(remainder / 5);
remainder = remainder % 5;

let twoCents = Math.floor(remainder / 2);
remainder = remainder % 2;
let oneCents = remainder

console.log("\n Rückgeld:");
console.log(` - ${twoEuros}x 2€-Münze`);
console.log(` - ${oneEuros}x 1€-Münze`);
console.log(` - ${fiftyCents}x 50 Cent-Münze`);
console.log(` - ${twentyCents}x 20 Cent-Münze`);
console.log(` - ${tenCents}x 10 Cent-Münze`);
console.log(` - ${fiveCents}x 5 Cent-Münze`);
console.log(` - ${twoCents}x 2 Cent-Münze`);
console.log(` - ${oneCents}x 1 Cent-Münze`);







/////////////////////////////////////////////////////////////////////////////

// Aufgabe 2
// 
// In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben. 
// Schreibe ein Programmn welches ca. 15-20% Tringeld auf eine Restaurant-
// Rechnung aufschlägt. 
//
// Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht 
// zu krumm ist.
//
// Kombiniere dazu geschickt die Rundungsfunktionen, Divisionen oder 
// Multiplikationen.
//
// Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen
// ausgegeben wird. Beispiel: "Der Gesamtbetrag beträgt 20.00$"
//
// - Beispiel: Rechungsbetrag 17.00$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel Rechungsbetrag 16.50$    -> Der Gesamtbetrag beträgt 20.00$
// - Beispiel: Rechungsbetrag 10.00$    -> Der Gesamtbetrag beträgt 12.50$
//
// Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr 
// funktioniert!


let bill = 16.00;

let tip = bill * 0.125;

let sum = bill + tip;

let total = Math.ceil(sum / 2.5) * 2.5;
total = total.toFixed(2)

console.log("\nDer Betrag inkl. Trinkgeld beträgt $" + total + "\n");