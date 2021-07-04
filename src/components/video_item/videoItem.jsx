import React from "react";
import style from "./item.module.css";

const VideoItem = (props) => {
  return (
    <li>
      <img
        src={props.video.snippet.thumbnails.default.url}
        alt="thumbnail"
        className={style.thumbnail}
      />
      <div>
        <p className={style.vdtitle}>{props.video.snippet.title}</p>
        <span className={style.channel}>{props.video.snippet.channelTitle}</span>
      </div>
    </li>
  );
};

export default VideoItem;
