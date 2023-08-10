import React from 'react';
import NavContent from './NavContent';
import MainContent from './MainContent';
import './Explore.css';

export default function Explore() {
const navContent = ['홈','검색','탐색 탭','릴스','메세지','알림','만들기','프로필'];

  return (
    <div className="frame">
      <nav className="sidebar_container">
      <div className="nav_logo_container">
        <img alt="Instagram logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/128px-Instagram_logo.svg.png" className="nav_logo"/>
      </div>
      

        {navContent.map((content)=>(
          <NavContent content={content} key={navContent.indexOf(content)}/>
        ))}
      </nav>
      <section className="content_container">
        <MainContent/>
      </section>
    </div>
  )
}
