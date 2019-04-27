import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../actions/questions'
import Rewards from '../Rewards'

class QuestionList extends Component {
  componentDidMount() {
    this.props.fetchQuestions()
  }

  answerQuestion(question, bool){
    
  }

  render() {
    return (
      <div className='question-list'>
        <h3>Recently Added</h3>
        {this.props.questions.map(question => (
          <div className='card' key={question.question_id}>
            <div className='card-body'>
              <h5 className='card-title'>{question.text}</h5>
              <div className='card-body'>
                <button className='btn btn-success' style={{ marginRight: 10 }}>Yes</button>
                <button className='btn btn-danger'>No</button>
                <Rewards question_tag={question.tag}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => ({
  questions: questions.all
})

const mapDispatchToProps = {
  fetchQuestions
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
