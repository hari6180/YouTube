import React from "react";
import style from "./comment.module.css";

const Comment = ({ comment: { snippet } }) => {
  return (
    <li className={style.comment}>
      <div className={style.img_wrap}>
        <img
          className={style.profile}
          src={snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="profile"
        />
      </div>
      <div className={style.text_wrap}>
        <h4 className={style.author}>{snippet.topLevelComment.snippet.authorDisplayName}</h4>
        <p className={style.text}>{snippet.topLevelComment.snippet.textOriginal}</p>
      </div>
    </li>
  );
};

export default Comment;
