
// //  Mini Calculator

let Operators = prompt(" Which Operator to Use (+ , - , * , / )");

let value1 = Number(prompt("first-value"));
let value2 = Number(prompt("second-value"));

let result = Operators == "+" ? value1 + value2 : Operators == "-" ? value1 - value2 :  Operators == "*" ? value1 * value2 :  Operators == "/" ? value1 / value2 : "Not a operator";

alert(result);


// // Smart Login Simulator

let Email = prompt("Enter a Email");
let Password = Number(prompt("Enter a Password"));

let savedEmail = "student@gmail.com";
let savedPassword = "12345";

let checking = ( Email == savedEmail && Password == savedPassword) ? "Login Successful" : "Login Failed";
alert(checking);


// Result Checker

let score = Number(prompt("what your CSS pervious test score "));

let grade = score === 100 ? "You are extra ordinary student score 100% " : score <= 40 ? "FAil you need a more Partice" : score < 70 ? "Pass" : score > 70 && score < 100 ? "Pass Grade A1" :
"Something Wrong";
alert(grade);


//  Task 3: Counter Program

let count = 10;
console.log(++count); 11
console.log(count++); 11+1
console.log(--count); 11
console.log(count--); 11 - 
console.log(2*count); 20
console.log(count*2); 
console.log(count);
