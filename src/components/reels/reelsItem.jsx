import React, { useState, useRef } from 'react';
import './reelsItem.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { BsSave } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { PiSpeakerHighLight, PiSpeakerSlashThin } from 'react-icons/pi';
import { FaMusic } from 'react-icons/fa';
export default function ReelsItem({ video }) {
  const [likes, setLikes] = useState(video.likes);
  const [liked, setLiked] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const handleMuteClick = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

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

  const muteBtn = isMuted ? (
    <PiSpeakerSlashThin fontSize="23px" />
  ) : (
    <PiSpeakerHighLight fontSize="23px" />
  );

  const likeBtn = liked ? (
    <AiFillHeart color="red" fontSize="23px" />
  ) : (
    <AiOutlineHeart fontSize="23px" />
  );

  return (
    <div className="reel-item">
      <video
        ref={videoRef}
        src={video.url}
        controls={false}
        onClick={handleVideoClick}
      ></video>
      <button onClick={handleMuteClick} className="btn mute_btn">
        {muteBtn}
      </button>
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
          <span className="fallow">{video.channelId} - 팔로우</span>
          <div className="description" onClick={handleShowMore}>
            {showMore ? video.description : video.description.slice(0, 10)}
            {video.description.length > 10 && (
              <button onClick={handleShowMore}>
                {showMore ? '' : '더보기'}
              </button>
            )}
          </div>
          <FaMusic fontSize="17px" /> {video.channelId} - 원본 비디오
        </div>
      </div>
    </div>
  );
}
