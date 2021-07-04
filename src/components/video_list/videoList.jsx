import React from "react";
import style from "./list.module.css";
import VideoItem from "../video_item/videoItem";

const VideoList = (props) => {
  return (
    <ul>
      {props.videos && props.videos.map((video) => <VideoItem key={video.id} video={video} />)}
    </ul>
  );
};

export default VideoList;
