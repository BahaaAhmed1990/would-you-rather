import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'

class Add extends Component {
    state = {
        optionOne:'',
        optionTwo:''
    }
    handleChange = (e) =>{
        if(e.target.id === 'optionOne'){
            // console.log(e.target.value)
            this.setState({
                optionOne:e.target.value
            })
        } else if(e.target.id === 'optionTwo'){
            this.setState({
                optionTwo:e.target.value
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
        this.props.dispatch(handleSaveQuestion(this.state.optionOne,this.state.optionTwo,this.props.authedUser))
        this.setState((prevState) => ({
            optionOne:'',
            optionTwo:''
        }))
    }
    render() {
        // console.log(this.state)
        // console.log(this.props)
        return (
            <div className='add'>
                <h1>Add Your Poll</h1>
                <p>Would You Rather</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                    id='optionOne' 
                    type='text' 
                    value={this.state.optionOne} 
                    onChange={this.handleChange}/>
                    <p>OR</p>
                    <input 
                    id='optionTwo'
                    type='text' 
                    value={this.state.optionTwo}
                    onChange={this.handleChange}/>
                    <br/>
                    <button 
                    className='add-btn'
                    type='submit'
                    disabled={(this.state.optionOne === '') || (this.state.optionTwo === '') }>
                        submit
                    </button>
                </form>
            </div>
        )
    }
}
function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Add)