import logo from './logo.svg'
import './App.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

const YourComponent = () => {
  const location = useLocation()
  const { state } = location || {}
  const { username, password } = state || {}

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Username: {username}, Password: {password}
        </a>
      </header>
    </div>
  )
}

export default YourComponent
