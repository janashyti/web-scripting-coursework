async function CoinFlip() {
    
    const url = 'https://coin-flip3.p.rapidapi.com/Coin_Flip';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '870a65cda9msh1e12933ef13c2f0p11f580jsnd80fc84eecbe',  
            'x-rapidapi-host': 'coin-flip3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();  
        console.log(result);

        
        const resultText = result.flip === 'heads' ? 'Heads' : 'Tails';

        
        flipCoin(resultText);
    } catch (error) {
        console.error(error);
        alert('Failed to get the result from the API');
    }
}

function flipCoin(resultText) {
    const coin = document.getElementById('coin');
    const resultDisplay = document.getElementById('result');

    resultDisplay.textContent = 'Flipping...';

    
    coin.style.animation = 'none'; 
    coin.offsetHeight; 
    coin.style.animation = 'flip 1s forwards'; 

    
    setTimeout(() => {
        
        if (resultText === 'Heads') {
            coin.querySelector('.front').textContent = 'Tails';
            coin.querySelector('.back').textContent = 'Heads';
        } else {
            coin.querySelector('.front').textContent = 'Heads';
            coin.querySelector('.back').textContent = 'Tails';
        }

        
        resultDisplay.textContent = `Result: ${resultText}`;
    }, 1000);  
}


document.getElementById('flipButton').addEventListener('click', CoinFlip);
