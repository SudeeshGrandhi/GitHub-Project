"use strict";
const obj12345 = {
  hi: "hello",
  hello: "hi",
  fname() {
    console.log(this.hi, this.hello);
  },
};
obj12345.fname();

console.log(this);
//this keyword in global scope refer to window object with or without strict
console.log("Hiiii");

function fname() {
  console.log(this);
}
fname();
//This keyword inside function with strict mode will refer to global object and undefined without strict
document.querySelector(".jsbtn").addEventListener("click", function () {
  document.querySelector(".jsp").innerHTML = "hi";
});

console.log("5" + 2 + 3);

const country = "India",
  continent = "Asia";

let population = 1378.6;

console.log(country, continent, population);

const isIsland = true;
let language;

console.log(
  typeof country,
  typeof continent,
  typeof population,
  typeof isIsland,
  typeof language
);

language = "Hindi";

let halfPopulation = population / 2;
console.log(halfPopulation);
halfPopulation += 1;
console.log(halfPopulation);

let finlandPop = 6;
console.log(population > finlandPop);

let avgPopu = 33;
console.log(population < avgPopu);

const description = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description);

let x = 10;
{
  let x = 2;
  console.log(x);
}
console.log(x);

const carsArray = ["saab", "toyoto", "BMW"];
console.log(carsArray);
//you cannot change entire array but values of individuals can be changed

carsArray[2] = "alto";
console.log(carsArray.length);
console.log(carsArray);

const carObject = {
  type: "Fiat",
  model: 500,
  color: "white",
};
console.log(carObject);

carObject.color = "red";
console.log(carObject);

console.log(2 ** 5);

console.log(123e-5);
console.log(123 * 10 ** -5);

let sita;
let ramu = undefined;
console.log(sita === ramu);

const sudeeshArray = ["professional", "coder", 27];
const sudeeshObj = {
  age: 27,
  weight: 67,
  profession: "coder",
  hobbies: "watching cricket",
  birthyear: function (byear) {
    return 2037 - byear;
  },
};

console.log(sudeeshObj.birthyear(1995));

console.log(typeof sudeeshArray[2]);
console.log(typeof sita);
console.log(typeof ramu);

//function declaration
function sudeesh(birthyear) {
  return 2023 - birthyear;
}

//function expression
const sudeesh1 = function (birthyear) {
  return 2023 - birthyear;
};

//arrow function
const sudeesh2 = (birthyear) => 2023 - birthyear;

console.log(sudeesh(1995));
console.log(sudeesh1(1995));
console.log(sudeesh2(1995));

function myfunction(a, b) {
  return a * b;
}
const mf1 = myfunction(2, 3);
console.log(mf1);

//conversion of farenheit to celsius

const toCelsius = function (farenheitTemp) {
  return (farenheitTemp - 32) * (5 / 9);
};
console.log(toCelsius(105));

console.log(Number(`${sudeesh2(1995)}` + `${toCelsius(105)}`));

const person = {
  firstName: "Grandhi",
  lastName: "Sudeesh",
  id: 140,
  age: 27,
  profession: "Coder",
  description: function () {
    console.log(this);
    return `${this.lastName} ${this.firstName} is a Professional ${this.profession}`;
  },
};
const person2 = {
  description: function () {
    return `${this.lastName} ${this.firstName} ${this.age} is a Professional ${this.profession}`;
  },
};
console.log(person2.description.call(person));

let key = 20;
function thisCheck() {
  console.log(this);
}
thisCheck();
console.log(this);

const obje = {
  person: "one",
  person1: "two",
  person2: "three",
  person3: function () {
    return `${this.person} ${this.person1} ${this.person2}`;
  },
};
console.log(obje.person3());
const obje1 = {
  person: "ne",
  person1: "wo",
  person2: "hree",
  person3: function () {
    return `${this.person} ${this.person1} ${this.person2}`;
  },
};

console.log(obje.person3.call(obje1));

let funbind = obje1.person3.bind(obje);
console.log(funbind());

const objtec = {
  obj: 12,
  jbo: 21,
  ji: 1,
  ij: function () {
    return `${this.obj}${this.jbo}${this.ji} `;
  },
};
console.log(objtec.ij());

const objtec1 = {
  obj: 122,
  jbo: 213,
  ji: 14,
  ij: function () {
    return `${this.obj}${this.jbo}${this.ji} `;
  },
};
console.log(Number(objtec.ij.call(objtec1)));

let objtec2 = objtec1.ij.bind(objtec);
console.log(Number(objtec2()));

console.log("We are the so-called 'Vikings' from the north");
console.log("hihow");
console.log(`Things to learn in strings \n "vikings" `);
console.log('When double quotes used "vikings"');
console.log("When using single 'quotes'");
let text = "asdfghj\
klqwertyuiopzxcvbnm";
console.log(text);
console.log(text.length);

const str = new String("john");
console.log(str);
console.log(typeof str);
//If we use new String we can turn string into an object
const str1 = "john";
//comparing 2 javascript objects will always turn false

console.log(str1.slice(0, 1));

const king = "Sudeesh is very very very Sgood boy";

//to replace every word
console.log(king.replace(/very/g, "very very"));
//to ignore case sensitive
console.log(king.replace(/VerY/i, "very very"));

console.log(king.toUpperCase());
console.log(king.toLowerCase());

console.log(
  king
    .split(" ")
    .map(function (wrd) {
      return wrd.slice(0, 1).toUpperCase() + wrd.slice(1);
    })
    .join(" ")
);

console.log(king.replace(/very/i, "very very"));

console.log(king.trim());
console.log(
  king
    .split(" ")
    .map(function (wrd) {
      return wrd.padStart(10, 0);
    })
    .join(" ")
);

let eb = "I can eat can Bananas all day";
console.log(king.charAt(8));
console.log(king.length);
console.log(king.slice(0, -1));
console.log(king.replace("Sudeesh", "SudeeshKumar"));
console.log(king.toUpperCase());
console.log(king.toLowerCase());
console.log(king.split(" "));
console.log(king.split(" ").join(" "));
console.log(eb.indexOf("B"), eb.lastIndexOf("z"));
//both will return -1 if that particular text is not found
console.log(eb.slice(10, 17));

console.log(eb.search(/ban/gi));
console.log(eb.includes("Ban"));
console.log(eb.startsWith("I"));
console.log(eb.endsWith("day"));

console.log(`sudeesh is ${2 * 13.5} years old booji boy`);

console.log(111, 111, 111, 111, 1111);

/* 

LECTURE: Taking Decisions: if / else Statements
1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original
LECTURE: Type Conversion and Coercion
1. Predicttheresultofthese5operationswithoutexecutingthem:
'9' - '5';
'19' - '13' + '17'; '19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Executetheoperationstocheckifyouwereright

*/

// if(population>33){
//     console.log(`${country}'s population is above average`);
// }else{
//     console.log(`${country}'s population is ${33-population} million below average`);

// }
// console.log('9'-'5','19'-'13'+'17','19'-'13'+17,'123'<57, typeof(5+6+'4'+9-4-2));
// console.log(typeof(9-'5'));
// //'4',617,

// console.log(6.22e139);
// console.log(((0.1*10)+(0.1*10))/10);
// console.log('10'+20,typeof('10'+20));
// console.log(''+10+20,typeof(''+10+20));

//datatypes 1)objects 2)primitives-->1)Strings 2)Number 3)Boolean 4)empty 5)Bigint 6)undefined 7)NAN

//type of Nan is always a number
console.log(typeof NaN);
console.log(100 / 0, typeof (100 / "Apple"), isNaN(100 / "Apple"));

console.log(NaN + 5, typeof (NaN + 5));
console.log(typeof 4, typeof (NaN + 5), isNaN(4 / "inj"));
console.log(NaN + "5");

const hjy = [2, 3, 4, 5, 56, 6, 7];
for (let i = 0; i < hjy.length; i++) {
  console.log(hjy[i] * hjy[i + 1]);
}

const nobju = new Number(123);
console.log(nobju, typeof nobju);
const numn = new Number(123);
console.log(typeof Number("" + numn));
console.log(typeof numn);

//string to object
const str156 = "Hello how are you how do you do";
console.log(new String(str156), typeof new String(str156));

//string to a number(If you try to convert normal string to number it will result in NaN)
console.log(Number("str156"), typeof Number(str156));

//string to Array
console.log(str156.split(" "));

//Number to string
const num156 = 309;
console.log(num156 + "");

//number to object
console.log(new Number(num156));

console.log(num156.toString());

const mni = 150.9884;
//toFixed method specifies number of decimals
console.log(mni.toFixed(4));

//toprecision decides total length of number

console.log(mni.toPrecision(6));

//the below will return no of milli seconds from 1970 jan 1
console.log(Number(new Date()));

//to get only integer value
console.log(parseInt("1067.789  678"));

const rty = "fght gjgut fhhjhj xjkja";
console.log(rty.lastIndexOf("a"));

console.log(Number.MAX_VALUE / Number.MAX_SAFE_INTEGER);

const newartty = ["banana", "orange", "apple", "kiwi"];
console.log(newartty.splice(1, 2));

const cars = ["Saab", "Volvo", "BMW"];
const cars1 = [];

cars1[0] = "bMW";
cars1.push("volvo");
cars1.unshift("saab");
console.log(cars1);
cars1[0] = "Alto";
console.log(cars1, typeof cars1);
const pers = [
  function sudeesh() {},
  ["hi,hello,how"],
  {
    firstname: "su",
  },
];
console.log(pers[2]);

console.log(pers.length);
console.log(pers[pers.length - 1]);

//looping Arrays
let cr = [];
for (let i = 0; i < cars.length; i++) {
  cr.push(cars[i]);
}
console.log(cr);
let cr1 = [];
cars.forEach(function (wrd, i) {
  cr1.push(`${wrd}`);
});
console.log(cr1);

console.log(Array.isArray(rty));

const stri = "hi heello hfu djks shdh shsjjs";
const gh = stri.split(" ");
console.log(gh);
console.log(gh.join(" ,"));

const vegetables = ["onion", "tomato", "carrot", "betroot", "mullangi"];
vegetables.pop();
console.log(vegetables.pop());
const fruits = ["apple", "banana", "pineapple", "Kiwi"];
console.log(vegetables.concat(fruits, cars, "hello"));

const mixed = vegetables.concat(fruits, cars, "hello");
console.log(mixed);

console.log(mixed.slice(1, 2));
console.log(mixed);
console.log(mixed.splice(2, 2));

//will show deleted ones
console.log(fruits.splice(1, 2));
console.log(fruits);

console.log(mixed);
console.log(mixed.sort());

const numascend = [2, 89, 67, 56, 78, 56];
//if result is positive b is sorted before a, if result is negative a is sorted before b
// numascend.sort(function(a,b){
//     return 0.5 - (Math.random());
// })
// console.log(numascend);
//2<5 === 2

//i=0,1,2,3,4,5
//i initial 5

document.querySelector(".sortButton").addEventListener("click", function () {
  for (let i = 0; i < numascend.length; i++) {
    let j = Math.trunc(Math.random() * i);
    let k = numascend[i];
    numascend[i] = numascend[j];
    numascend[j] = k;
  }
  console.log(numascend);
});

const minimum = [1, 2, 4, 56, 78, 9, 4, 3, 567];
// minimum.sort(function(a,b){
//     return b-a;
// })
console.log(minimum[0]);

let text1234 = [];
minimum.forEach(function (num) {
  text1234.push(num);
});
console.log(text1234);

const min1 = minimum.map(function (val, i) {
  return `${i}:${val}`;
});
console.log(min1);

const min2 = minimum.filter(function (val) {
  return val > 50;
});
console.log(min2);

const min3 = minimum.reduce(function (total, val, i) {
  return total + val;
}, 100);
//here 100 is initial value
console.log(min3);

const min4 = minimum.findIndex(function (val) {
  return val > 18;
});
console.log(min4);

const min5 = minimum.every(function (val) {
  return val > 500;
});
console.log(min5);

const min6 = minimum.some(function (val) {
  return val > 500;
});
console.log(min6);

console.log(minimum.indexOf(2));

const indecofmeth = [2, 3, 4, 5, 5, 6, 7, 7, 88, 89, 2, 3];
console.log(new Array(indecofmeth));
console.log(indecofmeth);
const tryyui = "hello ,how";
console.log(typeof new String(tryyui));

const min7 = minimum.find(function (val) {
  return val > 18;
});
console.log(minimum);
console.log(min7);

const min8 = Array.from({
  hi: "hello",
  hello: "hi",
});
console.log(min8);

const arraFlat = [1, [2, 3]];
console.log(arraFlat);
const fiaty = arraFlat.flatMap(function (val) {
  return val * 2;
});

const sudar = Array.from("Sudeesh");
console.log(sudar);

const sudar1 = "Sudeesh";
console.log(sudar1.split(""));

const arrkey = sudar.keys();
console.log({ arrkey });

const objkeys = {
  hi: "hiiile",
  hello: "hellole",
  how: "howle",
};
console.log(Object.entries(objkeys));
console.log(Object.keys(objkeys));

const hikl = Object.entries(objkeys).map(function (val) {
  return val[1];
});
console.log(hikl);

const artarray = [1, 2, 3, 4, "hi", "jk"];

console.log(Array.from(artarray));
//Aray.from() will turn into an array where methods can be used

const nestedArray = [1, [2, [3]], 4, [5, 6]];
console.log(
  nestedArray.flatMap(function (val) {
    return val;
  })
);
console.log(nestedArray);

const sortexa = [1, 4, 89, 5, 0, 67, 9];

sortexa.sort(function (a, b) {
  return b - a;
});
console.log(sortexa);

const newarray = new Array(7);
console.log(sortexa.fill(2));
console.log(sortexa);

console.log(new Date(2018));
//months will be from 0 to 1
//We should always specify the month

console.log(new Date(100000));
console.log(new Date(-100000000000));

const dateForm = new Date();
console.log(dateForm);
console.log(dateForm.toUTCString());
console.log(dateForm.toISOString());
console.log(dateForm.toDateString());
console.log(dateForm.toTimeString());

//ISO mode YYYY-MM-DDTHH:MM:SSZ
console.log(new Date("2018-03-20"));

console.log(new Date("2021-09-20T00:00+05:30"));

console.log(new Date("2022-02-16T08:48+05:30"));

console.log(new Date("2000-09-20T12:00:03+05:30"));

const date1 = new Date("2020-03-03T12:00:00+05:30");
console.log(date1);
console.log(Date.parse(date1) / (86400 * 365 * 1000));

//Date.parase(particula date) will give time spent in milliseconds from 1970
const numpar = 20.7689707;
console.log(numpar.toPrecision(4));

const d1 = new Date();
console.log(
  d1.getFullYear(),
  d1.getMonth(),
  d1.getDay(),
  d1.getHours(),
  d1.getSeconds(),
  d1.getMinutes(),
  d1.getDate(),
  d1.getTime()
);

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const preMonth = months[new Date().getMonth()];
console.log(preMonth);

d1.setFullYear(2022);
d1.setDate(31);
d1.setMonth(7);
d1.setHours(3);

console.log(d1);

console.log(
  Math.PI,
  Math.random(),
  Math.trunc(4.66789),
  Math.round(4.66789),
  Math.ceil(4.56789),
  Math.floor(4.56789),
  Math.ceil(-4.66789),
  Math.floor(-4.66789),
  Math.round(-4.96789)
);
console.log(Math.sqrt(5), Math.sin(90 * (Math.PI / 180)));
console.log(new Date("2019-01-30T12:00:00+05:30"));

console.log(Math.floor(Math.random() * 2));

const randomNumerGenerate = Math.floor(Math.random() * 6);
//the above will generate from 0 to 5
const randomNumerGenerate1 = Math.floor(Math.random() * 6 + 1);
//the above will generate from 1 to 6
console.log(randomNumerGenerate);
console.log(randomNumerGenerate1);

const sortRevise = [10, 20, 56, 78, 98];

//Fischer method for sorting
for (let i = 0; i < sortRevise.length; i++) {
  let j = Math.floor(Math.random() * sortRevise.length);
  let k = sortRevise[i];
  sortRevise[i] = sortRevise[j];
  sortRevise[j] = k;
}
console.log(sortRevise);

//function for generating a random number which  include maximim and minimum value

const randInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randInteger(1, 5));

//function will generate random integer and wont include max one
const randInteger1 = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(randInteger1(1, 5));

//falsy values 1)null,undefined,emptystring,0,NaN

let xfal = new Boolean(false);
console.log(typeof xfal);

let xnull = 0 / "hi";
console.log(Boolean(xnull));

document.querySelector(".tryitbut").addEventListener("click", function () {
  let age = document.querySelector(".inpu").value;
  if (!age) return;
  let votable = age < 18 ? "Too Young" : "Old enough";
  document.querySelector(".medo").innerHTML = votable + " to vote";
});
let score = 10;
if (score < 0) {
  console.log(`Score is too low!!!`);
} else if (score > 10) {
  console.log(`Score is too high`);
} else {
  console.log(`Exact score`);
}

if (new Date().getHours() > 18) {
  console.log(`Good day`);
} else {
  console.log(`Good noon`);
}

//using ternary
const wishing = new Date().getHours() > 18 ? "Good day" : "Good noon";
console.log(wishing);

if (new Date().getDay() < 1 || new Date().getDay() > 5) {
  console.log(`Happy weekend`);
} else if (new Date().getDay() > 1 || new Date().getDay() < 5) {
  console.log(`Boring days, take some rest`);
} else if (new Date().getDay() === 1) {
  console.log(`Back to work`);
} else {
  console.log(`logging in, working repeattuuuu`);
}

switch (new Date().getDay()) {
  case 0:
  case 6:
    console.log(`Happy Weekend`);
    break;
  case 2:
  case 3:
  case 4:
    console.log(`Boring days, take some rest`);
    break;
  default:
    console.log(`Logging in , working repeatuuu`);
}

let age3 = 35;
switch (age3) {
  case 18:
    console.log(`You are voting for the first time!! Be Catiuos`);
    break;
  case 35:
    console.log(`Multiple times you have voted, no need to explain`);
    break;
  default:
    console.log(`Please vote and leave`);
}

const fruits123 = "Banana";

switch (fruits123) {
  case "banana":
    console.log(`Banana`);
    break;
  case "apple":
    console.log(`apple`);
    break;
  default:
    console.log(`No fruit`);
}

const carsShowroom = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (let i = 0; i < carsShowroom.length; i++) {
  console.log(carsShowroom[i].toUpperCase().slice(0, 2).split(""));
}

const objpety = {
  fname: "sudeesh",
  lname: "Grandhi",
  age: 27,
};

const ryu = Object.entries(objpety);
console.log(ryu);
const yuio = ryu.map(function (ryu) {
  console.log(ryu);
});

const objectCheck = {
  fname: "SU",
  lname: "KU",
  age: 27,
};

const objchear = ["kl", "rj", "lko"];

for (let x in objchear) {
  console.log(objchear[x]);
}
for (let i = 0; i < objchear.length; i++) {
  console.log(objchear[i]);
}
for (let y in objectCheck) {
  console.log(objectCheck[y]);
}

const obnmj = {
  firstname: "fname",
  lastName: "lname",
};
let xqwer;
for (xqwer in obnmj) {
  console.log(obnmj[xqwer]);
}
for (let x of objchear) {
  console.log(x);
}
let tex = "";
for (let x in objchear) {
  tex += objchear[x] + " ";
}
console.log(tex);

const sudstry = "Sudeesh is very good boy";
let vc = "";
for (let x of sudstry) {
  vc += x;
}
console.log(vc);

let xvbn = 15;

switch (xvbn) {
  case 10:
    console.log(`its Ten`);
    break;
  case 15:
    console.log(`Great Suceess`);
    break;
  default:
    console.log(`Common my boy`);
}
//while and for almost same only code differenec

for (let i = 0; i < 10; i++) {
  console.log(`The number is ${i}`);
}
let j = 0;
while (j < 10) {
  console.log(`The number is ${j}`);
  j++;
}

for (let i = 0; i <= 10; i += 5) {
  if (i === 10) continue;
  console.log(i);
}

const ayui = {
  hi: "hello",
  hello: "hi",
  lok: "kol",
};

const ayui9 = Object.entries(ayui);
console.log(ayui9);
const [...ayui97] = ayui9.flat();
console.log(ayui97);
console.log(Array.isArray(ayui9));

const arrSet = [0, 1, 2, 34, 5, 5, 6, 7, 7, 8, 8, 8, 8];
const newSet = new Set(arrSet);

console.log(newSet);
console.log(typeof newSet);

const mjik = ["W3schools", "likt", "loi", "lop"];
let jmki = "";
for (let i of mjik) {
  jmki = i + " ";
  if (i === "3") break;
}
console.log(jmki);

console.log(new Set(["a", "b", "c"]));
const ghj = new Set("a");
ghj.add(arrSet);
console.log(ghj);
ghj.delete(arrSet);
console.log(ghj);

const newSet1 = new Set([0, 0, 1, 3, 4, 5, 6, 6, 7]);
console.log(newSet1);
const newSet3 = Array.from(newSet1);

console.log(newSet3);
newSet3.push("hello");
console.log(newSet3);

const newMap = new Map([["hi", "hello"]]);
console.log(newMap);

const newObj = {
  hi: "hello",
  hello: "hi",
  helloo(a, b, c) {
    return [a, b, c];
  },
};
console.log(newObj.helloo(1, 2, 3));

const n1 = 1;
const n2 = "hi";
const n3 = true;
const n4 = "";
const n5 = null;
let n6;
const n7 = ["ki", "ko"];
const n8 = {
  ki: "ki",
  ku: "ku",
};
const funct = function () {
  return "hi";
};
console.log(typeof n8);
console.log(Array.isArray(n6));
console.log(typeof funct);

const bhj = new Date();
console.log(typeof bhj);

console.log(
  n1.constructor,
  n2.constructor,
  n3.constructor,
  n4.constructor,
  n7.constructor,
  n8.constructor,
  bhj.constructor
);

/*
1. Declare a variable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
6. Change==to===,andtestthecodeagain,withthesamevaluesof
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
when you input 1
8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
situation

    */

// const numNeighbours =Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbours===1){
//     console.log('Only 1 border!');
// }else if(numNeighbours>1){
//     console.log('More than 1 border');
// }else{
//     console.log('Noborders');
// }

/*
1.Commentoutthepreviouscodesothepromptdoesn'tgetintheway
2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
country that speaks english, has less than 50 million people and is not an
island.
3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
not, log 'Portugal does not meet your criteria :('
5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
change some variables in order to make the condition true (unless you live in Canada :D)
*/

// if(language==='english'&& population<50 && !isIsland){
//     console.log(`You should live in ${country}`);

// }else{
//     console.log(`${country} does not meet your criteria`);
// }

/*

Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

// switch(language){
//     case 'chinese':
//     case 'mandarin':
//         console.log(`MOST number of native speakers!`);
//     break;
//     case 'spanish':
//         console.log(`2nd place in number of native speakers`);
//     break;
//     case 'english':
//         console.log(`3rd place`);
//     break;
//     case 'Hindi':
//         console.log(`Number 4`);
//     break;
//     case 'arabic':
//         console.log(`5th most spoken language`);
//     break;
//     default:
//         console.log(`Great language too :D`);
// }
/*
1. Ifyourcountry'spopulationisgreaterthan33million,usetheternaryoperator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original
*/
// console.log(`Portugal's population is ${(population>33)?'above':'below'} average`);

/*
1. Writeafunctioncalled'describeCountry'whichtakesthreeparameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Callthisfunction3times,withinputdatafor3differentcountries.Storethe returned values in 3 different variables, and log them to the console
*/
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
console.log(describeCountry("India", 1378.6, "New Delhi"));

/*
1. Theworldpopulationis7900millionpeople.Createafunctiondeclaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. Tocalculatethepercentage,dividethegiven'population'valueby7900 and then multiply by 100
3. Call'percentageOfWorld1'for3populationsofcountriesofyourchoice, store the results into variables, and log them to the console
4. Createafunctionexpressionwhichdoestheexactsamething,called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return `your country's population is about ${(
    (population / worldPopulation) *
    100
  ).toFixed(2)}% of the world population`;
}
console.log(percentageOfWorld1(13.6));

const percentageOfWorld2 = function (population) {
  return `your country's population is about ${(
    (population / worldPopulation) *
    100
  ).toFixed(2)}% of the world population`;
};
console.log(percentageOfWorld2(13));

const percentageOfWorld3 = (population) =>
  `${((population / worldPopulation) * 100).toFixed(2)}% `;
console.log(percentageOfWorld3(1378.6));

/*
1. Createafunctioncalled'describePopulation'.Usethefunctiontypeyou like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. Tocalculatethepercentage,'describePopulation'callthe 'percentageOfWorld1' you created earlier
3. Call'describePopulation'withdatafor3countriesofyourchoice
*/

const describePopulation = (country, population) =>
  `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )} of the world.`;

console.log(describePopulation("Afganistan", 1.6));

/*
. Createanarraycontaining4populationvaluesof4countriesofyourchoice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Logtotheconsolewhetherthearrayhas4elementsornot(trueorfalse)
3. Createanarraycalled'percentages'containingthepercentagesofthe
world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
*/

const populations = [130, 1378.6, 9, 89];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld3(populations[0]),
  percentageOfWorld3(populations[1]),
  percentageOfWorld3(populations[2]),
  percentageOfWorld3(populations[3]),
];
console.log(percentages);

/*
1. Createanarraycontainingalltheneighbouringcountriesofacountryofyour choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. Atsomepoint,anewcountrycalled'Utopia'iscreatedintheneighbourhoodof your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately,aftersometime,thenewcountryisdissolved.Soremoveitfrom the end of the array
4. Ifthe'neighbours'arraydoesnotincludethecountry‘Germany’,logtothe console: 'Probably not a central European country :D'
5. Changethenameofoneofyourneighbouringcountries.Todothat,findthe index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighbours = ["Pakistan", "Afganistan", "Nepal"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop("Utopia");
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country :D`);
}
console.log(neighbours.indexOf("Afganistan"));
neighbours[1] = "Republic of Afganisthan";
console.log(neighbours);

/*
Createanobjectcalled'myCountry'foracountryofyourchoice,containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

*/
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1378.6,
  neighbours: ["Pakistan", "Afganistan", "Nepal"],
};
/*
1. Usingtheobjectfromthepreviousassignment,logastringlikethistothe console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increasethecountry'spopulationbytwomillionusingdotnotation,andthen decrease it by two million using brackets notation.

*/
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

for (let i in myCountry) {
  console.log(myCountry[i]);
}
myCountry["population"] += 2;
console.log(myCountry["population"]);

/*
1. Addamethodcalled'describe'tothe'myCountry'object.Thismethod will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Callthe'describe'method
3. Addamethodcalled'checkIsland'tothe'myCountry'object.This
method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

*/

const myCountry1 = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1378.6,
  neighbours: ["Pakistan", "Afganistan", "Nepal"],
  describe() {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
myCountry1.checkIsland();
console.log(myCountry1.isIsland);
console.log(myCountry1);

const myCountry2 = {
  country: "Pakistan",
  capital: "Islamabad",
  language: "Urdu",
  population: 100,
  neighbours: ["India", "Afganistan", "Nepal"],
};

/*
 Thereareelectionsinyourcountry!Inasmalltown,thereareonly50voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let i = 1; i < 51; i++) {
  console.log(`Voter number ${i} is currently voting `);
}
/*

1. Let'sbringbackthe'populations'arrayfromapreviousassignment
2. Useaforlooptocomputeanarraycalled'percentages2'containingthe
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirmthat'percentages2'containsexactlythesamevaluesasthe
'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is
*/

//const populations =[130,1378.6,9,89]

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(((populations[i] / 7900) * 100).toFixed(2));
}

console.log(percentages2);

/*
1. Storethisarrayofarraysintoavariablecalled'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Logonlytheneighbouringcountriestotheconsole,onebyone,nottheentire arrays. Log a string like 'Neighbour: Canada' for each country
3. Youwillneedaloopinsidealoopforthis.Thisisactuallyabittricky,sodon't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
*/

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

const listOfNeighbours1 = listOfNeighbours.flat(1).map(function (val) {
  console.log(`neighbour:${val}`);
});

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbour:${listOfNeighbours[i][j]}`);
  }

/*
1. Recreatethechallengefromthelecture'LoopingArrays,BreakingandContinuing', but this time using a while loop (call the array 'percentages3')
2. Reflectonwhatsolutionyoulikebetterforthistask:theforlooporthewhile loop?
*/

const percentages3 = [];
let ik = 0;
while (ik < populations.length) {
  percentages3.push(((populations[ik] / 7900) * 100).toFixed(2));
  ik++;
}
console.log(percentages3);

const stringNum = Number("hello");
console.log(typeof stringNum);
const numString = 1;
console.log(typeof +numString);
const dateNum = new Date();
console.log(Date.parse(dateNum));
const numDate = Boolean(1);
console.log(typeof numDate);
const xi = Number(true);
console.log(typeof xi);

let cvb = "gh";
console.log(Number(cvb));

console.log(parseInt(32.45555));

console.log(5 + 6 + "4" + 9 - 4 - 2);

console.log(0 || 1);
//falsy values are 0,empty string,NaN,undefined,null
//And operator will search for falsy values
//Or operator will search for true values

console.log("hii" || "jii" || NaN || 0);

const seartext =
  "Hi hello How do you do and hope everything is fine and all are doing wELL";

console.log(seartext.replace(/hi/gi, "HELLO"));
console.log(seartext.search(/hi/i));
console.log(seartext);

const artsea = "ji,kilo,ton";
console.log(artsea.indexOf("kilo"));

console.log(seartext.match(/h/g));

document.querySelector(".tryButton").addEventListener("click", function () {
  let vbn = Number(document.querySelector(".tryInput").value);
  let message = document.querySelector(".tryp");
  try {
    if (vbn === "") throw "Please input value between 5 and 10";
    if (vbn < 5) throw "Too low";
    if (isNaN(vbn)) throw "Input number";
    if (vbn > 10) throw "Too high";
    if (vbn > 5 && vbn < 10) throw "Exact MAtch";
  } catch (err) {
    message.innerHTML = err;
  } finally {
    document.querySelector(".tryInput").value = "";
  }
});

const tryButton = document.querySelector(".tryButton");
tryButton.style.backgroundColor = "red";
tryButton.style.color = "white";

try {
  let num = "sgy";
  num.toupperCase();
} catch (err) {
  console.error(err.name);
}

console.log(fbn());
function fbn(ab, b) {
  return 2;
}

const arr20 = [4, 5];
console.log(arr20[0] * arr20[1]);

const multiply = (a, b) => console.log(a * b);

multiply(4, 5);

const helllo = function () {
  document.querySelector(".emc").innerHTML += this;
};

document.querySelector(".cme").addEventListener("click", helllo);
window.addEventListener("load", helllo);

//where in arrow function

const arrFun = () => {
  console.log(this);
};
arrFun();

const someword = "worf ig h jk shfsn fjfkej \
fhgehfjf bgjegng";

console.log(someword.replace(/f/i, "fun3"));

const Carsclass = class {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  calcAge(x) {
    let date = new Date();
    return date.getFullYear() - x;
  }
};

const AudiCar = new Carsclass("Audi", 1994);
console.log(AudiCar.property);
const BmwCar = new Carsclass("BMW", 1996);
console.log(`My Car is ${BmwCar.calcAge(BmwCar.year)} years old`);

let sudi1 = "good boy";
function sudi() {
  let x = 10;
  let y = 20;
  let z = x + y;

  return z;
}
console.log(sudi());

const goodArray = ["arr1", "arr2", "arr3"];

const add = function () {
  let i = 0;
  i += 1;
  return i;
};

console.log(add());
console.log(add());

const add12 = (function (a = 1, b = 1) {
  let i = 0;
  return function () {
    i += 1;
    return i;
  };
})();
console.log(add12());
console.log(add12());
console.log(add12());

console.log("gi" + "ig");

console.log(typeof parseInt("10.2"));

const obj123 = {
  hi: "helo",
};
console.log(obj123["hi"]);

const obj1234 = obj123;

obj1234.hi = "hellllo";
console.log(obj123.hi);

const arr1234 = ["hi", "hello"];
const arr123 = arr1234;
arr123[0] = "hell";
console.log(arr1234);

for (let x in obj123) {
  console.log(obj123[x]);
}

console.log(obj123);

const strObj1 = "hi heelo";
console.log(new Boolean(true));
console.log(new Date());
console.log("bi" / 12);

const rt = new Object({
  hi: "hello",
  hello: "hi",
});
console.log(rt);

const person123 = {
  firstName: "Sudeesh",
  lastName: "Grandhi",
  age: 27,
  city: "Atmakur",
  eyeColor: "black",
  cars: [
    {
      name: "Ford",
      model: ["Fiesta", "Focus", "Mustang"],
    },
    {
      name: "Fiat",
      model: [500, "Panda"],
    },
    {
      name: "BMW",
      model: [320, "X3", "X5"],
    },
  ],

  capsName() {
    return `My name in Caps[${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}]`;
  },
};
console.log(person123["eyeColor"]);

console.log(person123);

for (let x in person123.cars) {
  console.log(person123.cars[x].name);
  for (let y in person123.cars[x].model) {
    console.log(person123.cars[x].model[y]);
  }
}

console.log(person123.capsName());

const person123123 = {
  firstName: "Sudeesh",
  lastName: "Grandhi",
  age: 27,
  city: "Atmakur",
};

let txt = "";
for (let x in person123123) {
  txt += person123123[x] + " ";
}
console.log(txt);

const personArray = Object.values(person123123);
const personString = JSON.stringify(person123123);

document.querySelector(".emc").innerHTML = personArray;

const arrstring = ["ag", "hello"];
const datest = new Date();

console.log(JSON.stringify(arrstring));
console.log(JSON.stringify(datest));

const dateStr = new Date("2020-09-20T09:09:09+05:30");
console.log(JSON.stringify(dateStr));

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

const arr = [17, 21, 23];
const arr1 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let arrstr = "";
  arr.forEach(function (val, i) {
    arrstr += `...${val}\u00B0 in ${i + 1} days`;
  });
  console.log(arrstr + "...");
};
printForecast(arr);

const temperatures = [3, -2, -6, -10, "error", 9, 13, 17, 15, 14, 9, 35];
//([3, 5, 1], [9, 0, 5]);
const temparatureAmplitude = function (arr) {
  const arr1 = arr
    .filter(function (val) {
      if (typeof val === "number") return val;
    })
    .sort(function (a, b) {
      return a - b;
    });
  console.log(arr1[arr1.length - 1] - arr1[0]);
};

temparatureAmplitude(temperatures);

const temparatureAmplitude1 = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  const arr4 = arr3
    .filter(function (val) {
      if (typeof val === "number") return val;
    })
    .sort(function (a, b) {
      return a - b;
    });
  console.log(arr4[arr4.length - 1] - arr4[0]);
};

temparatureAmplitude1([2, 3, 4, 90], [-1, -2, -4]);

const person23 = {
  firstName: "Sudeesh",
  lastName: "Grandhi",
  age: "",
  city: "Atmakur",
  language: "",
  get fName() {
    return this.firstName;
  },
  //the above method can be called person23.fName unlike normal method person23.fname()
  //normal method
  lName() {
    return this.firstName;
  },
  set ownAge(num) {
    return (this.age = num);
  },
  set lang(lang) {
    return (this.language = lang);
  },
};
console.log(person23.fName);
console.log(person23.lName());
person23.ownAge = 27;
person23.lang = "Hindi";

console.log(person23);

//Object constructor to stay all objects together
const Person = class {
  constructor(first, last, eye, bYear, nation) {
    //arguments are values which we are going to assign
    this.firstName = first;
    this.lastName = last;
    this.eye = eye;
    this.birthyear = bYear;
    this.nationality = nation;
  }
  calcAge() {
    return 2021 - this.birthyear;
  }
};
const PersonSudeesh = new Person("Sudeesh", "Grandhi", "black", 1995, "Indian");
const PersonKami = new Person("Kami", "Grandhi", "black", 1998, "Indian");

console.log(
  PersonSudeesh.calcAge(),
  PersonKami.calcAge(),
  PersonKami.nationality,
  PersonSudeesh.nationality
);

PersonKami.calcAge = function () {
  return 2037 - this.birthyear;
};
PersonKami.firstName = "Kamakshi";
console.log(PersonKami.calcAge());
console.log(PersonKami);
Person.prototype.array = ["hi", "hello"];
PersonKami.array = ["HHHHi", "HHHeloo"];
console.log(PersonSudeesh.array);
const checkRegExp = "Hi HELlo how how huj kinh hji";

console.log(checkRegExp.replace(/hello/gi, "hello"));

const objArr = {
  hi: "Hello",
  hue: "How",
};

const objArr1 = Object.values(objArr);
const objArr2 = Object.keys(objArr);
const objArr3 = Object.entries(objArr);
console.log(objArr3.flat(1));
console.log(Array.isArray(objArr1));

for (let i of objArr1) {
  console.log(i);
}
for (let i of objArr2) {
  console.log(i);
}
for (let i of objArr3.flat(1)) {
  console.log(i);
}

const add10 = (function () {
  let i = 0;
  return function () {
    i += 10;
    return i;
  };
})();

console.log(add10());
const xcfg = 12;

const newSet12 = new Set([1, 2, 3, 1, 2, 3]);
console.log(newSet12);
newSet12.add("hello");
newSet12.add(xcfg);
console.log(newSet12);

newSet12.forEach(function (val) {
  console.log(val * 2);
});
console.log(newSet12);
console.log(newSet12.keys());

const fruits1456 = new Map([
  [Math.PI, 500],
  ["banana", 300],
  ["oranges", 200],
]);
fruits1456.set("hello", "hi");
console.log(fruits1456);
console.log(fruits1456.get("hello"));

const person1 = {
  hi: "hello",
  hello: "hi",
};
const person245 = Object.create(person1);

person245.number = 23;
console.log(person1);
console.log(person245);

const p233 = ["hi", "hello", "how"];
const p233Copy = Object.assign([], p233);
console.log(p233Copy);
p233Copy.push("hjkl");
console.log(p233Copy);
const person2456 = JSON.parse(JSON.stringify(person1));
const person24567 = Object.assign({}, person1);
console.log(person24567);
console.log(person2456);

person24567.ji = "jay";
console.log(person24567);
console.log(person1);

//How to duplicate objects and arrays without disturbing original one

const objOri = {
  bn: "bn",
  nm: "nm",
  kl: "kl",
};
const objOri1 = objOri;

console.log(objOri1);
objOri1.mkl = "mkl";
console.log(objOri1, objOri);

//when we try to copy it will disturb original array from where we copied to avoid it

const objOriginal = {
  hi: "hello",
  hello: "hi",
  how: "are",
  you: "you",
};

const objCopy = Object.assign(objOriginal);
console.log(objCopy);

const arrOriginal = ["hi"];
const arrCopy = Object.assign(arrOriginal);
console.log(arrCopy);

const SudeeshClass = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};
const KamiClass = new SudeeshClass("kami", 23);

console.log(KamiClass);

//Object.create() creates object with an existing object as prototype

const personCheck = {
  fname: "Sudeesh",
  lname: "Grandhi",
  age: "",
  get firstName() {
    return this.fname;
  },
  set CurrentAge(age1) {
    this.age = age1;
  },
};

// Object.preventExtensions(personCheck);
// Object.seal(personCheck);
// Object.freeze(personCheck);

console.log(personCheck.firstName);
personCheck.CurrentAge = 27;
console.log(personCheck);

//function declaration

function fnDeclare() {
  return "Hi, Hello How are you";
}
console.log(fnDeclare());

//Function Expression
const fnExpression = function () {
  return "Hi, Hello How are you";
};
console.log(fnExpression());

(function fnHoist() {
  console.log("Hiii");
})();

const fnInvokeExp = (function () {
  console.log(`Logged immediately without being called`);
})();

const fnValue = function (a, b) {
  console.log(a * b);
};
fnValue(2, 3);
fnValue(3, 4);

console.log(typeof fnValue);

//Arrow function

const fnArrow = () => console.log(`Hi, Hello How are you`);
fnArrow();

const fnMax = function () {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
};

console.log(fnMax(-1, -2));

//1,2,3,4,55
//let max = 0; if 1>0 then 0=1

const fnSum = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(fnSum(2, 3, 4, 5, 6, 7, 8, 9));

const fnLeast = function () {
  let min = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
};
console.log(fnLeast(2, 3, -89));

const myFunction = function (a = 1, b = 1) {
  console.log(this);
  return a * b;
};

const myObject = {
  firstName: "Sudeesh",
  lastName: "Grandhi",
  fullName() {
    return this;
  },
};

const myObject1 = {
  firstName: "SU",
  lastName: "Gran",
  fullName(arg1, arg2) {
    `${this.lastName} ${this.firstName} ${arg1} ${arg2}`;
  },
};

const myObject2 = {
  firstName: "S",
  lastName: "G",
};
console.log(myObject1.fullName.call(myObject, "Epdi", "Irke"));

console.log(myObject1.fullName.apply(myObject, ["Epdi", "Irke"]));

const arMath = [1, 2, 4, 5, 6, 78, 8, 900];
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min.apply(null, [1, 2, 4, 5, 6, 78, 8, 900, -890]));

const fullNameMeth = myObject1.fullName.bind(myObject2);

console.log(fullNameMeth("Epdi", "Irke"));
console.log(myObject2);

//when method used as a call-back

let fullNameMyObj1 = myObject1.fullName.bind(myObject2, "Epdi", "Irke");

setTimeout(fullNameMyObj1, 1000);

//call,bind,apply methods

const sudObj = {
  bYear: 1995,
  calcAge() {
    return 2021 - this.bYear;
  },
};
const KamObj = {
  bYear: 1998,
  calcAge() {
    console.log(2021 - this.bYear);
  },
};

console.log(sudObj.calcAge.call(KamObj));
KamObj.calcAge.apply(sudObj);

const KamCalAge = KamObj.calcAge.bind(KamObj);

const addself = (function () {
  let i = 0;
  return function () {
    i += 1;
    return i;
  };
})();
console.log(addself());
console.log(addself());

const CarClass = class {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(arg) {
    let date = new Date();
    return (date.getFullYear() - this.year) * arg;
  }
};

const BMWCar = new CarClass("BMW", 1954);
console.log(BMWCar.age(2));

const FordCar = new CarClass("Ford", 1885);
console.log(FordCar.age(4));

//ES6 classes
const CarClass1 = function (name, year) {
  this.name = name;
  this.year = year;
  this.age = function (arg) {
    let date = new Date();
    return (date.getFullYear() - this.year) * arg;
  };
};

const BMWCar1 = new CarClass1("BMW", 1954);
console.log(BMWCar1.age(2));

//constructor functions

const CarsClass = class {
  constructor(name, age, year) {
    this.fname = name;
    this.CurrentAge = age;
    this.PresentYear = year;
  }
  calcAge() {
    let date = new Date();

    return date.getFullYear() - this.PresentYear;
  }
};

const AltoCar = new CarsClass("Alto", 44, 1978);
console.log(AltoCar.calcAge());

//Class Inheritance

const Model = class extends CarsClass {
  constructor(name, age, year, model) {
    super(name, age, year);
    this.model = model;
  }
  show() {
    return this.calcAge();
  }
};
const MyCarModel = new Model("Benz", 89, 1970, "Top-End");
console.log(MyCarModel.calcAge());
console.log(MyCarModel.show());
console.log(MyCarModel.fname);

const ClassRepeat = class {
  constructor(weekday, weekend) {
    this.monday = weekday;
    this.saturday = weekend;
  }
  enjoyDependent() {
    console.log(`${this.monday} ${this.saturday}`);
  }
};

const ClassRepeat1 = class extends ClassRepeat {
  constructor(weekday, weekend, nearWeekend, nearWeekday) {
    super(weekday, weekend);
    this.friday = nearWeekend;
    this.sunday = nearWeekday;
    this.someday = "";
  }

  tooenjoyDependent(cg) {
    return `${this.monday} ${this.saturday} ${this.friday} ${this.sunday} ${cg}`;
  }

  get weekend() {
    return this.saturday;
  }

  set someDay(day) {
    this.someday = day;
  }
};

const ClassRepeatChild = new ClassRepeat1(
  "weekday",
  "weekend",
  "near Weekend",
  "near Weekday"
);

ClassRepeatChild.someDay = "anyday";
console.log(ClassRepeatChild.friday);
console.log(ClassRepeatChild.tooenjoyDependent("hj"));
console.log(ClassRepeatChild.weekend);
console.log(ClassRepeatChild.someday);

fnDeclasre();
function fnDeclasre() {
  console.log(`Just for fun`);
}

const Brandshowroom = class {
  constructor(br1, br2, br3, br4) {
    this.brand1 = br1;
    this.brand2 = br2;
    this.brand3 = br3;
    this.brand4 = br4;
  }
  get brandMost() {
    return this.brand1;
  }
};

class ExtendShowroom extends Brandshowroom {
  constructor(br1, br2, br3, br4, br5, br6) {
    super(br1, br2, br3, br4);
    this.brand5 = br5;
    this.brand6 = br6;
  }

  get brandWorst() {
    return `${this.brand3} ${this.brand5} ${this.brand4}`;
  }
}

const SUdeeshShowroom = new ExtendShowroom(
  "LP",
  "Wrangler",
  "Hussian",
  "Vanhuesen",
  "R.S.Bro",
  "Chandana"
);

console.log(SUdeeshShowroom.brand4);

function myDisplayer(some) {
  console.log(some);
}

function myFirst() {
  return myDisplayer("Hello");
}
function mySecond() {
  return myDisplayer("Goodbye");
}

myFirst();
mySecond();

const myCalculator = function (num1, num2) {
  let sum;
  sum = num1 + num2;
  return sum;
};

let result = myCalculator(5, 5);
console.log(result);

const myDisplayer1 = function (some) {
  console.log(some);
};
const myCalculator1 = function (num1, num2) {
  let sum;
  sum = num1 + num2;
  return myDisplayer1(sum);
};
myCalculator1(2, 5);

const personDisplay = {
  fName: "Sudeesh",
  lName: "Grandhi",
  display() {
    console.log(`${this.fName} ${this.lName}`);
  },
};
//setTimeout(personDisplay.display.bind(personDisplay), 800);

const myDisplayer2 = function (some) {
  console.log(some);
};

const myCalculator2 = function (num1, num2, mycallBack) {
  let sum;
  sum = num1 + num2;
  mycallBack(sum);
};

myCalculator2(2, 678, myDisplayer2);

const myFunction1 = function () {
  console.log(`I Love you`);
};

setTimeout(function () {
  //console.log(`I Love you`);
}, 2000);
//In the above you are not calling the function setTimeout will call it after 2s i.e 2000 millisec

setInterval(function () {
  let date = new Date();
  document.querySelector(
    ".emc23"
  ).innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw is happening 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN 💰");
//     } else {
//       reject(new Error("You lost your money 💩"));
//     }
//   }, 2000);
// });
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// let myPromise = new Promise(function (resolve, reject) {
//   let x = 0;
//   if (x === 0) {
//     resolve("OK");
//   } else {
//     reject(new Error("Error"));
//   }
// });

setTimeout(function () {
  return new Promise(function (resolve, reject) {});
}, 2000);

//AJAX stands for Asynchronous Javascript and XML
//Old way of requesting data from online/web/3rd party API

const request = new XMLHttpRequest();
//opening
request.open("GET", "https://restcountries.com/v3.1/name/india");
//sending to fetch the data
//we cannot store the data diectly because the data is yet to arrive it happens asynchronously
// request.send();

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  //JSON.parse to convert JSON to object
  console.log(data);
  const [data1] = data.borders;
  if (!data1) return;
  console.log(data1);
});

// setTimeout(function () {
//   console.log("1 second passed");
//   setTimeout(function () {
//     console.log("2 second passed");
//     setTimeout(function () {
//       console.log("3 second passed");
//       setTimeout(function () {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// const req = new XMLHttpRequest();
// req.open("GET", "https://restcountries.com/v3.1/name/peru");
// req.send();

// req.addEventListener("load", function () {
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);

//   const neighbour = data.borders[0];
//   if (!neighbour) return;

//   const request1 = new XMLHttpRequest();
//   request1.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//   request1.send();
//   request1.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//   });
// });

//Modern way of getting the data
//Fetch function will return a promise
//We need to consume promise using .then method this will gives a response
//response .json() will again returns a promise
//that can be consumed using .then where data we can fetch
const getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (res) {
      console.log(res);
      if (res.ok === false)
        throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(function (data) {
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(function (res) {
      if (res.ok === false)
        throw new Error(`Neighbour not found (${res.status})`);
      return res.json();
    })
    .then(function (data) {
      console.log(data[0]);
    })
    .catch(function (err) {
      console.error(err);
    });
};

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(function (res) {
      if (!res.ok)
        throw new Error(
          `No specified place found for mentioned latitude and longitude ${res.status}`
        );
      return res.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function (res) {
      if (!res.ok) throw new Error(`No country found ${res.status}`);
      return res.json();
    })
    .then(function (data) {
      console.log(data[0]);
    })
    .catch(function (err) {
      console.error(`${err.message}`);
    });
};

//Building a promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery is happening`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You won the lottery`);
    } else {
      reject(new Error(`You lost your money`));
    }
  }, 2000);
});
//LotteryPromise will return a promise
lotteryPromise
  .then(function (res) {
    //console.log(res);
  })
  .catch(function (err) {
    //console.error(err);
  });

//call back hell example

// setTimeout(function () {
//   console.log(`I waited for 1 sec`);
//   setTimeout(function () {
//     console.log(`I waited for 2 sec`);
//     setTimeout(function () {
//       console.log(`I waited for 3 sec`);
//     }, 1000);
//     setTimeout(function () {
//       console.log(`I waited for 4 sec`);
//     }, 1000);
//   }, 1000);
// }, 1000);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
//escaping call back hell
wait(1)
  .then(function () {
    //console.log(`I waited for 1 sec `);
    return wait(1);
  })
  .then(function () {
    //console.log(`I waited for 2 sec `);
    return wait(1);
  })
  .then(function () {
    //console.log(`I waited for 3 sec `);
    return wait(1);
  })
  .then(function () {
    //console.log(`I waited for 4 sec `);
    return wait(1);
  });

//promisified geo-location
const getCurrentPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   function (position) {
    //     resolve(position);
    //   },
    //   function (err) {
    //     reject(new Error(err));
    //   }
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI1 = function () {
  getCurrentPosition()
    .then(function (res) {
      const lat = res.coords.latitude;
      const lng = res.coords.longitude;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then(function (res) {
      if (!res.ok)
        throw new Error(
          `No specified place found for mentioned latitude and longitude ${res.status}`
        );
      return res.json();
    })
    .then(function (data) {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(function (res) {
      if (!res.ok) throw new Error(`No country found ${res.status}`);
      return res.json();
    })
    .then(function (data) {
      console.log(data[0]);
    })
    .catch(function (err) {
      console.error(`${err.message}`);
    });
};
//whereAmI1();

// navigator.geolocation.getCurrentPosition(
//   function (position) {
//     console.log(position);
//   },
//   function (err) {
//     console.error(err);
//   }
// );

//promisyfying the above

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image
 (use document.createElement('img')) and sets 
 the .src attribute to the provided image path. 
 When the image is done loading, append it to the DOM element with the 'images' class, 
 and resolve the promise. The fulfilled value should be the image element itself. 
 In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. 
Test the error handler by passing a wrong image path. 
Set the network speed to 'Fast 3G' in the dev tools Network tab, 
otherwise images load too fast.

GOOD LUCK 😀
*/

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;
//     img.addEventListener("load", function () {
//       document.querySelector(".images").append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("Error in loading the image"));
//     });
//   });
// };
// let currentImg;

// createImage("img/img-1")
//   .then(function (img) {
//     console.log(`Image loaded`);
//     return wait(2);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

const whereAmI2 = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (res) {
    console.log(res);
  });
};
// whereAmI2("portugal");

// const getCurrentPosition = function () {
//     return new Promise(function (resolve, reject) {
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
//   };

const whereAmI3 = async function (country) {
  try {
    const pos = await getCurrentPosition();
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
    //here await will consume the function instead of .then()
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    console.log(data[0]);
    const neighbour = data[0].borders[0];
    const res1 = await fetch(
      `https://restcountries.com/v3.1/alpha/${neighbour}`
    );
    const data1 = await res1.json();
    console.log(data1[0]);
    return `you are in ${dataGeo.city}`;
  } catch (err) {
    console.log(err.message);
  }
};

// whereAmI3()
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.error(err.message);
//   })
//   .finally(function () {
//     console.log("Hiii");
//   });

//The above in async await

// (async function () {
//   try {
//     const data = await whereAmI3();
//     console.log(data);
//   } catch (err) {
//     console.error(`2:${err.message}`);
//   }
//   console.log(`3:Finished Loading`);
// })();

const getJSON = function (url, errorMSG = "Something went wrong") {
  return fetch(url).then(function (res) {
    if (!res.ok) throw new Error(`${errorMSG} (${response.status})`);
    return res.json();
  });
};
const getCapitals = async function (c1, c2, c3) {
  try {
    // const data1 = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const data2 = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const data3 = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([
    //   data1[0].capital[0],
    //   data2[0].capital[0],
    //   data3[0].capital[0],
    // ]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);
    const data1 = data.map(function (val) {
      return `${val[0].capital[0]}`;
    });
    console.log(data1);
  } catch (err) {
    console.error(err);
  }
};

//getCapitals("portugal", "india", "canada");

const getCapitals1 = async function (c1, c2, c3) {
  try {
    //getting JSON from URL
    const getJSON = function (url, errorMSG = "No specified URL") {
      return fetch(url).then(function (res) {
        if (!res.ok) throw new Error(`${errorMSG} ${res.status}`);
        return res.json();
      });
    };
    //Promise.all always return promise and will take array of arguments
    // and will return array of results
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data);

    const data1 = data.map(function (val) {
      return val[0].capital[0];
    });
    console.log(data1);
  } catch (err) {
    console.error(err);
  }
};

// getCapitals1("india", "pakistan", "bangladesh");

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long`));
    }, sec * 1000);
  });
};

// Promise.race([fetch(`https://restcountries.com/v3.1/name/india`), timeout(5)])
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, 
this time using async/await (only the part where the promise is consumed). 
Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/name/india");
//request1.send();

request1.addEventListener("load", function () {
  //console.log(JSON.parse(this.responseText));
});

//using newly then methods

// fetch(`https://restcountries.com/v3.1/name/india`)
//   .then(function (res) {
//     //return res.json();
//   })
//   .then(function (data) {
//     // console.log(data);
//   });

const consumeasync = async function () {
  const res = await fetch(`https://restcountries.com/v3.1/name/india`);
  const data = await res.json();
  console.log(data);
};
//consumeasync();

//creating a promise

const promise = new Promise(function (resolve, reject) {
  let x = 0.5;
  if (x <= Math.random()) {
    resolve(`You are lucky`);
  } else {
    reject("You lost your money");
  }
})
  .then(function (res) {
    //console.log(res);
  })
  .catch(function (err) {
    //console.error(err);
  });

setTimeout(function () {
  //console.log("I love you");
}, 3000);

//promisyfying setTimeout

const waitpr = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("I love you");
    }, sec * 1000);
  });
};
waitpr(3).then(function (res) {
  //console.log(res);
});

document.getElementById("demo1").innerHTML = "Hello World";

const element = document.getElementsByTagName("p");
element[0].innerHTML = "Hii";

document.querySelector(".imgPic").alt = "Sample";

document.querySelector("#demo1").style.backgroundColor = "rgb(0,0,0)";
document.querySelector("#demo1").style.color = "white";
document.querySelector("#demo1").style.width = "200px";
document.querySelector("#demo1").style.textAlign = "center";

const get1 = document.querySelector(".imgPic").getAttribute("src");
console.log(get1);

console.log(document.querySelector(".appen").getElementsByTagName("p")[0]);
console.log(document.querySelector(".p1"));
console.log(document.querySelectorAll("p.p1"));

document.querySelector(".p1").innerHTML = "PARA 1";

document.querySelector(".chal").addEventListener("click", function () {
  let x = document.querySelector(".challenge").value;
  let text = document.querySelector(".chal2");

  if (x > 10 || x < 1 || isNaN(x)) {
    text.innerHTML = "Input is not valid, enter value between 1 to 10";
  } else {
    text.innerHTML = "Valid Input";
  }
});

console.log(document.doctype);

const arr123445 = [1, 2, 3, 4, 5, 6, 6, 7];

const arr12341 = [...arr123445];
console.log(arr12341);

const ghj1234 = function (ar1, ...arr12345) {
  console.log(ar1, arr12345);
};

ghj1234(2, arr123445);

console.log(null, undefined);

const profile = {
  firstName: "",
  lastName: "",
  setname(name) {
    let splitName = function (n) {
      let nameArray = n.split(" ");
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};
function hellp(hjk) {
  const hello = function (hjk) {
    console.log(hjk);
  };
  hello("hello");
}
hellp("hello");

const time = function () {
  for (var i = 1; i <= 5; i++) {
    const call = function (x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    };
    call(i);
  }
};

//time();

//closures
const outest = function () {
  const outer = function (a) {
    let i = 0;
    const inner = function () {
      console.log(i, a);
    };
    return inner;
  };
  return outer;
};

outest()("ji")();

//Data encapsulation

let count = 0;

function counterInc() {
  count++;
  return count;
}
// console.log(counterInc());
// console.log(counterInc());
// console.log(counterInc());

const countIncre = function () {
  let count = 0;
  return function county() {
    count++;
    return count;
  };
};

const incre1 = countIncre();
// console.log(incre1());
// console.log(incre1());
// console.log(incre1());
function func() {
  return arguments.callee;
}

//Call back function

const callBack = function (a, b) {
  return a * b;
};

const funCt = function (callb) {
  console.log(callb());
};

funCt(callBack);

const arrspr = [1, 2, 3, 4, 5, 5, 6, 7, 7];
const arrspr1 = [...arrspr];
console.log(arrspr1);
arrspr1.push(2);
console.log(arrspr);
console.log(arrspr1);

const restSpr = function (a, ...arr) {
  const map = arr.map(function (i) {
    return a * i;
  });
  console.log(map);
};

restSpr(8, 9, 3, 4, 5, 5, 6, 6, 7);

const val = arrspr.reduce(function (sum, el) {
  sum += el;
  return sum;
}, 0);
console.log(val);

const sum = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

const arrMtds = [1, 2, 3, 4, 5, 6, 6, 7, "str"];
console.log(
  arrMtds.findIndex(function (val) {
    return val > 1;
  })
);
console.log(
  arrMtds.every(function (val) {
    return val > 1;
  })
);

const arrMtds1 = arrMtds.join(",");
console.log(arrMtds1.split(","));

const arrSpread = [1, 2, 3, 4, 4, 5, 6, 6, 7];

const funct12 = function (arr) {
  const ar = arr.map(function (val) {
    return val * 2;
  });
  console.log(ar);
};
funct12(arrSpread);

//2 ways of scrolling
//old way

const lb = document.querySelector(".lb");
const max = document.querySelector(".max");
const smooth = function (e) {
  e.preventDefault();
  max.scrollIntoView({
    behavior: "smooth",
  });
  lb.removeEventListener("click", smooth);
};
lb.addEventListener("click", smooth);

const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColour = function () {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};
console.log(randomColour());

//DOM TRAVERSING

console.log(window.pageYOffset, window.scrollY);

//Intersection Observer API(instead of window.addEvenetListener(scroll,function))

const Constructor = class {
  constructor(hello, hii) {
    this.wish = hello;
    this.shing = hii;
  }
};

const Constructor1 = new Constructor("epdi", "iruku");

class Constructor2 extends Constructor {
  constructor(hello, hii) {
    super(hello, hii);
  }
}

const Constructor3 = new Constructor2("epdi", "iruku");
console.log(Constructor3.shing);
let c = 3;

const impureFunc = function (a, b) {
  c = a + b;
  return a * b;
};

console.log(impureFunc(2, 3));
console.log(c);
