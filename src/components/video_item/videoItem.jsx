import React, { memo } from "react";
import style from "./item.module.css";

const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display, ViewComments }) => {
  const displayType = display === "list" ? style.list : style.grid;
  return (
    <li
      className={`${style.container} ${displayType}`}
      onClick={() => {
        onVideoClick(video);
        ViewComments(video.id);
      }}
    >
      <div className={style.video}>
        <img src={snippet.thumbnails.default.url} alt="thumbnail" className={style.thumbnail} />
        <div className={style.metadata}>
          <p className={style.vdtitle}>{snippet.title}</p>
          <p className={style.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
