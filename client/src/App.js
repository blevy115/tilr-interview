import React from 'react'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import { Route, Switch } from 'react-router-dom'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Questions from './components/Questions'
import Rewards from './components/Rewards'
import './App.css'

const history = createBrowserHistory()

let composeEnhancers = compose
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = createStore(
  reducers(history),
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk)
  )
)

const App = () => (
  <div className='app'>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route  exact path='/' component={Questions} />
          <Route  path='/rewards' component={Rewards} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </div>
)

export default App
