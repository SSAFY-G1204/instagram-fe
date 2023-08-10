import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='side__logo'>
      <img src='	https://fontmeme.com/images/instagram-new-logo.png' alt='/'/>
      </div>
      <div className='sidebar_icon'>
      <Link to ="/"style={{textDecoration:'none'}}>
      <button className='side__home'>
        <img src='https://pixlok.com/wp-content/uploads/2021/12/Instagram-Home-Icon-n3fd2.png'alt='/'/>
        홈
      </button>
      </Link>
      <Link to = "explore" style={{textDecoration:'none'}}>
      <button className='side__search'>
        <img src=' https://cdn-icons-png.flaticon.com/512/5948/5948534.png'alt='/'/>
        검색
      </button>
      </Link>
      <button className='side__compass'>
       <img src='https://pic.onlinewebfonts.com/thumbnails/icons_385899.svg' alt=''/>
        탐색탭 
      </button>
      <Link to = "reels"  style={{textDecoration:'none'}}>
      <button className='side__reels'>
        <img src=' https://cdn-icons-png.flaticon.com/512/5948/5948543.png'alt='/'/>
        릴스
      </button>
      </Link>
      <button className='side__message'>
        <img src='  https://cdn-icons-png.flaticon.com/512/3024/3024593.png'alt='/'/>
        메시지
      </button>
      <button className='side__search'>
        <img src=' https://cdn-icons-png.flaticon.com/512/11388/11388033.png'alt='/'/>
        알림
      </button>
      <Link to = 'newposter' style={{textDecoration:'none'}}>
      <button className='side__plus'>
        <img src='https://cdn-icons-png.flaticon.com/512/5948/5948495.png'alt='/'/>
        만들기
      </button>
      </Link>
      <Link to = 'profile' style={{textDecoration:'none'}}>
      <button className='side__profile'>
        <img src='https://ilyo.co.kr/contents/article/images/2023/0222/1677033656333071.jpg'alt='/'/>
        프로필
      </button>
      </Link>
    
      <div className='side__menu'>
      <button className='side_menu'>
        <img src='   https://cdn-icons-png.flaticon.com/512/7710/7710488.png 'alt='/'/>
        더보기
      </button>

      </div>


      </div>
      </div>
  )
}
