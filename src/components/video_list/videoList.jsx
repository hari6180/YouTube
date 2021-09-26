import React, { memo } from "react";
import style from "./list.module.css";
import VideoItem from "../video_item/videoItem";

const VideoList = memo(({ videos, onVideoClick, display, ViewComments }) => {
  return (
    <ul className={style.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          ViewComments={ViewComments}
          display={display}
        />
      ))}
    </ul>
  );
});

export default VideoList;
