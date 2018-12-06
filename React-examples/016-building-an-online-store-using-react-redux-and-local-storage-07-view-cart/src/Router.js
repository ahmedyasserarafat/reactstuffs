import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import CartPage from './pages/cart'

const routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/cart' component={CartPage}></Route>
  </Switch>
)

export default routes