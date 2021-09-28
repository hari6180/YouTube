import React from "react";
import style from "./comments.module.css";
import Comment from "../comment/comment";

const Comments = ({ commentsThread }) => {
  return (
    <ul className={style.comments}>
      {commentsThread.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
};

export default Comments;
