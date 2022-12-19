//Functions 
// function logger(){
//     console.log(`My name is aditya`);
// }

// //calling // running // invoking function
// logger();



// function fruitProcessor (apples, oranges){
//     const juice = `Juice with ${apples} apples and ${oranges}oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// const orangeJuice = fruitProcessor(1,7);
// console.log(orangeJuice);

// // assignment no 1 //
// function describeCountry (country,population ,capitalCity){
//     const countryName = `${country} has ${population} million people and its capital city ${capitalCity}`
//     return countryName;
// }
// const country1 = describeCountry('finland', 6, 'Helsinki' )
// console.log(country1)
// const country2 = describeCountry('india', 125, 'delhi')
// console.log(country2)
// const country3 = describeCountry('pakistan', 11, 'islamabad')
// console.log(country3)

//  // function declaration //
//  function calcAge1(birthYear) {
//     return 2025 - birthYear;
//  }
//  const age1 = calcAge1(1994);

//  // function expression //
//  const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
//  }
//  const age2 = calcAge2(1994);
//  console.log (age1,age2);

//  // Assignment no 2 //
// // function declaration //

//  function percentageOfWorld1 (population){
//     return (population/7900) *100 ;
//  }
//  const populationOfCountry1 = percentageOfWorld1(125)
 
//  const populationOfCountry2 = percentageOfWorld1(10)
 
//  const populationOfCountry3 = percentageOfWorld1(140)
//  console.log(populationOfCountry3, populationOfCountry2 ,populationOfCountry1);

//  // function expression //
//  const percentageOfWorld2 = function (population){
//     return (population/7900) *100 ;
//  }
//  const populationOfIndia = percentageOfWorld1(125);
//  console.log(populationOfIndia)

// Arrow function 
// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearsRetirement =(birthYear, firstName) =>{
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`; 
// }
// console.log (yearsRetirement (1994, 'adi'));
// console.log (yearsRetirement(2003,'sayali'));

// // Assignment No 2 
// const  percentageOfWorld3 = population => (population/7900) *100 ;

// const populationOfCountry4 = percentageOfWorld3(526)
// console.log(populationOfCountry4)

// function calling function//
// function cutFruitPieces(fruit){
//     return fruit = 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

//coding challenge #1 //
// const calcAverage = (a,b,c) => (a + b + c) / 3;
// console.log(calcAverage (3,4,5));

// // Test 1 
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas)
// {
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`dolphins win🏆(${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas => 2 * avgDolphins){
//         console.log(`koalas win🏆(${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else{
//         console.log('no team wins...');
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas);
// checkWinner(576,111)

// //Test 2 
// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins,scoreKoalas);

// Array //
// const friend1 = 'abhi';
// const friend2 = 'aditya';
// const friend3 = 'sayali';

// const friends = ['abhi','aditya','sayali'];
// console.log(friends);

// const yearss = new Array (1991,1994,2003,2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'sia';
// console.log(friends);

// const firstName = 'aditya';
// const info = [firstName, 'akhare', 2022-1994,'developer',friends ]
// console.log(info);
// console.log(info.length);

// // Exercise 
// const calcAge = function (years){
//     return 2022 - years;
// }

// const years = [1994, 1992, 2003, 1997];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
// console.log(ages);

// const friends = ['abhi','aditya','sayali'];

// // Add elements
// const newLength = friends.push('sia'); // push add element to the last 
// console.log(friends);
// console.log(newLength);

// friends.unshift('yograj'); // unshift add element to first 

// // Remove elements 
// friends.pop(); // remove last element 
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove first element
// console.log(friends);

// console.log(friends.indexOf('abhi'));
// console.log(friends.indexOf('kartik'));

// friends.push(23);
// console.log(friends.includes('abhi'));
// console.log(friends.includes('kartik'));
// console.log(friends.includes(23));

// if (friends.includes('abhi')) {
//     console.log('you have one friend');
// }

// // Coding challenge 2

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])
//     ];
    

// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
// console.log(bills,tips,total);

// DOT vs BRACKET NOTATION 
// const adi = {
//     firstName: 'aditya',
//     lastName:'akhare',
//     age: 2022-1994,
//     job: 'developer',
//     friends: ['abhi', 'sia', 'rushi']

// };
// console.log(adi);
// console.log(adi.lastName); //dot notation
// console.log(adi['lastName']);

// const nameKey  = 'Name';
// console.log(adi['first' + nameKey]);
// console.log(adi['last' + nameKey]);

// const interestedIn = prompt('what do you know about adi? Choose between firstName, lastName, age, job, and friends');
// if(adi(interestedIn)){
//     console.log(adi(interestedIn));
// }else{
//     console.log('wrong request! Choose between firstName, lastName, age, job, and friends ')
// }

// adi.location = 'adi';
// adi['twitter'] = '@adicurious';
// console.log(adi);
// console.log(`${adi.firstName} has ${adi.friends.length} friends, and his best friend is called ${adi.friends[0]}`);
 

// OBJECT METHODS 
// const adi = {
//     firstName: 'aditya',
//     lastName:'akhare',
//     age: 2022-1994,
//     job: 'developer',
//     friends: ['abhi', 'sia', 'rushi'],
//     hasDriversLicense:true,
    
//     calcAge: function(){
//         // console.log(this);
//         return 2022 - this.age
//     },
//     getSummery: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//     };
//     console.log(adi.calcAge());
//     console.log(adi.getSummery());

// Coding Challenge #3 //
// const mark = {
//     firstName:'Mark',
//     lastName:'Miller',
//     mass:78,
//     height:1.69,

//     calcBMI:function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// };
// mark.calcBMI();
// console.log(mark.bmi);
// const john = {
//     firstName:'John',
//     lastName:'Smith',
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }

// };
// john.calcBMI();
// console.log(john.bmi);

// if(mark.bmi>john.bmi){
//     console.log(`${mark.firstName}'s BMI ${mark.bmi} is higher then ${john.firstName}'s BMI ${john.bmi} ` )
// }else if (john.bmi>mark.bmi){
//     console.log(`${john.firstName}'s BMI ${john.bmi} is higher then ${mark.firstName}'s BMI ${mark.bmi} ` )
// }

// The FOR Loop

// for(let rep = 1; rep<=10; rep++){
//     console.log(`eating banana ${rep}`)
// };

// Looping Array, Breaking and continue //


// const adi = [
//     'aditya',
//     'akhare',
//      2022-1994,
//     'developer',
//     ['abhi', 'sia', 'rushi']
// ]
// const types = [];
// for(let i = 0; i<adi.length; i++){
//     // Reading from jonas array
//     console.log(adi[i],typeof adi[i]);
//     // Filling types array
//     // types[i] = typeof adi[i];
//     types.push(typeof adi[i]);
// }
// console.log(types);

// const years = [1994,2003,1997,2000,1992];
// const ages= [];

// for (let i = 0; i<years.length; i++){
//     ages.push(2022-years[i]);
// }
// console.log(ages);

// // continue and break 
// // ONLY STRINGS //
// for(let i = 0; i<adi.length; i++){
//     if(typeof adi[i] !== 'string')continue;
//     console.log(adi[i], typeof adi[i]);
// }

// // BREAK WITH NUMBER //
// for (let i = 0; i<adi.length;i++){
//     if(typeof adi[i] === 'number') break;
//     console.log(adi[i], typeof adi[i]);
// }

// Looping backwards and loops in loops //
// const adi = [
//     'aditya',
//     'akhare',
//      2022-1994,
//     'developer',
//     ['abhi', 'sia', 'rushi']
// ]
// for(let i =adi.length-1; i>=0; i--){
//     console.log(i,adi[i]);
// }

// for(let exercise=1; exercise<4; exercise++){
//     console.log(`------starting exercise ${exercise}`);

//     for(let rep = 1;rep<6; rep++){
//         console.log(`${exercise}: lifting weightt repetation ${rep}`);
//     }
// };

// While loop

// let rep =1;
// while (rep<=10) {
//     console.log(`WHILE: eating banana ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random()*6)+1;

// while (dice !==6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
//     if (dice === 6) console.log('loop is end');
// };

// Coding challenge #4
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
 }

const bills = [
22,295,176,440,37,105,10,1100,86,52
]

const tips =[];
const total = [];

for(let i=0; i<bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    total.push(tip+bills[i]);
}
console.log(bills,tips,total)

const calcAverage = function (arr) {
    let sum = 0;
    for(let i= 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,7]));