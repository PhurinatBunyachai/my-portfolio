import React, { Component, lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import  Home  from './pages/Home';
import  About  from './pages/About';
import  NotFound  from './pages/NotFound';
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() =>import('./pages/About'));
// const NotFound = lazy(() =>import('./pages/NotFound'));


 class App extends Component {
  render() {
    return (
        <Router>
           <Header/>
           <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
    )
  }
}

export default App
