var readlineSync=require('readline-sync');
var score=0;
console.log("welcome to jatin's quiz on stranger things");
console.log("------------------------------------------");
var quesContinue=readlineSync.question("press e to quit or any other button to continue");
if (quesContinue === "e")
  sys.exit()
else
{
function play(question,answer)
  {
    console.log(question)
    var userAnswer=readlineSync.question("What is your answer ");
    if (userAnswer==answer) {
      console.log("yay! you are right");
      score++;
    }
    else
    {console.log("you are wrong");
    score--;}
    

    
  }
var questions=[
  {question:"What is the name of the official D&D club at Hawkins High School? ", answer:"hellfire club"},
  {question:"Which actor plays Joyce Byers? ", answer:"wiona ryder"},{question:"What is the other dimension in Stranger Things called? ",answer:"the upside down"}
];
var i;
for(i=0;i<3;i++)
  {
    var t= questions[i];
    play(t.question,t.answer)
    
      
  }
    console.log("----------------------------------------");
    console.log("thank you for playing,your score:",score)
    console.log("highest score:",2)
    if score > 2{
      console.log("congrats for setting new high score")
    }
    else{
      console.log("unfortunately you were not able to beat he high score")
    }
}
  
  
