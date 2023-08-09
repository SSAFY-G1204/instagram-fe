import React, { useState } from 'react';
import './reelsItem.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { BsSave } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
export default function ReelsItem({ video }) {
  const [likes, setLikes] = useState(video.likes);
  const [liked, setLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const likeBtn = liked ? (
    <AiFillHeart color="red" fontSize="23px" />
  ) : (
    <AiOutlineHeart fontSize="23px" />
  );

  return (
    <div className="reel-item">
      <video src={video.url} controls />
      <div className="reel-btn">
        <div className="like_btn">
          <button onClick={handleLike} className="btn">
            {likeBtn}
          </button>
          <div className="text">{likes}</div>
        </div>
        <div className="message_btn btn">
          <HiOutlinePaperAirplane fontSize="23px" />
        </div>
        <div className="save_btn btn">
          <BsSave fontSize="23px" />
        </div>
        <div className="more_btn btn">
          <FiMoreHorizontal fontSize="23px" />
        </div>
        <div className="profile_btn btn">
          <CgProfile fontSize="23px" />
        </div>
      </div>
      <div className="reel-info">
        <div>
          <CgProfile fontSize="23px" /> 
          <span>
            {showMore ? video.description : video.description.slice(0, 10)}
          </span>
          {video.description.length > 10 && (
            <button onClick={handleShowMore}>{showMore ? '' : '더보기'}</button>
          )}
        </div>
      </div>
    </div>
  );
}
