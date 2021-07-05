import React from "react";

const VideoDetail = (props) => {
  const base = "https://www.youtube.com/embed/";
  const select = props.videos.id;
  const link = base + select;
  //props.videos.find((video) => video.id == select);

  return (
    <article>
      <iframe type="text/html" src={link} frameborder="0" allowFullScreen="true"></iframe>
      <h2>{props.videos.title}</h2>
    </article>
  );
};

export default VideoDetail;
