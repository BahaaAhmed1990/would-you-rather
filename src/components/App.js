import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import LoginForm from './LoginForm'
import LeaderBoard from './LeaderBoard'
import Add from './Add'
import Nav from './Nav'
import Poll from './Poll'
import Result from './Result'
import PageNotFound from './PageNotFound'
import '../App.css';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="app">
              <Nav />
              <Switch>
                {authedUser === null ? <Route path='/' component={LoginForm}/> :
                <>
                  <Route exact path='/' component={HomePage} />
                  <Route exact path='/leaderboard' component={LeaderBoard} />
                  <Route exact path='/add' component={Add} />
                  <Route path='/question/:id' component={Poll}/>
                  <Route path='/result/:id' component={Result}/>
                </>
                }
                <Route component={PageNotFound} />
              </Switch>
        </div>
      </Router>
    );
  }
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
