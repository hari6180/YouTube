import "./app.css";
import Navbar from "./components/navbar";
import React, { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyArLCzfD95qK4vKvLn-y9Vv1qlE91wa9y0&key=AIzaSyArLCzfD95qK4vKvLn-y9Vv1qlE91wa9y0&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyArLCzfD95qK4vKvLn-y9Vv1qlE91wa9y0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
