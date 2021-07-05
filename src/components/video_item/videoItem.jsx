import React from "react";
import style from "./item.module.css";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === "list" ? style.list : style.grid;
  return (
    <li className={`${style.container} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={style.video}>
        <img src={snippet.thumbnails.default.url} alt="thumbnail" className={style.thumbnail} />
        <div className={style.metadata}>
          <p className={style.vdtitle}>{snippet.title}</p>
          <p className={style.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
