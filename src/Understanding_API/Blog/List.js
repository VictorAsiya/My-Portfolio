import React from 'react'
import * as SC from '../../style'

function List({myBlog}) {
  return (
    <div>
      {myBlog.map((myBlog)=>(
        <div key={myBlog.id}>
          <h1 style={{ whiteSpace: 'pre-line' }}>{myBlog.name}</h1>
          <p>{myBlog.about}</p>
          <SC.Button>{myBlog.learn}</SC.Button>
        </div>
      ))}
    </div>
  )
}

export default List
