import React , { Component }from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/questions'
import './style.css'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:'',
      password:''
    }
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0
  }

  handelSubmit(event) {
    event.preventDefault()
    this.props.createUser(this.state.name, this.state.password)
  }

  render() {
    const {name} = this.state.name
    const{password} = this.state.password
    return (
      <div>
      <form onSubmit={event => this.handelSubmit(event)} className='user-form'>
        <h3>Create a User</h3>
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ name: target.value })}
          placeholder='Enter your username'
          value={name}
        />
        <input
          className='form-control'
          onChange={({ target }) => this.setState({ password: target.value })}
          placeholder='Enter your password'
          value={password}
        />
        <button
          className='btn btn-primary'
          type='submit'
        >
          Create
        </button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createUser
}

export default connect(null, mapDispatchToProps)(Login)
