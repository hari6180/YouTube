import React from "react";
import style from "./list.module.css";

const VideoItem = (props) => {
  return <h1>{props.video.snippet.title}</h1>;
};

export default VideoItem;
