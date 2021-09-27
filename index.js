var readLineSync =require('readline-sync');
var chalk = require('chalk');
var score = 0 ;
var userName = readLineSync.question("What is Your Name :");

console.log("Hello " + userName + " Do You Know Yashpal ? ");

function play(question,answer)
{
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("You are Right !");
    score = score + 1;
  }
  else{
    console.log("You are Wrong !");
  }

  
console.log("Current Score is : " + score);
console.log("-----------------");
}



var questions = [{
  question : "What is my Nick Name ?  ",
  answer : "yash"
},{
  question: "Where do I live ?  ",
  answer: "shahada"
},{
  question : "What is my favorite Movie ?  ",
  answer : "bahubali"
}];

//loop

for(var i=0; i<questions.length; i++)
{
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);
}


highestScore = {
  name : 'Jayesh',
  score: 3
}
secondHighestScore = {
  name: 'Rahul',
  score: 2
}


console.log("Yaay! you scored :" + chalk.yellow(score));
console.log(chalk.green("......Highest Scorer........"));
console.log(highestScore.name + "-" + highestScore.score);
console.log(secondHighestScore.name + "-" + secondHighestScore.score);
console.log(chalk.magenta("if you think you beaten the records Send me the screenSort !!!!!"));
