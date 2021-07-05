import React from "react";
import style from "./videoDetail.module.css";

const VideoDetail = ({ video }) => {
  const base = "https://www.youtube.com/embed/";
  const link = base + video.id;
  //props.videos.find((video) => video.id == select);

  return (
    <article>
      <iframe
        className={style.video}
        type="text/html"
        src={link}
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <h2>{video.title}</h2>
    </article>
  );
};

export default VideoDetail;
