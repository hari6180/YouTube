import React from "react";
import Comments from "../comments/comments";
import style from "./videoDetail.module.css";

const VideoDetail = ({ video, video: { snippet }, commentsThread }) => {
  return (
    <section className={style.detail}>
      <iframe
        className={style.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2 className={style.title}>{snippet.title}</h2>
      <h3 className={style.channel}>{snippet.channelTitle}</h3>
      <pre className={style.description}>{snippet.description}</pre>
      <Comments commentsThread={commentsThread} />
    </section>
  );
};

export default VideoDetail;
