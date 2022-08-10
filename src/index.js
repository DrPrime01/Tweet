import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <NameWithHandle />
        <Message />
        <Buttons />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <img src='https://gravatar.com/avatar/nothing'
    className='avatar'
    alt='avatar' />
  )
}

function Message() {
  return (
    <div className='message'>
      This is less than 140 characters
    </div>
  )
}

function NameWithHandle() {
  return (
    <div className='name-with-handle'>
      <span className='name'>Your Name</span>
      <span className='handle'>@yourhandle</span>
      <Time/>
    </div>
  )
}

function Buttons() {
  return (
    <div className='buttons'>
      <i className='fa fa-comment comment-btn' />
      <i className='fa fa-retweet retweet-btn' />
      <i className='fa fa-heart like-btn'/>
      <i className='fa fa-ellipsis-h more-options-btn'/>
    </div>
  )
}

function Time() {
  return (
    <span className='time'>3h ago</span> 
  )
}

ReactDOM.render(<Tweet />, document.querySelector("#root"))
