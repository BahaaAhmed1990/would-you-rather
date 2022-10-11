import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCard from './UserCard'

class LeaderBoard extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className='leader-board'>
                <h1>Leader Board</h1>
                <ul>
                    {this.props.usersIds.map((userId) => (
                        <li key={userId}>
                            {/* {userId} */}
                            <UserCard userId={userId} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

function mapStateToProps({ users }){
    return {
        usersIds:Object.keys(users)
        .sort((b,a) => Object.keys(users[a]['answers']).length+users[a]['questions'].length-
         Object.keys(users[b]['answers']).length-users[b]['questions'].length)
    }
}

export default connect(mapStateToProps)(LeaderBoard)
