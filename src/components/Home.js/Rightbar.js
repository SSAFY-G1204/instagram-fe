import React, { useState } from 'react'
import './Rightbar.css'
import { Link } from 'react-router-dom'

const suggestionsData = [
  {imgURL: 'https://pbs.twimg.com/media/EoeYdG1UYAEr8RB.jpg',userName : 'jjki', id:'1', following : true , relation : 'kko님 외 1명이 팔로우합니다'},
  {imgURL: 'https://blog.kakaocdn.net/dn/tE1Hz/btrVLvbR3ox/mMeiTnukJ5rrJdWIe3OXck/img.jpg',userName : 'nmn577', id:'2',following : true, relation : 'hkhk님 외 3명이 팔로우합니다'},
  {imgURL: 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg',userName : 'junj', id:'3',following : true, relation : 'mm님 외 5명이 팔로우합니다'},
  {imgURL: 'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/01/b0628b59-8739-4e99-b148-69559d1d6429.jpg',userName : 'jihyo_458', id:'4',following : true, relation : 'lll님이 팔로우합니다'},
  {imgURL: 'https://www.fnnews.com/resource/media/image/2022/07/26/202207261651441499_l.jpg',userName : 'hyun__y', id:'5',following : true, relation : 'youu이 팔로우합니다'},
]


export default function Rightbar() {
  const [following, setFollowing] = useState(true)

  const handleClickFollowingBtn= (id) =>{
    const newFollow = suggestionsData.map((data)=> {
      if(data.id === id ){
        data.following = !data.following
      }
      return data
      
    })
    setFollowing(newFollow)
  }

  return (
    <div className='rightBar'>
        <div className='right-user-profile'>
          <Link to = 'profile'>
          <img src="https://ilyo.co.kr/contents/article/images/2023/0222/1677033656333071.jpg" alt ='/'/>
          </Link>
          <div className = 'right-user-info'>
          <Link to = 'profile'>
            <a href ='/'target="_blank">oo33</a>
            </Link>
            <span>박해인</span>
          </div>
          <Link to = 'login'>
          <button className='right-user-button'>전환</button>
          </Link>
        </div>
        <div className='right-recommand'>
          <span>회원님을 위한 추천</span>
          <a href ='/'target="_blank">모두보기</a>
        </div>
        <div className='suggestions-content'>
          {suggestionsData.map((suggestion)=>(
            <div className='suggestion' key={suggestion.id}>
              <div className='suggestion__avatar'>
                <img src={suggestion.imgURL} alt={suggestion.name} />
                <div className='suggestion__info'>
                  <a href='/'>{suggestion.userName}</a>
                  <span>{suggestion.relation}</span>
                  </div>
                  <button  className='followtogglebtn ' onClick={()=>handleClickFollowingBtn(suggestion.id)}>{suggestion.following ? '팔로우': '팔로잉' }</button>
                  </div>
            </div>
          ))}
        </div>
    </div>
  )
}
