import React from "react";
import style from "./item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => {
  return (
    <li onClick={() => onVideoClick(video)}>
      <img src={snippet.thumbnails.default.url} alt="thumbnail" className={style.thumbnail} />
      <div>
        <p className={style.vdtitle}>{snippet.title}</p>
        <span className={style.channel}>{snippet.channelTitle}</span>
      </div>
    </li>
  );
};

export default VideoItem;
