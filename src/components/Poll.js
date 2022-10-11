import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAddAnswerToQuestion } from '../actions/users'
class Poll extends Component {
    state = {
        selectedOption:'',
        click:false
    }
    handleChange = (e) =>{
        // this.setState({
        //     selectedOption: e.target.value,
        // });
        this.setState((prevState) => ({
            selectedOption: e.target.value,
            click:false
        }
        ))
    }
    handleSubmit =(e) => {
        e.preventDefault()
        if(this.state.selectedOption === ''){
            alert('Please, Choose an option')
            return
        }
        const { authedUser, questions } = this.props
        this.props.dispatch(handleAddAnswerToQuestion(authedUser,questions.id,this.state.selectedOption))
        this.setState({
            click:true
        })
    }
    render() {
        // const questionId = this.props.match.params.id
        // console.log(this.props)
        const { authedUser, questions } = this.props
        // console.log(authedUser)
        // console.log(questions)
        console.log(this.state)
        return (
            <div className='poll'>
                <h1>Poll</h1>
                <h3>Please Answer</h3>
                <p>{authedUser} Asked :</p>
                <p>Would You Rather</p>
                <form onSubmit={this.handleSubmit} className='form'>
                    <label>
                        <input 
                        type='radio' 
                        value='optionOne'
                        checked={this.state.selectedOption === 'optionOne'}
                        onChange={this.handleChange}
                        /> 
                        {questions.optionOne.text}
                    </label><br />
                    <p>OR</p>
                    <label>
                        <input 
                        type='radio' 
                        value='optionTwo'
                        checked={this.state.selectedOption === 'optionTwo'}
                        onChange={this.handleChange}
                        /> 
                        {questions.optionTwo.text}
                    </label><br />
                    <button 
                    type='submit'
                    disabled={this.state.click === false ? false : true}
                    >
                        submit
                    </button>
                </form>
                <div style={{
                    display:this.state.click === false ? 'none' : 'block'
                }}>
                    <Link className='btn' to={`/result/${questions.id}`}>See Result</Link>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ authedUser, questions},props){
    const questionId = props.match.params.id
    //console.log(questionId,authedUser,questions[questionId])
    return {
        authedUser,
        questions:questions[questionId]
    }
}
export default connect(mapStateToProps)(Poll)