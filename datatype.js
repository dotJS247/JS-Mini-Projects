// Why do we need data type in programming

// lets say the studnet id is made of:
// 100 (university code)+ subject code + session year (2024) +  admission serial
// Subject code for CSE is 52
// So, the student id for 1st admitted student should be assigned 100 + 52 + 2024 + 1
const uniCode = 100;
const subCode = 52;
const session = 2024;
const serial = 1;

const studentIdAsNumber = uniCode + subCode + session + serial;

const uniCodeS = "100";
const subCodeS = "52";
const sessionS = "2024";
const serialS = "1";

const studentIdAsString = uniCodeS + subCodeS + sessionS + serialS;

console.log(studentIdAsNumber); // output:  2177

console.log(studentIdAsString); // output: 1005220241
