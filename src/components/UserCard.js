import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserCard extends Component {
    render() {
        // console.log(this.props.user)
        const questionsNum = Object.keys(this.props.user.answers).length
        // console.log(questionsNum)
        const answersNum = this.props.user.questions.length
        // console.log(answersNum)
        return (
            <div>
                <p className='usercard-name'>
                    {this.props.userId} : &nbsp; &nbsp;
                    <span>{questionsNum + answersNum}</span>
                </p>
                <p className='usercard-question'>
                    You Asked :&nbsp; &nbsp;<span>{questionsNum}</span> Questions
                </p>
                <p className='usercard-answer'>
                    You Answered : &nbsp; &nbsp;<span>{answersNum}</span> Answers
                </p>
            </div>
        )
    }
};

function mapStateToProps({ users },props){
    return {
        user:users[props.userId]
    }
}
export default connect(mapStateToProps)(UserCard)