import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSiderbar from './VideoSiderbar';





function Videos({ url, likes, shares, messages, channel, description, song }) {
    const VideoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const handleVideoPress = () => {
        if (playing) {
            VideoRef.current.pause()
            setPlaying(false)
        }
        else {
            VideoRef.current.play()
            setPlaying(true)
        }



    }
    return (
        <div className="video">

            <video className="video_player" loop
                ref={VideoRef}
                onClick={handleVideoPress}



                ref={VideoRef}
                src={url}
            >
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSiderbar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Videos
