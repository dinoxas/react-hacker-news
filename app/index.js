import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Top from './components/Top'
import New from './components/New'
import './index.css'


class App extends React.Component {

  render() {
    return (
      <Router>

          <div>
            <div className='container'>
              <Nav />
   

                <Switch>
                  <Route exact path='/' component={Top} />
                  <Route exact path='/new' component={New} />
                </Switch>

            </div>
          </div>

      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)