import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function PollItem({ id, author, optionOne, optionTwo, btn}) {
    return (
        <div className='poll-item'>
            <h3>{author} Ask :</h3>
            <p>would you rather</p>
            <p className='option'>{optionOne}</p>
            <p>OR</p>
            <p className='option'>{optionTwo}</p>
            <Link to={btn === 'answerd' ? `result/${id}` :`/question/${id}`}>
                {btn === 'answerd' ? 'View Result' : 'Answer Poll' }
            </Link>
        </div>
    )
};

export default  withRouter(PollItem)
