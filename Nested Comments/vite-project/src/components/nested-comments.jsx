import React, { useState } from 'react'
import "./styles.css"
import useCommentTree from '../hooks/useCommentTree'
import Comment from './comment'

const NestedComments = ({
  comments,
  //   onSubmit={() => { }},
  // onEdit = {() => { }},
  // onDelete = {() => { }},
}) => {

  const [comment, setComment] = useState("")
  const { comments: commentsData } = useCommentTree(comments)

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleReply = () => {

  }

  const handleSubmit = () => {
    if (comment) {
      //logic

      setComment("")
    }
  }

  return (
    <>
      <div>
        <textarea onChange={handleChange} value={comment} rows={3} cols={50} placeholder='Add a new comment...' />
        <button onClick={handleSubmit}>Add Comment</button>
      </div>

      {
        commentsData.map((item) => (
          <Comment key={item.id} comment={item} onCommentSubmit={handleReply} />
        ))
      }
    </>

  )
}

export default NestedComments