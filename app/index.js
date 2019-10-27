import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import Posts from './components/Posts'
import New from './components/New'
import Loading from './components/Loading'
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
                <React.Suspense fallback={<Loading />}>
                  <Switch>
                    <Route exact path='/' component={Posts} />
                    <Route exact path='/new' component={New} />
                  </Switch>
                </React.Suspense>

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