import './index.css'

const FaqItem = props => {
  const {item, visibleChange} = props
  const {id, questionText, isActive, answerText} = item

  const ShowText = () => {
    visibleChange(id)
  }

  return (
    <li className="list-container">
      <div className="question-container">
        <h1 className="heading1">{questionText}</h1>
        {isActive ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
            alt="minus"
            className="image"
            onClick={ShowText}
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
            className="image"
            onClick={ShowText}
          />
        )}
      </div>
      {isActive ? <p className="para">{answerText}</p> : null}
    </li>
  )
}
export default FaqItem
