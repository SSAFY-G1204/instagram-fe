import React from 'react';
import NavContent from './NavContent';
import './Explore.css';

export default function Explore() {
const navContent = ['home','search','explore','reels','message','notification','add','profile'];

  return (
    <div className="frame">
      <nav className="sidebar_container">
        {navContent.map((content)=>(
          <NavContent content={content} key={navContent.indexOf(content)}/>
        ))}
      </nav>
      <section className="content_container">
        <span>content1</span>
        <span>content2</span>
        <span>content3</span>
        <span>content4</span>
      </section>
    </div>
  )
}
