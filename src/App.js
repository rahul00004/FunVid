
import './App.css';
import VideoFooter from './VideoFooter';
import Video from './Video.js'
import axios from './axios'
import VideoSiderbar from './VideoSiderbar';
import React, { useState, useEffect } from 'react'
import Nav from './Nav'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/post")
      setVideos(response.data);

    }


    fetchPosts();

  }, [])
  console.log(videos);
  return (
    <div className="App">
      <Nav />

      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares }) => (

          <Video
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares}


          />
        )


        )}


      </div>
    </div>
  );
}

export default App;
