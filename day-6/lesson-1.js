var name = "John Doe";
var age = 30;
var isStudent = true;
var mathScore = 60;
var englishScore = 85;
var physicsScore = 75;
var totalScore = mathScore + englishScore + physicsScore;
var averageScore = totalScore / 3;
var reducedScore = totalScore - 10;
var multipliedScore = totalScore * 2;
var result = mathScore > 50 && englishScore > 50 && physicsScore > 50;
var isPassed = result ? "Passed" : "Failed";

var a = 10;
var b = 20;
console.log(a + b);

if (result) {
  console.log("Congratulations! You have passed.");
} else {
  console.log("Sorry! You have failed.");
}

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);
console.log("Total Score: " + totalScore);
console.log("Reduced Score: " + reducedScore);
console.log("Average Score: " + averageScore);
console.log("Multiplied Score: " + multipliedScore);
console.log("Result: " + result);
console.log("Final Result: " + isPassed);
