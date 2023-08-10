import React, { useState } from 'react';
import './Story.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';

const storiesData = [
  { imgURL: 'https://s.gae9.com/trend/fce2a623a8b2e316.orig', userName: 'hyo7246', id: '1', click: false },
  { imgURL: 'https://thumb.mtstarnews.com/06/2023/04/2023041015460947488_1.jpg', userName: 'lia_i', id: '2', click: false },
  { imgURL: 'https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg', userName: 'kve467', id: '3', click: false },
  { imgURL: 'https://image.xportsnews.com/contents/images/upload/article/2019/1126/mb_1574758945982699.jpg', userName: 'sora4487', id: '4', click: false },
  { imgURL: 'https://www.ekn.kr/mnt/file/202302/2023021401000757200033371.jpg', userName: 'lavieeefdg', id: '5', click: false },
  { imgURL: 'https://blog.kakaocdn.net/dn/cvaMKF/btrHqnHffY2/T3R1Pd8KoFlwpbfTtwusY1/img.jpg', userName: 'ewadcazo', id: '6', click: false },
  { imgURL: 'https://www.youthdaily.co.kr/data/photos/20210206/art_16127521655378_0f63f2.jpg', userName: 'h_aapy', id: '7', click: false },
  { imgURL: 'https://i.namu.wiki/i/jpOl12GyBhvr5xQQ3Gbl4vDCSU52NlKAs11rnHdpVcUNb-Hjpst_r3aLDdA-VDJrBmUJJhKvBbXu47br2UQCRg.webp', userName: 'miu_u', id: '8', click: false },
  { imgURL: 'https://images.chosun.com/resizer/nk1JUh99MOzOpQcu36kMNecFaf0=/530x662/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/U6K5VNPR4JKFYLC4E6B3NUE3UE.jpg', userName: 'eta', id: '9', click: false },
];

export default function Story() {
  const [stories, setStories] = useState(storiesData);
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  const handleStoryClick = (id) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id ? { ...story, click: !story.click } : story
      )
    );
  };

  return (
    <Slider {...settings} className='stories'>

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
    </Slider>
  );
}