import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import Top from './components/Top'
import New from './components/New'
import './index.css'


class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
     
    }
  }

  render() {

    return (
      <Router>
          <ThemeProvider value={this.state}>
            <div className={this.state.theme}>
              <div className='container'>
                <Nav />
                  <Switch>
                    <Route exact path='/' component={Top} />
                    <Route exact path='/new' component={New} />
                  </Switch>

              </div>
            </div>
          </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)