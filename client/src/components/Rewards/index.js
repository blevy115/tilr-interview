import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import RewardsGif from './RewardsGif'
import './style.css'

const Rewards = () => (

  
  <div className='rewards'>
    <div className='rewards__sticky'>
      <h1 className='text-center'>Rewards</h1>
    </div>
    <RewardsGif question_tag = 'pikachu'/>
  </div>
)

export default Rewards
