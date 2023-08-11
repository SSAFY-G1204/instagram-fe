import React, {useState} from 'react';
import { UNSAFE_DataRouterStateContext, useNavigate } from "react-router-dom";
import './index.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [isCorrectLogin, setIsCorrectLogin] = useState(true);
  const [loginIdValue, setLoginIdValue] = useState('');
  const [loginPwValue, setLoginPwValue] = useState('');

  const testId = 'jdg';
  const textPassword = 'jdg';

  const checkLogin = () => {
    if(loginIdValue === testId && loginPwValue === textPassword) 
      navigate("/")
    else
      setIsCorrectLogin(false);
  }

  const saveLoginIdValue = (e) => {
    setLoginIdValue(e.target.value);
  }

  const saveLoginPwValue = (e) => {
    setLoginPwValue(e.target.value);
  }

  return (
    <div className="loginPageContainer">
      {/* 내용 부분 */}
      <div className="contentsContainer">
        <div className="contentsSubContainer">
          {/* 휴대폰 사진 부분 */}
          <div className="imageContainer">
            <img
              className="loginImage"
              src={require("../images/img_login_main.png")}
              alt="로그인 페이지 이미지1"
            />
          </div>

          {/* 입력 및 버튼 부분 */}
          <div className="instagramContainer">
            <div className="instagramContainer1">
              <div className="loginLogoContainer">
                <img
                  className="loginLogoImage"
                  src={require("../images/img_logo.png")}
                  alt="로고 이미지"
                />
              </div>
              <div className="emailInputContainer">
                <input
                  className="emailInputBox"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={saveLoginIdValue}
                />
              </div>
              <div className="passwordInputContainer">
                <input
                  className="passwordInputBox"
                  type="password"
                  placeholder="비밀번호"
                  onChange={saveLoginPwValue}
                />
              </div>
              <div className="loginLoginButtonContainer" onClick={() => checkLogin()}>
                <span className="loginLoginText">로그인</span>
              </div>
              <div className="orContainer">
                <div className="leftLine"></div>
                <span className="orText">또는</span>
                <div className="rightLine"></div>
              </div>
              <div className="loginFacebookLoginContainer">
                <img
                  className="loginFacebookLoginIcon"
                  src={require("../images/ic_facebook.png")}
                  alt="페이스북 아이콘"
                />
                <a
                  href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dko_KR%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%2522xfvzml112wvbs19syplpz1pb9tpsg5kq49w4gmu5svik1fz92p3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Daf1721a4-bffc-4a97-b86b-fe0549987a8a%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522xfvzml112wvbs19syplpz1pb9tpsg5kq49w4gmu5svik1fz92p3%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ko_KR&pl_dbl=0"
                  className="loginFackbookLoginText"
                >
                  Facebook으로 로그인
                </a>
              </div>
              {
                !isCorrectLogin ? (
                  <div className='wrongPasswordAlertContainer'>
                    <span className='wrongPasswordAlertText'>잘못된 비밀번호입니다. 다시 확인하세요.</span>
                  </div>
                ) : null
              }
              <div className="forgetPasswordContainer">
                <span className="forgetPasswordPasswordText">
                  비밀번호를 잊으셨나요?
                </span>
              </div>
            </div>
            <div className="instagramContainer2">
              <div className="instagramSubContainer2">
                <span className="noAccountText">계정이 없으신가요?</span>
                <span
                  className="loginJoinText"
                  href="https://www.instagram.com/accounts/emailsignup/"
                  onClick={() => navigate('/join')}
                >
                  가입하기
                </span>
              </div>
            </div>
            <div className="instagramContainer3">
              <span className="downloadAppText">앱을 다운로드하세요.</span>
              <div className="downloadContainer">
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D204A3542-7571-452D-B0F8-9007A0785A7C%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1" target="_blank">
                  <img
                    className="downloadGooglePlayIcon"
                    src={require("../images/ic_download_google_play.png")}
                    alt="Google Play"
                  />
                </a>
                <a href="ms-windows-store://search/?query=Instagram">
                  <img
                    className="getMicrosoftIcon"
                    src={require("../images/ic_get_microsoft.png")}
                    alt="Microsoft"
                  />
                </a>
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