import React, { Component } from 'react'
// import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import PollsContainer from './PollsContainer'

class HomePage extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Your Polls</h1>
                <PollsContainer />
            </div>
        )
    }
}
export default HomePage