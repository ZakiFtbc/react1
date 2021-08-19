import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Apps from './App'
import Login from './Login'
import LandingPage from './LandingPage'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// function About () {
//   return <h2>About</h2>
// }

export default function App () {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path='/about'>
            <About />
          </Route> */}
          {/* <Route path='/login'>
            <Apps />
          </Route> */}
          <Route path='/'>
            <LandingPage />
            {/* <Login /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

/**
 * TODO
 * [-] add main body component (bug logo w arrow)
 *  [x] add on hover show arrow
 *   [] change button to caret
 *   [] add 2 bg for each part
 *   [] add small white pagination below image as onclick left right
 *   [] add another bg (same of type), but opac 50% (as shown on test doc)
 *   [] add transition of image onchange
 *  [x] if already page right, and onclick right arr -> nth will happen
 *  [x] if already page left, and onclick left arr -> nth will happen
 * 4.30pm - need image fixed! arep!!!
 * [] add top banner component (dark purple, right corner shows ethereum w caret)
 *  [] add gradient color
 * [] add header component (mintable logo w search bar)
 * 5pm
 * [] add content component (last! - the bottom components)
 * 5.30pm
 * [] create git repo + upload
 */
