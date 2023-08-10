import React, { useState } from 'react'
import './LikeButton.css'
export default function LikeButton() {
    const [liked, setLiked] = useState(false)

    const LikeClick=()=>{
        setLiked(!liked)
    }
    return (
    <div>
     <button className='heart' onClick={LikeClick}>
        <img src={liked?'https://cdn-icons-png.flaticon.com/512/833/833472.png':'https://cdn-icons-png.flaticon.com/512/11388/11388033.png'  } alt='/'/>
        </button>
    </div>
  )
}
