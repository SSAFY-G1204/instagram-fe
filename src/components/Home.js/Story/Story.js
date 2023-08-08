import React, { useState } from 'react';
import './Story.css';

const storiesData = [
  { imgURL: 'https://s.gae9.com/trend/fce2a623a8b2e316.orig', userName: '홍길동', id: '1', click: false },
  { imgURL: 'https://thumb.mtstarnews.com/06/2023/04/2023041015460947488_1.jpg', userName: '장원영', id: '2', click: false },
  { imgURL: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg', userName: 'k', id: '3', click: false },
  { imgURL: 'https://image.xportsnews.com/contents/images/upload/article/2019/1126/mb_1574758945982699.jpg', userName: 'hk', id: '4', click: false },
  { imgURL: 'https://www.ekn.kr/mnt/file/202302/2023021401000757200033371.jpg', userName: 'hoh', id: '5', click: false },
  { imgURL: 'https://blog.kakaocdn.net/dn/cvaMKF/btrHqnHffY2/T3R1Pd8KoFlwpbfTtwusY1/img.jpg', userName: 'ive', id: '6', click: false },
  { imgURL: 'https://www.ekn.kr/mnt/file/202302/2023021401000757200033371.jpg', userName: 'hoh', id: '7', click: false },
];

export default function Story() {
  const [stories, setStories] = useState(storiesData);

  const handleStoryClick = (id) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id ? { ...story, click: !story.click } : story
      )
    );
  };

  return (
    <div className='stories'>
      {stories.map((story) => (
        <div className='story' key={story.id}>
          <div
            className={`story__avatar ${story.click ? 'active' : ''}`}
            onClick={() => handleStoryClick(story.id)}
          >
            <img className='story__picture' src={story.imgURL} alt={story.userName} />
          </div>
          <div className='story__user'>{story.userName}</div>
        </div>
      ))}
    </div>
  );
}