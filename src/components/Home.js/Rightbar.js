import React, { useState } from 'react'
import './Rightbar.css'

const suggestionsData = [
  {imgURL: 'https://pbs.twimg.com/media/EoeYdG1UYAEr8RB.jpg',userName : 'jjki', id:'1', following : true , relation : 'kko님 외 1명이 팔로우합니다'},
  {imgURL: 'https://s.gae9.com/trend/fce2a623a8b2e316.orig',userName : 'nmn577', id:'2',following : true, relation : 'hkhk님 외 3명이 팔로우합니다'},
  {imgURL: 'https://s.gae9.com/trend/fce2a623a8b2e316.orig',userName : 'junj', id:'3',following : true, relation : 'mm님 외 5명이 팔로우합니다'},
  {imgURL: 'https://s.gae9.com/trend/fce2a623a8b2e316.orig',userName : 'jihyo_458', id:'4',following : true, relation : 'lll님이 팔로우합니다'},
  {imgURL: 'https://s.gae9.com/trend/fce2a623a8b2e316.orig',userName : 'hyun__y', id:'5',following : true, relation : 'youu이 팔로우합니다'},
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
          <img src="https://ilyo.co.kr/contents/article/images/2023/0222/1677033656333071.jpg" alt ='/'/>
          <div className = 'right-user-info'>
            <a href ='/'target="_blank">oo33</a>
            <span>최지현</span>
          </div>
          <button className='right-user-button'>전환</button>
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
