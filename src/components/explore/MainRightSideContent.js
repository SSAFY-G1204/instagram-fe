import React from 'react'
import './MainRightSideContent.css';

export default function MainRightSideContent({right}) {
  if(right){
    return(
      <div className="_content_container">
        <div className="many_content_container">
          <div className="inner_square">
            <div className="inner_content">1st </div>
            <div className="inner_content">2nd</div>
          </div>
          <div className="inner_square">
            <div className="inner_content">3rd</div>
            <div className="inner_content">4th</div>
          </div>
        </div>
        <div className="long_content_container">
          long
        </div>
      </div>
    )    
  }
  return (
    <div className="_content_container">
      <div className="long_content_container">
        long
      </div>
      <div className="many_content_container">
        <div className="inner_square">
            <div className="inner_content">1st </div>
            <div className="inner_content">2nd</div>
          </div>
          <div className="inner_square">
            <div className="inner_content">3rd</div>
            <div className="inner_content">4th</div>
          </div>
      </div>
    </div>
  )
}
