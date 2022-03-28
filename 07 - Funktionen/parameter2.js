"use strict";

// Wir definieren eine erste Funktion
function sayHello(name, language) {
  if (language === "de") {
    console.log("Hallo " + name + "!");
  } else if (language === "en") {
    console.log("Hi " + name + "!");
  } else {
    console.log("What are you!?");
  }
}

sayHello("Max", "de");
sayHello("Erika", "de");
sayHello("John", "en");
sayHello("Gobble", "marsian");
