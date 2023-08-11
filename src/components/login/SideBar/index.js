import React from 'react';
import { useNavigate } from "react-router-dom";
import './index.css';

import {GoHome} from 'react-icons/go';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiPlusSquare} from 'react-icons/fi';
import {RxHamburgerMenu} from 'react-icons/rx';

export default function SideBar() {
  const navigate = useNavigate();

  const newPosterPageReload = () => {
    window.location.replace('/newposter');
  }

  return (
    <div className="sideBarContainer">
      <div>
        <div className="logoTabContainer" onClick={() => navigate("/")}>
          <img
            alt="logo"
            className="logoImage"
            src={require("../images/img_logo.png")}
          />
        </div>

        <div className="tabContainer">
          <div className="homeTabContainer" onClick={() => navigate("/")}>
            <GoHome className="homeIcon" />
            <span className="homeText">홈</span>
          </div>

          <div className="searchTabContainer">
            <BsSearch className="searchIcon" />
            <span className="searchText">검색</span>
          </div>

          <div
            className="questTabContainer"
            onClick={() => navigate("/explore")}
          >
            <svg
              className="questIcon"
              aria-label="탐색 탭"
              class="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <polygon
                fill="none"
                points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
              <polygon
                fill-rule="evenodd"
                points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
              ></polygon>
              <circle
                cx="12.001"
                cy="12.005"
                fill="none"
                r="10.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <span className="questText">탐색 탭</span>
          </div>

          <div className="reelsTabContainer" onClick={() => navigate("/reels")}>
            <svg
              className="reelsIcon"
              aria-label="릴스"
              class="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="2.049"
                x2="21.95"
                y1="7.002"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="13.504"
                x2="16.362"
                y1="2.001"
                y2="7.002"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="7.207"
                x2="10.002"
                y1="2.11"
                y2="7.002"
              ></line>
              <path
                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span className="reelsText">릴스</span>
          </div>

          <div className="messageTabContainer">
            <svg
              className="messageIcon"
              aria-label="Direct"
              class="_ab6-"
              color="rgb(0, 0, 0)"
              fill="rgb(0, 0, 0)"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <line
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                x1="22"
                x2="9.218"
                y1="3"
                y2="10.083"
              ></line>
              <polygon
                fill="none"
                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            <span className="messageText">메시지</span>
          </div>

          <div className="alertTabContainer">
            <AiOutlineHeart className="alertIcon" />
            <span className="alertText">알림</span>
          </div>

          <div
            className="makeTabContainer"
            onClick={() => newPosterPageReload()}
          >
            <FiPlusSquare className="makeIcon" />
            <span className="makeText">만들기</span>
          </div>

          <div
            className="profileTabContainer"
            onClick={() => navigate("/profile")}
          >
            <img
              alt="make"
              className="profileIcon"
              src={require("../images/ic_profile.png")}
            />
            <span className="profileText">프로필</span>
          </div>
        </div>
      </div>

      <div className="showMoreContainer">
        <RxHamburgerMenu className="showMoreIcon" />
        <span className="showMoreText">더 보기</span>
      </div>
    </div>
  );
}
