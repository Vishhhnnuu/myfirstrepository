document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const movesDisplay = document.getElementById('moves');
    const timerDisplay = document.getElementById('timer');
    
    const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
    let cards = [...emojis, ...emojis];
    let flippedCards = [];
    let moves = 0;
    let time = 0;
    let timer;
    let matchedPairs = 0;

    
    cards.sort(() => Math.random() - 0.5);

    
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.index = index;
        card.textContent = '?';
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });

    
    timer = setInterval(() => {
        time++;
        timerDisplay.textContent = `Time: ${time}s`;
    }, 1000);

    function flipCard() {
        
        if (flippedCards.length >= 2 || this.classList.contains('flipped')) return;

      
        this.classList.add('flipped');
        this.textContent = cards[this.dataset.index];
        flippedCards.push(this);

      
        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = `Moves: ${moves}`;
            
            if (flippedCards[0].textContent === flippedCards[1].textContent) {
                
                flippedCards.forEach(card => card.classList.add('matched'));
                flippedCards = [];
                matchedPairs++;
                
                
                if (matchedPairs === emojis.length) {
                    clearInterval(timer);
                    setTimeout(() => alert(`You won in ${time} seconds with ${moves} moves!`), 500);
                }
            } else {
                
                setTimeout(() => {
                    flippedCards.forEach(card => {
                        card.classList.remove('flipped');
                        card.textContent = '?';
                    });
                    flippedCards = [];
                }, 1000);
            } 
        }
    }
});