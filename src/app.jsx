import { React, useState, useEffect, useCallback } from "react";
import style from "./app.module.css";
import Navbar from "./components/navbar/navbar";
import VideoList from "./components/video_list/videoList";
import VideoDetail from "./components/video_detail/videoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [commentsThread, setCommentsThread] = useState([]);

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

  const comments = useCallback(
    (videoId) => {
      youtube
        .comments(videoId) //
        .then((comment) => {
          setCommentsThread(comment);
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
              <VideoDetail video={selectedVideo} commentsThread={commentsThread} />
            </div>
          )}
          <div className={style.list}>
            <VideoList
              videos={videos}
              onVideoClick={selectVideo}
              ViewComments={comments}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
