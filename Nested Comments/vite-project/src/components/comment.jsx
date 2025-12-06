import React from 'react'

const Comment = ({key, comment, onCommentSubmit}) => {
  return (
    <div>
      <>
      <p>{comment.content}</p>
      <p></p>
      <p></p>
      </>
    </div>
  )
}

export default Comment