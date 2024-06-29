        const scoreElement = document.querySelector('.score span');
        const playerChoiceDisplay = document.getElementById('playerChoice');
        const computerChoiceDisplay = document.getElementById('computerChoice');
        const resultMessage = document.getElementById('resultMessage');
        const resultModal = document.getElementById('resultModal');
        const body = document.body;
        let score = 0;

        function computerPlay() {
            const choices = ['rock', 'paper', 'scissors'];
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        function playRound(playerSelection) {
            const computerSelection = computerPlay();
            
            playerChoiceDisplay.textContent = playerSelection;
            computerChoiceDisplay.textContent = computerSelection;
            
            // Show modal with result
            resultModal.style.display = 'block';
           /* body.classList.add('modal-open'); // Add class to blur background */
            
            if (
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')
            ) {
                // Player wins
                score++;
                resultMessage.textContent = 'You won!';
                resultMessage.classList.add('win');
                resultMessage.style.color='#00aa0e';
            } else if (
                (playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors')
            ) {
                // Computer wins
                score--;
                resultMessage.textContent = 'You lose!';
                resultMessage.classList.add('lose');
                resultMessage.style.color='#ff0000';
            } else {
                // It's a draw
                resultMessage.textContent = 'It\'s a draw!';
                resultMessage.classList.remove('win', 'lose');
                resultMessage.style.color='#EB9F0E';
            }
            
            // Update score on the UI
            scoreElement.textContent = score;
        }

        function closeModal() {
            resultModal.style.display = 'none';
            resultMessage.textContent = '';
            resultMessage.classList.remove('win', 'lose');
            body.classList.remove('modal-open');
        }