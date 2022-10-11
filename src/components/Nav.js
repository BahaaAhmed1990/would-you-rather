import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
    handleLogOut = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(null))
    }
    render() {
        const { authedUser } = this.props
        if(authedUser === null){
            return(
                <div className='nav'>
                    <h1>Would You Rather</h1>
                </div>
            )
        } else {
            return (
                <div className='nav nav-bar'>
                    <h1>Would You Rather</h1>
                    <div>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/leaderboard'>LeaderBoard</NavLink>
                        <NavLink to='/add'>Add</NavLink>
                    </div>
                    <div className='flex'>
                        <p>{authedUser}</p>
                        <button onClick={this.handleLogOut}>log out</button>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(Nav)