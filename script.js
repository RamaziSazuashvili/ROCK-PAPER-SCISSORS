/*// Get relevant DOM elements
const scoreElement = document.querySelector('.score span');

// Initial score
let score = 0;

// Function to generate computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine round winner
function playRound(playerSelection) {
    const computerSelection = computerPlay();
    
    if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        // Player wins
        score++;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        // Computer wins
        score--;
    }
    
    // Update score on the UI
    scoreElement.textContent = score;
}*/

// JavaScript code for Rock Paper Scissors game logic
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
            } else if (
                (playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors')
            ) {
                // Computer wins
                score--;
                resultMessage.textContent = 'You lose!';
                resultMessage.classList.add('lose');
            } else {
                // It's a draw
                resultMessage.textContent = 'It\'s a draw!';
                resultMessage.classList.remove('win', 'lose');
            }
            
            // Update score on the UI
            scoreElement.textContent = score;
        }

        function closeModal() {
            resultModal.style.display = 'none';
            resultMessage.textContent = '';
            resultMessage.classList.remove('win', 'lose');
            body.classList.remove('modal-open'); // Remove class to remove blur
        }