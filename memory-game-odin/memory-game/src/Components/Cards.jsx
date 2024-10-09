import { useState, useEffect } from "react";
import Modal from "./Modal";

export default function Cards() {
  
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [resetGame, setResetGame] = useState(false);
    
  
  useEffect(() => {
        const fetchCards = async () => {
            const newCards = [];
            const usedIds = [];
            
            while (newCards.length < 16) {
                const generateRandomPokemonId = () => {
                    const maxPokemon = 1010;
                    return Math.floor(Math.random() * maxPokemon) + 1;
                };

                let randomId = generateRandomPokemonId();

                // Check if the ID is already used
                while (usedIds.includes(randomId)) {
                    randomId = generateRandomPokemonId();
                }

                usedIds.push(randomId);

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                const data = await response.json();
                const pokemonName = capitalizeFirstLetter(data.name);
                const pokemonImage = data.sprites.front_default;
                newCards.push({ id: randomId, value: pokemonName, image: pokemonImage });
            }

            setCards(newCards);
        }
        fetchCards();

    }, [resetGame]);       
    
    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onRestart = () => {
        setCount(0);
        setClickedCards([]);
        setGameOver(false);
        setResetGame(prev => !prev); // Toggle the resetGame state to trigger useEffect
    };

    const handleCardClick = (card) => {
        setClickedCards((prevClickedCards) => {
            if (!prevClickedCards.includes(card.id)) {
                setCount((prevCount) => prevCount + 1);
                return [...prevClickedCards, card.id]; 
            } else {
                setGameOver(true);
                if (count > highestScore) {
                    setHighestScore(count);
                }
            }
        });
    };

    const shuffleCards = () => {
        setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
    }

    return (
    <>
    <div className="count-container">
        <p className="count-text">Count: {count}</p>
        <p className="highest-score-text">Highest Score: {highestScore}</p>
    </div>
    
    <div className="grid-container">
        <div className="cards-grid">
            {cards.map(card => (
            <div key={card.id} className="card" onClick={() => { shuffleCards(); handleCardClick(card); }}>
                <img src={card.image} alt={card.value} />
                <p>{card.value}</p>
            </div>
            ))}
        </div>
            {gameOver && <Modal resetGame={onRestart} />}

  </div>
  </>
)}