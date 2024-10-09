export default function Modal({resetGame}) {
    return (
        <div className="modal">
            <div className="modal-backdrop">
                <div className="modal-content">
                    <h1>Game Over</h1>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            </div>
        </div>
    )
}