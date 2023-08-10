import React from 'react'
import { useState } from 'react'
import './CommentSection.css'
import LikeButton from './LikeButton'

export default function CommentSection() {
  const [value, setValue] = useState("");
  const [nextId,setNextId] = useState(1);
  const [comments,setComments] = useState([])

  const insertComment = text =>{
    if (text !== ""){
      const comment = {
        id : nextId,
        text
      };
      setComments(comments =>comments.concat(comment));
      setNextId(nextId => nextId+1);
    }
  }
  console.log(comments)
  const onChange = (e) =>{
    setValue(e.target.value);
  }

  const onSubmit =(e)=>{
    e.preventDefault();
    insertComment(value);
    setValue("")
  }
  return (
  
    <div className='commentsection'>
       {comments.map(comment => 
      <div className='comment__item' key={comment.id}>
       {comment.text}
      <LikeButton/>
      </div>
       )}
       <a className='post__all_comments' href='/' target='_blank'>댓글 53개 모두 보기</a>
      <form className='post__comment' onSubmit={onSubmit} >
        <input placeholder='댓글달기...' value={value} onChange={onChange} >
        </input>
      </form>
    </div>
  )
}
