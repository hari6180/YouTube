import React from "react";
import style from "./list.module.css";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
