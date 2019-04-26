import React, { Component } from 'react'
import { connect } from 'react-redux'

class RewardsGif extends Component {
  constructor() {
    super()
    this.state = {
      loaded:false
    }
  }

  componentDidMount (){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.props.question_tag}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=1`)
    .then(response => response.json())
    .then(data => this.setState({tag:data,loaded:true}))
    .then(()=> console.log(this.state))
  }

  render() {
    if (this.state.loaded){

    return (
      <div className = 'rewards_gif'>
        <img src={this.state.tag.data[0].images.original.url}/>
      </div>
    )
  }
  else {
    return(
      <div className = 'rewards_gif'>
      </div>
    )
  }
  }

}

export default RewardsGif
