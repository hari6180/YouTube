import React from "react";
import style from "./comment.module.css";

const Comment = ({ comment: { snippet } }) => {
  return (
    <li>
      <img src={snippet.topLevelComment.snippet.authorProfileImageUrl} alt="profile" />
      <h6>{snippet.topLevelComment.snippet.authorDisplayName}</h6>
      <p>{snippet.topLevelComment.snippet.textOriginal}</p>
    </li>
  );
};

export default Comment;
