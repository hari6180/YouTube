import React from "react";
import style from "./list.module.css";
import VideoItem from "../video_item/videoItem";

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={style.videos}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
      ))}
    </ul>
  );
};

export default VideoList;
