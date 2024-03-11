import React from 'react'
import Comment from './Comment'

function CommentList(props) {
  return (
    <div>
        <Comment name={"MayKim"} comment={"This is my first comment in chapter5"} />
        <Comment name={"Chuchu"} comment={"This is my second comment in chapter5"} />

    </div>
  )
}

export default CommentList