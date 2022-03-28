"use strict";

// const students = ["Max", "Moritz", "Monika"]

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i] + " ist Teilnehmer:in " + (i + 1) + " in der Liste");
// }

// for (let i in students) {
//   console.log(i);
// }

// for (const student of students) {
//   console.log(student);
// }


const items = [0, 1]

for (const i in items) {
  console.log("i: ", typeof i, i);

  if (i === "0") {
    console.log("Das ist ne Null!");
  }
}