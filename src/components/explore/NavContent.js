import React, { useState,useRef,useEffect } from 'react'
import { IconContext } from 'react-icons';
import {GrHomeRounded} from 'react-icons/gr';
import {BsSearch} from 'react-icons/bs';
import {MdOutlineExplore} from 'react-icons/md';
import {BiMoviePlay} from 'react-icons/bi';
import {PiPaperPlaneTilt} from 'react-icons/pi';
import {AiOutlineHeart} from 'react-icons/ai';
import {MdOutlineAddBox} from 'react-icons/md';
import Profile  from './Profile';
import './NavContent.css'

export default function NavContent( {content} ) {
  const [larger, setLarger] = useState(false);

  const logoRef = useRef();
  const contentIcon = { 
    '홈':<GrHomeRounded className={larger && `search`}/>,
    '검색':<BsSearch className={larger && `search`}/>,
    '탐색 탭':<MdOutlineExplore className={larger && `search`}/>,
    '릴스':<BiMoviePlay className={larger && `search`}/>,
    '메세지':<PiPaperPlaneTilt className={larger && `search`}/>,
    '알림':<AiOutlineHeart className={larger && `search`}/>,
    '만들기':<MdOutlineAddBox className={larger && `search`}/>,
    '프로필':<Profile className={larger && `search`}/>
  }

  useEffect(()=>{
    const makeLarge = ()=>{
      setLarger(true);
    } 
    const makeSmall=()=>{
      setLarger(false);
    }
    const currentNode = logoRef.current;
    console.log(logoRef);
    if(logoRef && logoRef.current){
      currentNode.onmouseover=makeLarge;
      currentNode.onmouseout=makeSmall;

    }
  },[])

  
  return (
    <div className="contentBox" ref={logoRef}>
      <div className="nav_content">
        {contentIcon[content]} &nbsp;
        {content}
      </div>
    </div>
  )
  
}
