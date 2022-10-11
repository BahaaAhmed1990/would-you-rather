import React, { useState } from 'react'
import PollItem from './PollItem';

const Tabs = ({ userQuestions}) => {
    // console.log('tabs',userQuestions.answerd)
    // console.log('tabs',userQuestions.unanswerd)
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        setActiveTab("tab1");
    };
      const handleTab2 = () => {
        setActiveTab("tab2");
    };
    return (
        <div className='tabs'>
        {/* Tab nav */}
        <ul className="pills">
          <li onClick={handleTab1}>Answerd</li>
          <li onClick={handleTab2}>UnAnswerd</li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" ? 
          <FirstTab answerd={userQuestions.answerd}/> : <SecondTab unanswerd={userQuestions.unanswerd}/>}
        </div>
      </div>
    );
  };

  // FirstTab.js

  const FirstTab = ({answerd}) => {
      // console.log(answerd)
    return (
      <div className="first-tab">
        <p className='first-tab-para'>Answerd questions</p>
        {answerd.map((q) => (<PollItem
        key={q.id}
        id={q.id} 
        author={q.author}
        optionOne={q.optionOne.text}
        optionTwo={q.optionTwo.text}
        btn='answerd'
        />))}
      </div>
    );
  };
  
  // SecondTab.js
  
  const SecondTab = ({unanswerd}) => {
      // console.log(unanswerd)
    return (
      <div className="second-tab">
        <p className='second-tab-para'>UnAnswerd questions</p>
        {unanswerd.map((q) => (<PollItem 
        key={q.id}
        id={q.id}
        author={q.author}
        optionOne={q.optionOne.text}
        optionTwo={q.optionTwo.text}
        btn='unAnswerd'
        />))}
      </div>
    );
  };

  export default Tabs