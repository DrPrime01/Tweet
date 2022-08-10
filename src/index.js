import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Tweet({tweet}) {
  return (
    <div className='tweet'>
      <Avatar hash = {tweet.gravatar}/>
      <div className='content'>
        <NameWithHandle name = {tweet.author.name} handle = {tweet.author.handle}/><Time time = {tweet.timestamp}/>
        <Message test = {tweet.message}/>
        <div className='buttons'>
          <CommentButton />
          <LikeButton count = {tweet.likes}/>
          <RetweetButton count={tweet.retweets}/>
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  )
}

function Avatar({hash}) {
  let url = `https://gravatar.com/avatar/${hash}`
  return (
    <img src= {url}
    className='avatar'
    alt='avatar' />
  )
}

function Message({test}) {
  return (
    <div className='message'>
      {test}
    </div>
  )
}

function NameWithHandle({author}) {
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
    <span className='likeButton'>
      <i className='fa fa-heart like-btn' />
      {count > 0 &&
        <span className='like-count'>{count}</span>}
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
    <span className='retweetButton'>
      <i className='fa fa-retweet retweet-btn' />{getRetweetCount(count)}
    </span>
  )
}

function MoreOptionsButton() {
  return (
    <i className='fa fa-ellipsis-h more-options-btn'/>
  )
}

function getRetweetCount(count) {
  if (count > 0) {
    return (
      <span className='retweet-count'>{count}</span>
    );
  }
  else {
    return null;
  }
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
  timestamp: "2022-08-10 14:50:15"
}

ReactDOM.render(<Tweet tweet = {testTweet}/>, document.querySelector("#root"))
