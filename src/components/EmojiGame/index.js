/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar/index'

import EmojiCard from '../EmojiCard/index'

import WinOrLoseCard from '../WinOrLoseCard/index'

import './index.css'

const scoreDetailsObject = {scoreValue: 0, topScoreValue: 0}

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojisListDetails: emojisList,
      scoreDetails: scoreDetailsObject,
      clickedEmojisListArray: [],
      isRepeated: false,
    }
  }

  // console.log(NaN === NaN); // false
  // console.log(isNaN(NaN));  // true

  emojiClickedAction = idNum => {
    const {clickedEmojisListArray, scoreDetails} = this.state
    const {scoreValue, topScoreValue} = scoreDetails
    if (clickedEmojisListArray.includes(idNum)) {
      const renderScoreValue = () => {
        console.log(topScoreValue, scoreValue)
        if (scoreValue >= topScoreValue) {
          return scoreValue
        }
        return topScoreValue
      }

      this.setState(prevState => ({
        isRepeated: true,
        scoreDetails: {
          ...prevState.scoreDetails,
          topScoreValue: renderScoreValue(),
          scoreValue: 0,
        },
      }))
    } else {
      clickedEmojisListArray.push(idNum)
      const shuffledEmojisList = () => {
        const {emojisList} = this.props
        return emojisList.sort(() => Math.random() - 0.5)
      }

      this.setState(prevState => ({
        emojisListDetails: shuffledEmojisList(),
        scoreDetails: {
          ...prevState.scoreDetails,
          scoreValue: prevState.scoreDetails.scoreValue + 1,
        },
      }))
    }
  }

  playBtnEl = () => {
    this.setState({isRepeated: false, clickedEmojisListArray: []})
  }

  render() {
    const {emojisListDetails, scoreDetails, isRepeated} = this.state

    const renderEmojisUi = () => {
      if (!isRepeated) {
        return emojisListDetails.map(eachObject => (
          <EmojiCard
            eachObject={eachObject}
            emojiClickedAction={this.emojiClickedAction}
            key={eachObject.id}
          />
        ))
      }
      return null
    }

    const renderWinOrLoseUi = () => {
      if (!isRepeated) {
        return null
      }
      return <WinOrLoseCard playBtnEl={this.playBtnEl} />
    }

    return (
      <div className="bg">
        <NavBar scoreDetails={scoreDetails} isRepeated={isRepeated} />
        <div className="listContainer">
          <ul className="ulContainer">
            {renderEmojisUi()}
            {renderWinOrLoseUi()}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
