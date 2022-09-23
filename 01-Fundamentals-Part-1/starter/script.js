
////////////////////////////////////
// Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

////////////////////////////////////
// Data Types
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

////////////////////////////////////
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// birthYear = 1990;
// const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';
// console.log(lastName);

//////////////////////////////////// */
// Basic Operators //
 // Math operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);*/

//Assignment operators//

/*let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// Coding Challenge #1


// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

//String and template literals//
// const firstName = 'aditya';
// const job = 'developer';
// const birthYear = '1994'
// const year = '2022';

// const aditya = "i'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(aditya);
// const adi = `i'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(adi)
// console.log(`just a regular string...`);
// console.log(`string
// multiple 
// lines`);

// if else statements//
//  const age = 21;
//  const yearsLeft = 18- age;

//  if (age >= 18){
//     console.log(`sia can start driving a car🚗`);
//  }else{
    
//     console.log(`sia is to young. wait for another ${yearsLeft} years:)`);

//  }



//  const birthYear = 1991;

//  let century; 
//  if(birthYear<=2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);

// //assignment if else statements//

// const country = 'portugal';
// let population = 22
// if(population>33){
//     console.log(`${country}'s population is above average `);
// }else{
//     console.log(`${country}'s population is ${33-population} million below average`)
// }

// //coding challenge #2 //

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// if(BMIMark>BMIJohn){
//     console.log(`mark's BMI (${BMIMark}) is higher than john's (${BMIJohn}) `)

// }else{
//     console.log(`john's BMI (${BMIJohn}) is higher than 'mark's (${BMIMark})`)
// }

// Type conversion //
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);
// console.log(Number("aditya"));
// console.log(typeof NaN);
// console.log(String(23),23);

// // Type coercion
//  console.log('i am ' + 28 + ' years old');
//  console.log('23' - '10' - 3);
//  console.log('23' / '2');
//  let n = '1' + 1; // '11'
//  n = n - 1;
//  console.log(n);
//  console.log(2+3+4+'5'); //95
//  console.log('10'-'4'-'3'-2+'5') // 15

// Truthy and falsy value
// 5 falsy value : 0,"", undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('aditya'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("don't spend it all");
// }else{
//     console.log("yop should get a job");
// }

// let height;
// if (height) {
//     console.log("height is defined")
    
// }else{
//     console.log("height is undefined")
// }

// Equality Operators //
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');9

// logical operator //
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log (hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if(hasDriversLicense && hasGoodVision){
// //   console.log('adi is able to drive');
// // }else{
// //   console.log('someone else should drive');
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//   console.log('adi is able to dirve');
// }else{
//   console.log('Someone else should drive')
// }

//Coading challenge #3
// let ScoreDolphins = (96 + 108 + 89) / 3;
// let ScoreKoalas = (88 + 95 + 110) / 3;
// console.log(ScoreDolphins, ScoreKoalas);
 
// if (ScoreDolphins > ScoreKoalas){
//   console.log('Dolphins wins the trophy🏆');
// }else if(  ScoreKoalas > ScoreDolphins){
//   console.log('Koalas Wins the trophy🏆')
// }else if(  ScoreKoalas === ScoreDolphins){
//   console.log('both wins the trophy!')
// } 
// bonus 1 //

// let ScoreDolphins = (97 + 112 + 101) / 3;
// let ScoreKoalas = (109 + 95 + 123) / 3;
// console.log(ScoreDolphins, ScoreKoalas);
 
// if (ScoreDolphins > ScoreKoalas && ScoreDolphins >= 100){
//   console.log('Dolphins wins the trophy🏆');
// }else if(  ScoreKoalas > ScoreDolphins && ScoreKoalas >= 100){
//   console.log('Koalas Wins the trophy🏆')
// }else if(  ScoreKoalas === ScoreDolphins){
//   console.log('both wins the trophy!')
// } 

// bonus 2 //
// let ScoreDolphins = (97 + 112 + 81) / 3;
// let ScoreKoalas = (109 + 95 + 86) / 3;
// console.log(ScoreDolphins, ScoreKoalas);
 
// if (ScoreDolphins > ScoreKoalas && ScoreDolphins >= 100){
//   console.log('Dolphins wins the trophy🏆');
// }else if(  ScoreKoalas > ScoreDolphins && ScoreKoalas >= 100){
//   console.log('Koalas Wins the trophy🏆')
// }else if(  ScoreKoalas === ScoreDolphins && ScoreDolphins >= 100 && ScoreKoalas >=100){
//   console.log('Both wins the trophy!')
// } else{
//   console.log('No one wins the trophy😒');
// }

 // The switch Statements //
//  const day = 'monday';

//  switch(day) {
//   case 'monday': // day === 'monday'
//   console.log('plan a course structure')
//   console.log('go to coading meetup');
//   break;
//   case 'tuesday':
//     console.log('prepare theory video')
//     break;
//     case 'wednesday':
//     case 'thursday':
//       console.log ('write code examples')
//       break;
//       case 'friday':
//         console.log('record videos');
//         break;
//         case 'saturday':
//           case 'sunday':
//           console.log('enjoying weekend');
//           break;
//           default:
//             console.log('not a valid day');
//  }

//  if (day === 'monday'){
//     console.log('plan a course structure')
//     console.log('go to coding meetup');
//  }else if (day === 'tuesday'){
//     console.log('prepare theory video')
//  }else if(day === 'wednesday' || day === 'thursday'){
//     console.log ('write code examples')
//  }else if(day === 'friday' ){
//     console.log('record videos');
//  }else if(day === 'saturday' || day === 'sunday'){
//     console.log('enjoying weekend');
//  }else {
//     console.log('Not a valid day');
//  }

// Statement and Expressions //
// 3 + 4
// 1991
// true && false && !false
// if (23 > 10) {
//     const str = '23 is bigger'

// }
// const me = 'adi';
// console.log(`i'm ${2022-1994} years old ${me}`)

// The Conditional(Ternary) operator
// const age = 28;
// age >= 18 ? console.log('i like to drink wine 🍷'):
// console.log('i like to drink water 🚰')

// const drink = age >= 18 ? 'wine🍷' : 'water🚰';
// console.log(drink);

// let drink2;
// if (age >= 18){
//     drink2 = 'wine🍷';   
// }else{
//     drink2 = 'water🚰'
// }
// console.log(drink2);

// console.log(`i like to drink ${age >= 18 ? 'wine🍷' : 'water🚰'}`);

// coding challenge #4 //
// const bill = 430;

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15: bill * 0.2;
// console.log(`the bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)