"use strict";

// Der erste Sprachkurs der Sprachschule
let students1 = ["Torsten", "Laura", "Johannes", "Max"];

// Der zweite Sprachkurs der Sprachschule
let students2 = ["Tobias", "Anna", "Michelle"];

//
// Aufgabe 1)
//
// Schreibe Code, der prüft, ob ein Teilnehmer in einem Sprachkurs
// eingeschrieben ist. Verwende dazu nur eine if-Abfrage, die ein &&
// oder ein || enthält.
//
// Wichtig: Du musst sowohl die Liste students1, als auch die Liste
//          students2 prüfen!
//
// Beispielausgabe:
//  - Bei student = "Torsten": "Torsten ist eingeschrieben"
//  - Bei student = "Felix": "Felix ist nicht eingeschrieben"

let student = "Torsten";

// Schreibe deinen Code hier

if (
  students1.indexOf(`${student}`) === -1 &&
  students2.indexOf(`${student}`) === -1
) {
  console.log(`${student} ist nicht eingeschrieben`);
} else {
  console.log(`${student} ist eingeschrieben`);
}

// Aufgabe 2)
//
// Bei unserer Sprachschule bewirbt sich ein neuer Teilnehmer namens
// "Tom". Platziere ihn in dem Sprachkurs, der weniger Teilnehmer hat!
//
// Wichtig: Der Code soll universell funktionieren, also egal ob
// gerade in Kurs 1 oder Kurs 2 weniger Teilnehmer sind!
//
// Verwende also eine if-Abfrage, um ihn in genau dem Sprachkurs zu
// platzieren, der weniger Teilnehmer hat!

let newStudent = "Tom";

// Schreibe deinen Code hier

// if (students1.length <= students2.length) {
//   students1.push(`${newStudent}`);
// } else {
//   students2.push(`${newStudent}`);
// }

// console.log(students1);
// console.log(students2);

// Aufgabe 3)
//
// Tobias muss seinen Sprachkurs absagen. Schreibe Code, der dafür sorgt,
// dass er aus seiner Liste entfernt wird.
//
// Wichtig: Auch dieser Code soll universell sein, der gleiche Code soll
// auch "Torsten" aus der jeweiligen Liste entfernen können!
//
// Du wirst hierzu also auch eine if-Abfrage benötigen.
//
// Im Idealfall kommt der Code auch damit zurecht, wenn der Teilnehmer
// weder in students1, noch in students2 eingeschrieben ist - dann soll
// gar nichts passieren.

// Schreibe deinen Code hier

let memme = "Tobias";

if (students1.includes(`${memme}`)) {
  students1.splice(students1.indexOf(`${memme}`), 1);
} else {
  students2.splice(students2.indexOf(`${memme}`), 1)
}

console.log(students1);
console.log(students2);


// Aufgabe 4)
//
// Je mehr Teilnehmer am Sprachkurs teilnehmen, desto weniger
// soll der Sprachkurs pro Teilnehmer kosten. Schreibe Code,
// der für die Variable "numberOfStudents" ausgibt, wie viel
// der Sprachkurs kosten soll!
//
// - Bei nur einem Teilnehmer: 40€ / Stunde / Teilnehmer
// - Bei 2-5 Teilnehmern: 25€ / Stunde / Teilnehmer
// - Bei 6 oder mehr Teilnehmern: 15€ / Stunde / Teilnehmer
//
// Beispielausgabe (bei numberOfStudents = 1):
//  -> Der Sprachkurs kostet 40€ / Stunde / Teilnehmer.
//
// Beispielausgabe (bei numberOfStudents = 5):
//  -> Der Sprachkurs kostet 25€ / Stunde / Teilnehmer.
//
// Beispielausgabe (bei numberOfStudents = 6):
//  -> Der Sprachkurs kostet 15€ / Stunde / Teilnehmer.
//
// Tipp: Verwende hierzu ein if...else if-Konstrukt!
//
let numberOfStudents = 0;


let cost

if (numberOfStudents <= 1) {
  cost = "40€"
} else if (numberOfStudents <= 5) {
  cost = "25€"
} else {
  cost = "15€"
}

console.log(cost);
