import React, { useState, useRef, useEffect } from 'react';
import SideBar from './SideBar/SideBar';
import './reels.css';
import ReelsItem from './reelsItem';

export default function Reels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [videos, setVideos] = useState([
    {
      url: 'https://player.vimeo.com/progressive_redirect/playback/689028305/rendition/540p?loc=external&oauth2_token_id=57447761&signature=12deae802fb13d2014f286eedbd89a68f6329f921b434580ed42be462f3b0577',
      likes: 10,
      description: 'Description for video 1. This is a sample video.',
      channelId : 'abcde'
    },
    {
      url: 'https://player.vimeo.com/progressive_redirect/playback/845907787/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4959e9d81fda39904ddec1f332b88086b9f0090d95c7f7a3223e0fd5b77af5a8',
      likes: 20,
      description: 'Description for video 2. This is another sample video.',
      channelId : 'fghij'
    },{
      url: 'https://player.vimeo.com/progressive_redirect/playback/689028305/rendition/540p?loc=external&oauth2_token_id=57447761&signature=12deae802fb13d2014f286eedbd89a68f6329f921b434580ed42be462f3b0577',
      likes: 10,
      description: 'Description for video 1. This is a sample video.',
      channelId : 'abcde'
    },
    {
      url: 'https://player.vimeo.com/progressive_redirect/playback/845907787/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4959e9d81fda39904ddec1f332b88086b9f0090d95c7f7a3223e0fd5b77af5a8',
      likes: 20,
      description: 'Description for video 2. This is another sample video.',
      channelId : 'fghij'
    },{
      url: 'https://player.vimeo.com/progressive_redirect/playback/689028305/rendition/540p?loc=external&oauth2_token_id=57447761&signature=12deae802fb13d2014f286eedbd89a68f6329f921b434580ed42be462f3b0577',
      likes: 10,
      description: 'Description for video 1. This is a sample video.',
      channelId : 'abcde'
    },
    {
      url: 'https://player.vimeo.com/progressive_redirect/playback/845907787/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4959e9d81fda39904ddec1f332b88086b9f0090d95c7f7a3223e0fd5b77af5a8',
      likes: 20,
      description: 'Description for video 2. This is another sample video.',
      channelId : 'fghij'
    },{
      url: 'https://player.vimeo.com/progressive_redirect/playback/689028305/rendition/540p?loc=external&oauth2_token_id=57447761&signature=12deae802fb13d2014f286eedbd89a68f6329f921b434580ed42be462f3b0577',
      likes: 10,
      description: 'Description for video 1. This is a sample video.',
      channelId : 'abcde'
    },
    {
      url: 'https://player.vimeo.com/progressive_redirect/playback/845907787/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4959e9d81fda39904ddec1f332b88086b9f0090d95c7f7a3223e0fd5b77af5a8',
      likes: 20,
      description: 'Description for video 2. This is another sample video.',
      channelId : 'fghij'
    },
  ]);

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="Reels" ref={containerRef} onWheel={handleScroll}>
        <SideBar className="SideBar" />
        {/* <div className="Reels" ref={containerRef}>
        {videos.map((video, index) => (
          <ReelsItem key={index} video={video} className="ReelsItem" />
        ))}
      </div> */}
        <div className="ReelsItems" style={{ top: `-${currentIndex * 100}vh` }}>
          {videos.map((video, index) => (
            <ReelsItem key={index} video={video} />
          ))}
        </div>
      </div>
    </>
  );
}
