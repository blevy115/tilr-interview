import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchQuestionAnswers } from '../../actions/questions'

class RewardsGif extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded:false,
    }
  }

  componentDidMount (){
    this.props.fetchQuestionAnswers(this.props.question_id)
    .then(res => {
      this.setState({
        results:this.props.results,
        question_id:this.props.question_id
      })
    })
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.props.question_tag}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=10`)
    .then(response => response.json())
    .then(data => this.setState({tag:data,loaded:true}))
  }

  render() {
    if (this.state.loaded && this.state.results){
    return (
      <div className = 'rewards_gif'>
        <img src={this.state.tag.data[Math.floor(Math.random()*10)].images.fixed_height.url} alt={this.state.tag.data[Math.floor(Math.random()*10)].images.fixed_height.url}/>
        <h1 className='card-result'>{(parseInt(this.state.results.filter((result) => result === true).length) / parseInt(this.state.results.length)  * 100).toFixed()} % of people say Yes</h1>
      </div>
    )
  }
  else {
    return(
      <div className = 'rewards_gif'>
      </div>
    )}
  }
}

const mapStateToProps = ({results}) => ({
  results:results.all.map(result => result.is_yes)
})

const mapDispatchToProps = {
  fetchQuestionAnswers
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardsGif)
