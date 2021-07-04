import "./app.css";
import Navbar from "./components/navbar/navbar";
import React, { useState } from "react";
import { useEffect } from "react";
import VideoList from "./components/video_list/videoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [keyword, setSearch] = useState("");

  const setKeyword = (name) => {
    console.log(name);
    setSearch(name);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCju9IgAmpxI2w-5Ng8tfPuBtJuis-aYGw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyCju9IgAmpxI2w-5Ng8tfPuBtJuis-aYGw`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, [keyword]);

  return (
    <>
      <div className="container">
        <Navbar onSearch={setKeyword} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
