import React , { Component }from 'react'
import RewardsGif from './RewardsGif'
import './style.css'

class Rewards extends Component {

  render() {
    return (
      <div className='rewards'>
        <RewardsGif question_tag ={this.props.question_tag} question_id ={this.props.question_id}/>
      </div>
    )
  }
}

export default Rewards
