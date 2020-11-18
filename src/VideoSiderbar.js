import React, { useState } from 'react'
import './VideoSiderbar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
function VideoSiderbar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false)

    return (

        <div className="VideoSidebar">
            <div className="VideoSidebar_buttons">
                {liked ? (<FavoriteIcon fontSize="large"
                    onClick={(e) => setLiked(false)}
                />


                ) : (
                        <FavoriteBorderIcon fontSize='large'
                            onClick={(e) => setLiked(true)} />
                    )}



                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="VideoSidebar_buttons">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="VideoSidebar_buttons">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
            <div className="VideoSidebar_buttons">
            </div>
        </div>
    )
}

export default VideoSiderbar
