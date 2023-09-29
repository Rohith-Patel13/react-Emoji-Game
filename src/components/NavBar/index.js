// Write your code here.

import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {scoreDetails, isRepeated} = this.props
    const {scoreValue, topScoreValue} = scoreDetails
    // console.log(isRepeated)
    const displayScore = isRepeated ? 'displayScoreDetails' : ''
    return (
      <nav className="navContainer">
        <div className="emojiLogoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emojiLogoImage"
          />
          <p className="emojiPara">Emoji Game</p>
        </div>
        <div className={`scoreContainer ${displayScore}`}>
          <p className="scorePara">Score: {scoreValue}</p>
          <p className="scorePara">Top Score: {topScoreValue}</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
