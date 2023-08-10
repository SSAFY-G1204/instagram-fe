import React from 'react'
import Sidebar from './Sidebar'
import Story from './Story/Story'
import Rightbar from './Rightbar'
import Post from './Feed/Post'
import './Homepage.css'

export default function Hompage() {
  return (
    <div>
        <Sidebar/>
        <div className = 'home_main'>       
        <Story/>
        <Post/>
        <Post/>
        </div>
        <Rightbar></Rightbar>
  
    </div>
  )
}
