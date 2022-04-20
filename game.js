

    let playerOpt="";
    const buttons = document.querySelectorAll("button")
    const results = document.querySelector(".result");
    const result = document.createElement("p");


    buttons.forEach((button) => {
    let counter = 0;
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
        playerSelection=e.target.alt;
        playGame();
        counter++;
        if (counter ===6){
            counter = 1;
        }
        roundCounter(counter)
     });
    })
    
    let  gameOpt = ['rock', 'paper', 'scissors']
    
    // selects computer option for game 
    
    let computerSelection = ""
    function computerPlay(){
        let opt = Math.floor( Math.random()*gameOpt.length);
        let result =gameOpt[opt];
        return computerSelection =result;
    }
    // this compares user input vs computer's selecction  and returns result
    function playRound(playerSelection,computerSelection){
    
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" ){
            
            console.log("enter a valid option") 
        }else if (playerSelection === computerSelection){
            console.log("it's a tie, you both have the same");
            result.textContent = "it's a tie, you both have the same";
            results.appendChild(result);
    
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            result.textContent = `you have won because ${playerSelection} beats ${computerSelection} `;
            results.appendChild(result);
            console.log( `you have won because ${playerSelection} beats ${computerSelection} `)
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            console.log( `you have won because ${playerSelection} beats ${computerSelection} `)
            result.textContent = `you have won because ${playerSelection} beats ${computerSelection} `;
            results.appendChild(result);
    } else if (playerSelection === "paper" && computerSelection === "rock"){
            console.log( `you have won because ${playerSelection} beats ${computerSelection} `)
            result.textContent = `you have won because ${playerSelection} beats ${computerSelection} `;
            results.appendChild(result);
    } else {
        console.log (`you've lost, the Pc has chosen ${computerSelection} and ${computerSelection} beats ${playerSelection}. Better luck next time `)
        result.textContent = `you've lost, the Pc has chosen ${computerSelection} and ${computerSelection} beats ${playerSelection}. Better luck next time `
        ;
            results.appendChild(result);
    }
    }

    // plays a game of r-p-srock
    function playGame() {
        computerPlay(); 
        playRound(playerSelection, computerSelection);
    };


  function roundCounter(counter){
      if (counter <5){
            console.log("round "+counter);
            counter++;
      } else{
          console.log()
          result.textContent ="Game over. Start over";
          results.appendChild(result);
         
          
      }
    
    }