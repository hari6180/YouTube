import React from "react";
import style from "./list.module.css";
import VideoItem from "../video_item/videoItem";

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
      ))}
    </ul>
  );
};

export default VideoList;
