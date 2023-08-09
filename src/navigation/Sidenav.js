import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>홈</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>검색</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>탐색 탭</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>릴스</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>메시지</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>알림</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>만들기</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>프로필</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">더 보기</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
