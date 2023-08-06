import React from 'react'
import {GrHomeRounded} from 'react-icons/gr';
import {BsSearch} from 'react-icons/bs';
import {MdOutlineExplore} from 'react-icons/md';
import './NavContent.css'

export default function NavContent( {content} ) {
  const navContent = ['home','search','explore','reels','message','notification','add','profile'];  
  const contentIcon = { 
    'home':<GrHomeRounded/>,
    'search':<BsSearch/>,
    'explore':<MdOutlineExplore/>,
    'reels':0,
    'message':0,
    'notification':0,
    'add':0,
    'profile':0
  }
  
  console.log(content)
  return (
    <div>
      {contentIcon[content]}
      this is {content}
    </div>
  )
  
}
