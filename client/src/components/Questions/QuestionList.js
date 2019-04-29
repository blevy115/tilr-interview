import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, createAnswer, fetchAnswers } from '../../actions/questions'
import Rewards from '../Rewards'

class QuestionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id:1 // testing purpsoes
    }
  }

  componentDidMount() {
    this.props.fetchQuestions()
    this.props.fetchAnswers(this.state.user_id)
  }

  answerQuestion(question_id, is_yes) {
    this.props.createAnswer(this.state.user_id, question_id, is_yes)
    .then(res => {
      this.props.fetchAnswers(this.state.user_id)
    })
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
                <button className='btn btn-success' style={{ marginRight: 10 }} onClick={() => this.answerQuestion(question.question_id, true, this.props.fetchAnswers(this.state.user_id))}
                disabled={this.props.answers.includes(question.question_id)}>Yes</button>
                <button className='btn btn-danger' onClick={() => this.answerQuestion(question.question_id, false)}
                disabled={this.props.answers.includes(question.question_id)}>No</button>
                { this.props.answers.includes(question.question_id) &&
                  <div>
                  <Rewards  question_tag={question.tag} question_id={question.question_id}/>
                  </div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions, answers, results }) => ({
  questions: questions.all,
  answers: answers.all.map(answer => answer.question_id),
})

const mapDispatchToProps = {
  fetchQuestions, createAnswer, fetchAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
