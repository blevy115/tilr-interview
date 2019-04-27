import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createQuestion } from '../../actions/questions'

class QuestionsForm extends Component {
  constructor() {
    super()
    this.state = { question: '', tag:'' }
  }

  submitForm(event) {
    event.preventDefault()
    this.props.createQuestion(this.state.question, this.state.tag)
  }

  isDisabled(){
    return !(this.state.question && this.state.tag)
  }

  render() {
    const { question } = this.state.question
    const {tag } = this.state.tag
    return (
      <form onSubmit={event => this.submitForm(event)} className='question-form'>
        <h3>Create a Question</h3>
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ question: target.value })}
          placeholder='Enter your question...'
          value={question}
        />
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ tag: target.value })}
          placeholder='Enter your tag'
          value={tag}
        />
        <button
          className='btn btn-primary'
          disabled={this.isDisabled()}
          type='submit'
        >
          Create
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  createQuestion
}

export default connect(null, mapDispatchToProps)(QuestionsForm)
