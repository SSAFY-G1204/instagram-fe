import React from 'react';
import './index.css';

export default function JoinPage() {
  return (
    <div className="joinPageContainer">
      {/* 내용 부분 */}
      <div className="contentsContainer">
        <div className="contentsSubContainer">
          {/* 입력 및 버튼 부분 */}
          <div className="instagramContainer">
            <div className="instagramContainer1">
              <div className="logoContainer">
                <img
                  className="logoImage"
                  src={require("../images/img_logo.png")}
                  alt="로고 이미지"
                />
              </div>
              <div className='descriptionContainer'>
                <span className='descriptionText'>친구들의 사진과 동영상을 보려면 가입하세요.</span>
              </div>
              <div className="facebookLoginContainer">
                <img
                  className="facebookLoginIcon"
                  src={require("../images/ic_facebook.png")}
                  alt="페이스북 아이콘"
                />
                <a
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522xfvzml112wvbs19syplpz1pb9tpsg5kq49w4gmu5svik1fz92p3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Daf1721a4-bffc-4a97-b86b-fe0549987a8a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522xfvzml112wvbs19syplpz1pb9tpsg5kq49w4gmu5svik1fz92p3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"
                  className="fackbookLoginText"
                >
                  Facebook으로 로그인
                </a>
              </div>
              <div className="orContainer">
                <div className="leftLine"></div>
                <span className="orText">또는</span>
                <div className="rightLine"></div>
              </div>
              <div className="phoneOrEmailInputContainer">
                <input
                  className="phoneOrEmailInputBox"
                  type="text"
                  placeholder="휴대폰 번호 또는 이메일 주소"
                />
              </div>
              <div className="nameInputContainer">
                <input
                  className="nameInputBox"
                  type="text"
                  placeholder="성명"
                />
              </div>
              <div className="userNameInputContainer">
                <input
                  className="userNameInputBox"
                  type="text"
                  placeholder="사용자 이름"
                />
              </div>
              <div className="passwordInputContainer">
                <input
                  className="passwordInputBox"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="noticeContainer">
                <span className="noticeText">
                저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. 
                </span>
                <a className='moreText' href='https://www.facebook.com/help/instagram/261704639352628'>더 알아보기</a>
              </div>
              <div className="joinButtonContainer">
                <span className="joinText">가입</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 푸터 */}
      <div className="footerContainer">
        <div className="footerSubContainer1">
          <a className='footerContents'>Meta</a>
          <a className='footerContents'>소개</a>
          <a className='footerContents'>블로그</a>
          <a className='footerContents'>채용 정보</a>
          <a className='footerContents'>도움말</a>
          <a className='footerContents'>API</a>
          <a className='footerContents'>개인정보처리방침</a>
          <a className='footerContents'>약관</a>
          <a className='footerContents'>인기 계정</a>
          <a className='footerContents'>위치</a>
          <a className='footerContents'>Instagram Lite</a>
          <a className='footerContents'>Threads</a>
          <a className='footerContents'>연락처 업로드 & 비사용자</a>
          <a className='footerContents'>Meta Verified</a>
        </div>
        <div className="footerSubContainer2">
          <span className='footerContents'>한국어</span>
          <span className='footerContents'>© 2023 Instagram from Meta</span>
        </div>
      </div>
    </div>
  );
}