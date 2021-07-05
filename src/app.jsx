import style from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import React, { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/videoList";
import VideoDetail from "./components/video_detail/videoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <div className="container">
        <Navbar onSearch={search} />
        <section className={style.content}>
          {selectedVideo && (
            <div className={style.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={style.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
