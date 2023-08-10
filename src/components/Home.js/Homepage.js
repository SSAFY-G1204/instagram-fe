import React from 'react'
import Sidebar from './Sidebar'
import Story from './Story/Story'
import Rightbar from './Rightbar'
import Post from './Feed/Post'
import './Homepage.css'

export default function Homepage() {
  return (
    <div>
        <Sidebar/>
        <div className = 'home_main'>       
        <Story/>
        <Post/>
        </div>
        <Rightbar></Rightbar>
  
    </div>
  )
}
