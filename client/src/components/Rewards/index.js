import React , { Component }from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import RewardsGif from './RewardsGif'
import './style.css'

class Rewards extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='rewards'>
        <RewardsGif question_tag ={this.props.question_tag}/>
      </div>

    )
  }
}

export default Rewards
