import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "May Kim",
    comment: "Hi! This is May",
  },
  {
    name: "Mr.Yoo",
    comment: "Learning React is fun!",
  },
  {
    name: "Chuchu",
    comment: "I love you",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
