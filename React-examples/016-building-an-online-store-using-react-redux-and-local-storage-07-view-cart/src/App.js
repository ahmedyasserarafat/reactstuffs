import React from 'react'
import { NavLink } from 'react-router-dom'
import Router from './Router'

import './app.css'
import './navigation.css'

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/cart'>Cart</NavLink></li>
    </ul>
  </nav>
)

export default function App() {
  return (
    <div
      className="page-container"
    >
      <Navigation />

      <Router />
    </div>
  )
}
