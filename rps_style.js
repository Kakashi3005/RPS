function playGame(){

    document.getElementById("hello-player").remove();
    document.getElementById("grid").style.property = "display:block";
}



// Player choices image.
		const rock = document.querySelector('.player-choices .rockimg');
		const paper = document.querySelector('.player-choices .paperimg');
		const scissors = document.querySelector('.player-choices .scissorsimg');
		
		// Computer choices image.
		const pcrock = document.querySelector('.computer-choices .rockimg');
		const pcpaper = document.querySelector('.computer-choices .paperimg');
		const pcscissors = document.querySelector('.computer-choices .scissorsimg');



        // To show the result each round.
		const pcscore = document.querySelector('#pcscore');
		const plscore = document.querySelector('#plscore');
		const tie = document.querySelector('#tie');
		const stars = document.createElement('p');

		// To keep the score.
		const pcpoint = document.querySelector('#pcpoints');
		const plpoint = document.querySelector('#plpoints');

		// To keep the rounds.
		const spentrounds = document.querySelector('#rounds');

		// Make a random number to decide computer's choice.
		function randomNumber(max) {
			return Math.floor(Math.random() * max);
		}

		// Decide computer's choice.
		function computerPlay() {
			let computerOptions = ["scissorsimg", "rockimg", "paperimg"]; // 0..2
			let computerChoice = computerOptions[randomNumber(3)];
			return computerChoice;
		}

		// Remove 'clicked' class name from images to end animation.
		function removeTransition(e) {
	  	if(e.propertyName !== 'transform') return;
	  	this.classList.remove('clicked');
		}

		// Call keepScore here to make sure it is called after the animation, not before. 
	  const imgs = document.querySelectorAll('img');
	  imgs.forEach(img => img.addEventListener('transitionend', removeTransition));	
	  imgs.forEach(img => img.addEventListener('transitionend', keepScore));

	  // Show the final result in the alert.
 		let rounds = 0;
		let wins = 0;

	  function keepScore() {		
			if(rounds == 5) {
				if(wins < 3) {
					alert("Your score is " + wins + ". You lost this game...");
					rounds = 0;
					wins = 0;
				} else {
					alert("Your score is " + wins + ". Congrats, you won this game!!");
					rounds = 0;
					wins = 0;
				}
			} else {
				return;
			}
		}

		// This is the core function of the game, which is called when a image is clicked.
		function makeChoice(e) {
			let computerChoice = computerPlay();
			
			if(e.target === rock && computerChoice === "paperimg") {
				pcpaper.classList.add("clicked");
                pcscore.appendChild(stars);
                stars.textContent = "WIN!";
				rounds += 1;
			} else if(e.target === rock && computerChoice === "scissorsimg") {
				rock.classList.add("clicked");
				plscore.appendChild(stars);
				stars.textContent = "WIN!";
				rounds += 1;
				++wins;
			} else if(e.target === scissors && computerChoice === "rockimg") {
				pcrock.classList.add("clicked");
				pcscore.appendChild(stars);
				stars.textContent = "WIN!";
				rounds += 1;
			} else if(e.target === scissors && computerChoice === "paperimg") {
				scissors.classList.add("clicked");
				plscore.appendChild(stars);
				stars.textContent = "WIN!";
				rounds += 1;
				++wins;
			} else if(e.target === paper && computerChoice === "scissorsimg") {
				pcscissors.classList.add("clicked");
				pcscore.appendChild(stars);
				stars.textContent = "WIN!";
				rounds += 1;
			} else if(e.target === paper && computerChoice === "rockimg") {
				paper.classList.add("clicked");
				plscore.appendChild(stars);
				stars.textContent = "WIN!";
				rounds += 1;
				++wins;
			} else if(e.target.className === computerChoice) {
				tie.appendChild(stars);
				stars.textContent = "Tie! Choose again!";
			}
			plpoints.textContent = "Score: " + wins;
			pcpoints.textContent = "Score: " + (rounds - wins);
			spentrounds.textContent = "Round: " + rounds;
		}
	 
		// Here are the event listeners.
		rock.addEventListener('click', makeChoice);
		paper.addEventListener('click', makeChoice);
		scissors.addEventListener('click', makeChoice);