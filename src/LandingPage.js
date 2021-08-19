import React from 'react'
import {
  useHistory
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom'
import TopBanner from './components/TopBanner'
import Header from './components/Header'
import Body from './components/Body'
import Menu from './components/Menu'

const YourComponent = () => {
  const history = useHistory()

  const handleClick = (event, username = 'testuser', password = 'testpass') => {
    history.push({
      pathname: '/login',
      // search: '?update=true',  // query string
      state: {
        username, password
      }
    })
  }

  return (
    <div className='LandingPage'>
      <TopBanner />
      <Header />
      <Menu />
      <Body />
    </div>
  )
}

export default YourComponent
