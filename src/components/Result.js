import React, { Component } from 'react'
import { connect } from 'react-redux'
class Result extends Component {
    render() {
        const { questions } = this.props 
        console.log(questions)
        return (
            <div className='result'>
                <h1>Result</h1>
                <h3>{questions.author} asked </h3>
                <p>Would You Rather ...</p>
                <div>
                    <p className='result-option'>
                        {questions.optionOne.text} &nbsp; &nbsp;
                        num of votes <span>{questions.optionOne.votes.length}</span>
                    </p>
                </div>
                <div>
                    <p className='result-option'>{questions.optionTwo.text} &nbsp; &nbsp;
                    num of votes <span>{questions.optionTwo.votes.length}</span>
                </p>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ questions },props){
    const questionId = props.match.params.id
    return{
        questions:questions[questionId]
    }
}
export default connect(mapStateToProps)(Result)