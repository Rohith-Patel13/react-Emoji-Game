// Write your code here.
import './index.css'

const WinOrLoseCard = () => (
  <div className="CardContainer">
    <div className="cardScoreContainer">
      <h1 className="description">You Won</h1>
      <p className="description">Best Score</p>
      <p className="scoreText description">12/12</p>
      <button type="button" className="btnPlay">
        Play Again
      </button>
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      alt="won"
      className="gameImg"
    />
  </div>
)

export default WinOrLoseCard
