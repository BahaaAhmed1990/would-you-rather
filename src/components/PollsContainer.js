import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from './Tabs'

class PollsContainer extends Component {
    render() {
        // console.log('polls Container',this.props)
        return (
            <div>
                <Tabs userQuestions={this.props.userQuestions}/>
            </div>
        )
    }
};

function mapStateToProps({ authedUser, users, questions }) {
    const answeredIds = Object.keys(users[authedUser].answers);
    const answerd = Object.values(questions)
    .filter(question => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
    
    const unanswerd = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestions: {
      answerd,
      unanswerd
    }
  };
}
export default connect(mapStateToProps)(PollsContainer)