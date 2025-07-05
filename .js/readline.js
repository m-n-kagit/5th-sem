const read =require("readline-sync");
const uname=read.question("Your name:");
console.log(`Welcome ${uname} in the portal.`);
const yr = read.question("Enter the year of birth");
const age = 2025- yr;
const afterage = 2025+ Number(yr);
console.log(`Your age is ${age}`)
console.log(`The year will be ${afterage}`)