import React from 'react'
import MainRightSideContent from './MainRightSideContent';
import MainLeftSideContent from './MainLeftSideContent';
import './MainContent.css';

export default function MainContent() {
  return (
    <div className="main_content_container">
      <MainRightSideContent right={true}/>
      <MainRightSideContent right={false}/>
    </div>
  )
}
