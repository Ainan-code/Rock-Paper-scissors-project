 var gameoutput = ["rock","paper","scissors"];

 var random = gameoutput[Math.floor(Math.random()*gameoutput.length)];

function Computerplay() {
    // function for the random computer guess
    return random;
} 

let playerselection;
let computerselection ;



function winner(playerselection, computerselection) {
   playerselection = window.prompt("make your move").toLowerCase();
   computerselection = Computerplay();
       let result = 0;
   if (playerselection==("rock") && computerselection==("paper"))  
      return result=("You lose! Paper beats Rock"); 
   
   
   if (playerselection==("rock") && computerselection==("scissors")) 
      return result=("You win! Rock beats scissors");
   

   if (playerselection==("paper") && computerselection==("scissors")) 
      return result=("You lose! scissors beats paper");

   if (playerselection==("paper") && computerselection==("rock")) 
      return result=("You win! Paper beats Rock");

   if (playerselection==("scissors") && computerselection==("rock")) 
      return result=("You lose! Rock beats scissors");

   if (playerselection==("scissors") && computerselection==("paper")) 
      return result=("You win! scissors beats paper");

      if (playerselection===computerselection) 
      return result=("its a tie");
       
   console.log(result)
      
}

   
  
