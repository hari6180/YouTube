import style from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import React, { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/videoList";
import VideoDetail from "./components/video_detail/videoDetail";
import { useCallback } from "react";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <>
      <div className={style.container}>
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
