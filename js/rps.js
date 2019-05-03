const game = () => {
	let pScore = 0;
	let cScore = 0;

	//Start the Game

	const startGame = () => {
		 const playBtn = document.querySelector(".intro button");
		 const introScreen = document.querySelector(".intro");
		 const match = document.querySelector(".match");


		 playBtn.addEventListener("click", () =>{
		 	introScreen.classList.add("fadeOut");
		 	match.classList.add("fadeIn");
		 });
	};

	// Play Match 

		const playMatch = () => {
			const options = document.querySelectorAll(".options button");
			const playerHand = document.querySelector(".player-hand");
			const computerHand = document.querySelector(".computer-hand");
			const hands = document.querySelectorAll(".hands img");

			hands.forEach(hand => {
				hand.addEventListener("animationend", function(){
					this.style.animation = "";

				});
			});

			//Computer Options 

			const computerOptions =['rock','paper','scissors'];

			options.forEach(option => {
				option.addEventListener("click", function (){

					//Computer Choice

					const computerNumber = Math.floor(Math.random()*3);
					const computerChoice = computerOptions[computerNumber];
				    
				    setTimeout(() => {

					//compare hands

					compareHands(this.textContent, computerChoice);

					//update images

					playerHand.src = `./images/${this.textContent}.png`;
					computerHand.src = `./images/${computerChoice}.png`;
				}, 2000 );

				    // Animation

				    playerHand.style.animation = "shakePlayer 2s ease";
				    computerHand.style.animation = "shakeComputer 2s ease";

			    });

			});
		};

		const updateScore = () => {
			const playerScore = document.querySelector('.player-score p');
			const computerScore = document.querySelector('.computer-score p');
			playerScore.textContent = pScore;
			computerScore.textContent = cScore;
		};


		const compareHands = (PlayerChoice, computerChoice) => {
			//Update text
			const winner = document.querySelector('.winner');
			//checking for a tie
			if (PlayerChoice === computerChoice) {
				winner.textContent = 'It is a tie';
				return;
			}

			//check for rock
			if (PlayerChoice === 'rock') {
				if (computerChoice === 'scissors') {
					winner.textContent = 'Player Wins';
					pScore++;
					updateScore();
					return;
				}else{
					winner.textContent = 'Computer wins';
					cScore++;
					updateScore();
					return;
				}
			}

			//Check for paper

				if (PlayerChoice === 	'paper') {
				if (computerChoice === 'scissors') {
					winner.textContent = 'Computer Wins'
					pScore++;
					updateScore();
					return;
				}else{
					winner.textContent = 'Player wins';
					cScore++;
					updateScore();
					return;
				}
			}



			//Check for Scissors

				if (PlayerChoice === 'scissors') {
				if (computerChoice === 'rock') {
					winner.textContent = 'Computer Wins';
					cScore++;
					updateScore();
					return;
				}else{
					winner.textContent = 'Player wins';
					pScore++;
					updateScore();
					return;
				}
			}


		}


		// it calls all of the inner functions

	startGame();
	playMatch();
};

game();