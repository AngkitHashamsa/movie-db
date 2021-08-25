import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home/Home'
import SingleMovie from './SingleMovie'
const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/movie/:id' children={<SingleMovie />} />
    </Switch>
  )
}

export default App
