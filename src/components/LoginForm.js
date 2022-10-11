import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginForm extends Component {
    handleChange = (e) => {
        this.props.dispatch(setAuthedUser(e.target.value))
        console.log(e.target.value)
    }
    render() {
        const { users } = this.props;
        return (
            <div className='login'>
                <h1>Please Select User</h1>
                <select defaultValue='selectUser' onChange={(e) => {this.handleChange(e)}}>
                    <option value='selectUser' disabled>Select User</option>
                    {users.map((user) => (
                        <option value={user.id} key={user.id}>{user.name}</option>
                    ))}
                </select>
            </div>
        )
    }
}

function mapStateToProps({ users }){
    return {
        users:Object.values(users)
    }
}
export default connect(mapStateToProps)(LoginForm)