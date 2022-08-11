import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';




function Tweet({tweet}) {
  return (
    <div className='tweet'>
      <Avatar hash={tweet.gravatar}/>
      <div className='content'>
        <span className='name-time'><NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/></span>
        <Message text={tweet.message}/>
        <div className='buttons'>
          <CommentButton />
          <LikeButton count={tweet.likes}/>
          <RetweetButton count={tweet.retweets}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

let testTweet = {
  message: "Something about cats",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person" 
  },
  likes: 2,
  retweets: 0,
  timestamp: "2016-07-30 21:24:37"
}

function Avatar({hash}) {
  let url = `https://gravatar.com/avatar/${hash}`
  return (
    <img src= {url}
    className='avatar'
    alt='avatar' />
  )
}

function Message({text}) {
  return (
    <div className='message'>
      {text}
    </div>
  )
}

function NameWithHandle({ author}) {
 const {name, handle} = author;
  return (
    <div className='name-with-handle'>
      <span className='name'>{name}</span>
      <span className='handle'>@{handle}</span>
    </div>
  )
}


function Time({time}) {
  const timeString = moment(time).fromNow();
  return (
    <span className='time'>{timeString}</span> 
  )
}

function LikeButton({count}) {
  return (
    <span className='like-btn'>
      <i className='fa fa-heart like-btn' />
      <span className='like-count'>{count? count: null}</span>
    </span>
  )
}

function CommentButton() {
  return (
    <i className='fa fa-comment comment-btn'/>
  )
}

function RetweetButton({count}) {
  return (
    <span className='retweet-btn'>
      <i className='fa fa-retweet retweet-btn' />
      <span className='retweet-count'>{count? count: null}</span>
    </span>
  )
}

function MoreOptionsButton() {
  return (
    <i className='fa fa-ellipsis-h more-options-btn'/>
  )
}

ReactDOM.render(<Tweet tweet = {testTweet}/>, document.querySelector("#root"))
