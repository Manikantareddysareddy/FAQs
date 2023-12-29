import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

const faqsList = [
  {
    id: 0,
    isActive: false,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    isActive: false,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    isActive: false,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    isActive: false,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

class Faqs extends Component {
  state = {newList: faqsList}

  visibleChange = id => {
    const {newList} = this.state
    this.setState(prevState => ({
      newList: prevState.newList.map(each => {
        if (each.id === id) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

  render() {
    const {newList} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul-container">
            {newList.map(eachItem => (
              <FaqItem
                item={eachItem}
                key={eachItem.id}
                visibleChange={this.visibleChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
