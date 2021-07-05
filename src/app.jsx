import "./app.css";
import Navbar from "./components/navbar/navbar";
import React, { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/videoList";
import VideoDetail from "./components/video_detail/videoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
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
        <VideoDetail videos={videos} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
