"use strict"

let studentsPerCourse = [
  ["Max", "Monika"], // Erster Kurs
  ["Erik", "Erika"] // Zweiter Kurs
]

let indexLeastStudents = -1
for (const i in studentsPerCourse) {
  const course = studentsPerCourse[i];
  console.log(course);

  if (indexLeastStudents === -1) {
    indexLeastStudents = i; 
  }
  
  
  else {
    if (course.length < studentsPerCourse[indexLeastStudents].length) {
      indexLeastStudents = i;
    }
  }
}
