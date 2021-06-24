// let country = 'Pak,';
// let continent = 'Asia,';
// let population = '22 Million';

// let isIsland = country;
// let language;

// console.log(typeof isIsland, typeof population, typeof country, typeof language);

// let marksheight = 1.88;
// let marksweight = 95;

// let johnheight = 1.76;
// let johnweight = 92;

// let markBMI = marksweight / marksheight ** 2;
// let johnnBMI = johnweight / johnheight ** 2;

// if (markBMI < johnnBMI) {
//     console.log(`Mark's BMI is ${markBMI} lower than John's ${johnnBMI}! `);
// } else {
//     console.log('opps');
// }

const teamDolphin = (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 106) / 3;

console.log(teamDolphin);
console.log(teamKoalas);

if (teamDolphin >= 100 && teamDolphin > teamKoalas) {
  console.log("Team Dolphin Wins");
} else if (teamDolphin <= 100 && teamDolphin > teamKoalas) {
  console.log("Team Dolphin wins but their average score less then 100");
}

if (teamKoalas >= 100 && teamKoalas > teamDolphin) {
  console.log("Team Koalas Wins");
} else if (teamKoalas <= 100 && teamKoalas > teamDolphin) {
  console.log("Team Koalas wins but their average score less then 100");
}

if ((teamDolphin, teamKoalas >= 100 && teamDolphin === teamKoalas)) {
  console.log("Draw");
}

const bill = 430;
const tip1 = 15;
const tip2 = 20;

const tip =
  bill >= 50 && bill <= 300
    ? `The bill was ${bill}, the tip was ${res = bill / tip1}, and the total value ${
        bill + res
      }`
    : `The bill was ${bill}, the tip was ${res = bill / tip2}, and the total value ${
        bill + res
      }`;

console.log(tip);
