import React, { useState } from 'react'
import './Post.css'
import LikeButton from './LikeButton'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import CommentSection from './CommentSection'

export default function Post() {
  const [save,setSave] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const bookmarkClick =()=>{
    setSave(!save)
  }


  return (
    <div className='post'>
      <div className='post_header'>
        <div className='post_profile'>
        <a href='/' target='_blank' className='post__avatar'>
          <img src='https://newsimg.sedaily.com/2019/09/04/1VO45O5N53_3.jpg' alt='userimg'/>
          </a>
          <a href='/' target='_blank' className='post__userName'>ilykk_u2</a>
          <span className='post__dot'>·</span>
          <span className='post__time'>30분</span>
        </div>
        <button className='post__more-options'>
          <img src='https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-512.png' alt='more-options'/>
        </button>
      </div>


    <Slider {...settings} >
    <div className='post__content'>
      <img src="https://static-storychat.pstatic.net/2020/4/26/44/2484344_fcb8lj1l5n223.jpeg?type=rsc5" alt='postcontent'/>
    </div>
    <div className='post__content'>
      <img src="https://static-storychat.pstatic.net/2020/4/26/44/2484344_fcb8j9licief1.jpeg?type=rsc5" alt='postcontent'/>
    </div>
    <div className='post__content'>
      <img src="https://static-storychat.pstatic.net/2020/4/26/44/2484344_fcb8j6lne1m91.jpeg?type=rsc5" alt='postcontent'/>
    </div>
    <div className='post__content'>
      <img src='https://i.pinimg.com/originals/99/7a/9b/997a9b2cd93277769ca9b3d109bceed7.jpg' alt='postcontent'/>
    </div>
    </Slider>


    <div class = "post__footer">
      <div class= "post__buttons">
        <div className='post__left_button'>
        <LikeButton/>
        <button className='post__button'>
        <img src='https://cdn-icons-png.flaticon.com/512/1947/1947247.png ' alt='/'/>
        </button>
        <button className='post__send_button'>
        <img src='    https://cdn-icons-png.flaticon.com/512/3024/3024593.png ' alt='/'/>
        </button>
      </div>
      <div className='post__right_button'>
        <button className='post__bookmark_button' onClick={bookmarkClick}>
          <img src={save?'https://cdn-icons-png.flaticon.com/512/9511/9511671.png':'https://cdn-icons-png.flaticon.com/512/9511/9511721.png '}alt=''/>
        </button>
      </div>
      </div>
      
      <div className='post__infos'>
        <span className='post__likes'>
          <a href='/' target='_blank'>unoo21</a>님&nbsp;
          <a href='/' target='_blank'>여러명</a>이 좋아합니다
          </span>
        <div className='post__description'>
          <span className='post__name'>
            <a href='/' target='_blank'>ilykk_u2</a>&nbsp;
            짱구는 못말려 
          </span>
          <details >
            <summary>더 보기 </summary>
              <p><br/>#짱구 #짱구는 못말려 </p> 
          </details>
        </div>
      </div>
      <CommentSection/>
    </div>
    <div className='division__line'></div>
    




    <div className='post_header'>
        <div className='post_profile'>
        <a href='/' target='_blank' className='post__avatar'>
          <img src='https://d1bg8rd1h4dvdb.cloudfront.net/upload/imgServer/storypick/editor/2020061716450906588.jpg' alt='userimg'/>
          </a>
          <a href='/' target='_blank' className='post__userName'>jdg</a>
          <span className='post__dot'>·</span>
          <span className='post__time'>1시간</span>
        </div>
        <button className='post__more-options'>
          <img src='https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-512.png' alt='more-options'/>
        </button>
      </div>


    <Slider {...settings} >
    <div className='post__content'>
      <img src="https://img2.sbs.co.kr/img/sbs_cms/WE/2023/06/15/X8t1686794572182.jpg" alt='postcontent'/>
    </div>
    <div className='post__content'>
      <img src="https://img2.sbs.co.kr/img/sbs_cms/WE/2023/06/08/8Nc1686206517765-666-968.jpg" alt='postcontent'/>
    </div>
    <div className='post__content'>
      <img src="https://www.behindpress.com/news/photo/202307/39571_56025_4139.png" alt='postcontent'/>
    </div>
    </Slider>


    <div class = "post__footer">
      <div class= "post__buttons">
        <div className='post__left_button'>
        <LikeButton/>
        <button className='post__button'>
        <img src='https://cdn-icons-png.flaticon.com/512/1947/1947247.png ' alt='/'/>
        </button>
        <button className='post__send_button'>
        <img src='    https://cdn-icons-png.flaticon.com/512/3024/3024593.png ' alt='/'/>
        </button>
      </div>
      <div className='post__right_button'>
        <button className='post__bookmark_button' onClick={bookmarkClick}>
          <img src={save?'https://cdn-icons-png.flaticon.com/512/9511/9511671.png':'https://cdn-icons-png.flaticon.com/512/9511/9511721.png '}alt=''/>
        </button>
      </div>
      </div>
      
      <div className='post__infos'>
        <span className='post__likes'>
          <a href='/' target='_blank'>jihyo</a>님&nbsp;
          <a href='/' target='_blank'>여러명</a>이 좋아합니다
          </span>
        <div className='post__description'>
          <span className='post__name'>
            <a href='/' target='_blank'>jdg</a>&nbsp;
            악귀
          </span>
          <details >
            <summary>더 보기 </summary>
              <p><br/>#김태리 #오정세 #홍경 </p> 
          </details>
        </div>
      </div>
      <CommentSection/>
    </div>
    <div className='division__line'></div>
    </div>
  )
}
