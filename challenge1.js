/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(name) {
  console.log(name);
}
printName("ghizlane");
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birth) {
  let age = 2023 - birth;
  console.log(`you age is ${age}`);
}
printAge(1987);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, lan) {
  if (lan == "en") {
    console.log(`Hello ${name}`);
  } else if (lan == "es") {
    console.log(`Hola ${name}`);
  } else if (lan == "fr") {
    console.log(`Bonjour ${name}`);
  } else {
    console.log(`Merhaba ${name}`);
  }
}
printHello("ghizlane", "fr");
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(nam1, nam2) {
  if (nam1 > nam2) {
    console.log(`${nam1}is greater than ${nam2}`);
  } else {
    console.log(`${nam2}is greater than ${nam1}`);
  }
  console.log(`${Math.max(nam1, nam2)} is bigger`);
}
printMax(12, 34);
