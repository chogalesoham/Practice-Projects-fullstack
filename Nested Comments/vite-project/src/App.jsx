import React from 'react'
import NestedComments from './components/nested-comments'
import Data from "./data/comment.json"

const App = () => {
  return (
    <main>
      <h1>Nested Comment Systen</h1>
      <NestedComments comments={Data}
        // onSubmit={() => { }}
        // onEdit={() => { }}
        // onDelete={() => { }}
        // onUpvote={() => { }}
        // onDownvote={() => { }}
      />
    </main>
  )
}

export default App