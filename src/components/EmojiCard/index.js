// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {eachObject, emojiClickedAction} = props
  const {id, emojiName, emojiUrl} = eachObject

  const emojiClicked = () => {
    emojiClickedAction(id)
  }

  return (
    <li className="liContainer">
      <img
        src={emojiUrl}
        alt={emojiName}
        className="emojiImage"
        onClick={emojiClicked}
      />
    </li>
  )
}

export default EmojiCard
