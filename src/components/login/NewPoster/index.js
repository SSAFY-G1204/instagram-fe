import React, {useState} from 'react';
import Modal from "react-modal";
import './index.css';
import filterTabData from './FilterTabData';
import SideBar from '../SideBar/index';

import {RiCloseFill} from 'react-icons/ri';
import {BsArrowLeft} from 'react-icons/bs';
import {GoLocation} from 'react-icons/go';
import {SlArrowUp, SlArrowDown} from 'react-icons/sl';
import {PiSmileyThin} from 'react-icons/pi';
import {BsToggleOn, BsToggleOff} from 'react-icons/bs';

export default function NewPoster() {
  const [imageFile, setImageFile] = useState("");
  const [isShowNewPoster, setIsShowNewPoster] = useState(false); // 새 게시물 만들기 다이얼로그 여부
  const [newPosterStatus, setNewPosterStatus] = useState("cut"); // cut, edit, new
  const [editStatus, setEditStatus] = useState("filter"); // filter, adjust
  const [showAccess, setShowAccess] = useState(false); // 접근성
  const [showAdvancedStatus, setShowAdvancedStatus] = useState(false); // 고급 설정
  const [hideLikeAndView, setHideLikeAndView] = useState(false); // 좋아요 수 및 조회수 숨기기
  const [unlockComment, setUnlockComment] = useState(false); // 댓글 기능 해제
  const [selectedFilterTab, setSelectedFilterTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isCloseNewPosterModal, setIsCloseNewPosterModal] = useState(false);

  const editGbnValue = [
    {
      id: 1,
      name: '필터'
    },
    {
      id: 2,
      name: '조정'
    }
  ];

  const getImageFile = (event) => {
    var reader = new FileReader();

    reader.onload = function(event) {
      setImageFile(event.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
    setIsShowNewPoster(true);
  }

  const showNextPage = () => {
    switch(newPosterStatus) {
      case 'cut':
        setNewPosterStatus('edit');
        break;

      case 'edit':
        setNewPosterStatus('new');
        break;

      case 'new':
        closeModal();
        break;

      default:
    }
  }

  const showPrevPage = () => {
    switch(newPosterStatus) {
      case 'new':
        setNewPosterStatus('edit');
        break;

      case 'edit':
        setNewPosterStatus('cut');
        break;

      case 'cut':
        setIsCloseNewPosterModal(true);
        break;

      default:
    }
  }

  const clickEditGbnTab = (id) => {
    setSelectedFilterTab(id);

    if(editStatus === 'filter')
      setEditStatus('adjust');
    else
      setEditStatus('filter');
  }

  const changeAccessStatus = () => {
    setShowAccess(!showAccess);
  }

  const changeAdvancedStatus = () => {
    setShowAdvancedStatus(!showAdvancedStatus);
  }

  const changeHideLikeAndViewStatus = () => {
    setHideLikeAndView(!hideLikeAndView);
  }

  const changeUnlockComment = () => {
    setUnlockComment(!unlockComment);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const closeModalCheck = () => {
    if(!isShowNewPoster)
      setIsModalOpen(false);
    else
      setIsCloseNewPosterModal(true);
  }

  const openCloseNewPosterModal = () => {
    setIsCloseNewPosterModal(true);
  }

  const closeCloseNewPosterModal = () => {
    setIsCloseNewPosterModal(false);
  }

  const clickCloseNewPosterDeleteBtn = () => {
    closeCloseNewPosterModal();
    closeModal();
  }

  const clickCloseNewPosterCancelBtn = () => {
    closeCloseNewPosterModal();
  }

  return (
    <div className="finalContainer">
      <SideBar className="sideBarContainer" />

      {isModalOpen && (
        <div>
          <div className="newPosterContainer">
            {/* 상단 */}
            <div className="newPosterTopContainer">
              <RiCloseFill className="closeIcon" onClick={() => closeModalCheck()} />
            </div>

            {/* 내용 부분 */}
            <div className="newPosterMainContainer">
              {!isShowNewPoster ? (
                <div className="newPosterMain1Container">
                  <div className="newPosterMain1TopContainer">
                    <h1 className="newPosterMakeText">새 게시물 만들기</h1>
                  </div>
                  <div className="newPosterMain1ContentsContainer">
                    <div className="newPosterMainContents">
                      <img
                        className="galleryIcon"
                        src={require("../images/ic_gallery.png")}
                        alt="갤러리"
                      />

                      <h3 className="getPictureMovieText">
                        사진과 동영상을 여기에 끌어다 놓으세요
                      </h3>

                      <label className="inputImageButton" for="input-file">
                        컴퓨터에서 선택
                      </label>
                      <input
                        type="file"
                        id="input-file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={getImageFile}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="newPosterMain2Container">
                  <div className="newPosterMain2TopContainer">
                    <BsArrowLeft
                      className="leftArrowIcon"
                      onClick={showPrevPage}
                    />
                    <span className="cutText">
                      {newPosterStatus === "cut"
                        ? "자르기"
                        : newPosterStatus === "edit"
                        ? "편집"
                        : "새 게시물 만들기"}
                    </span>
                    <span className="nextText" onClick={showNextPage}>
                      {newPosterStatus === "new" ? "공유하기" : "다음"}
                    </span>
                  </div>
                  <div className="newPosterMain2ContentsContainer">
                    <div className="leftSideContainer">
                      <img
                        className="newPosterImage"
                        alt="사진"
                        src={imageFile}
                      />
                      {newPosterStatus === "cut" ? (
                        <div className="ratioIconContainer">
                          <svg
                            aria-label="자르기 선택"
                            class="_ab6-"
                            color="rgb(255, 255, 255)"
                            fill="rgb(255, 255, 255)"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
                          >
                            <path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
                          </svg>
                        </div>
                      ) : null}

                      {newPosterStatus === "cut" ? (
                        <div className="enlargementContainer">
                          <svg
                            aria-label="확대/축소 선택"
                            class="_ab6-"
                            color="rgb(255, 255, 255)"
                            fill="rgb(255, 255, 255)"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
                          >
                            <path d="m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"></path>
                          </svg>
                        </div>
                      ) : null}

                      {newPosterStatus === "cut" ? (
                        <div className="changeOrderContainer">
                          <svg
                            aria-label="미디어 갤러리 열기"
                            class="_ab6-"
                            color="rgb(255, 255, 255)"
                            fill="rgb(255, 255, 255)"
                            height="16"
                            role="img"
                            viewBox="0 0 24 24"
                            width="16"
                          >
                            <path
                              d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      ) : null}
                    </div>
                    {newPosterStatus === "edit" || newPosterStatus === "new" ? (
                      <div className="rightSideContainer">
                        {newPosterStatus === "edit" ? (
                          <div>
                            <div className="editGbn">
                              {editGbnValue.map((value) => (
                                <div
                                  className={`editGbnValue ${
                                    value.id === selectedFilterTab
                                      ? "active"
                                      : ""
                                  }`}
                                  onClick={() => clickEditGbnTab(value.id)}
                                >
                                  <span>{value.name}</span>
                                </div>
                              ))}
                            </div>
                            <div className="editContents">
                              {editStatus === "filter" ? (
                                <div className="editContentsFilter">
                                  {filterTabData.map((data) => (
                                    <div className="editContentsFilterContainer">
                                      <img
                                        id={`${data.id}`}
                                        className="editContentsFilterImage"
                                        alt={`${data.name}`}
                                        src={require("../images/ic_filter.jpg")}
                                      />
                                      <span className="editContentsFilterText">{`${data.name}`}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="editContentsAdjust">
                                  <h1>안녕</h1>
                                  <h1>안녕</h1>
                                  <h1>안녕</h1>
                                  <h1>안녕</h1>
                                  <h1>안녕</h1>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="newPosterContents">
                              <div className="newPosterContentsProfile">
                                <img
                                  className="profileIcon"
                                  src={require("../images/ic_profile.png")}
                                  alt="프로필"
                                />
                                <span className="profileText">둔두두둔둔</span>
                              </div>
                              <div className="newPosterContentsPhrase">
                                <textarea
                                  className="contentsPhrase"
                                  placeholder="문구 입력..."
                                />
                              </div>
                              <div className="newPosterContentsEtc">
                                <PiSmileyThin className="smileIcon" />
                                <span className="wordCount">6/2000</span>
                              </div>
                            </div>
                            <div className="newPosterAddLocation">
                              <input
                                className="inputAddLocation"
                                type="text"
                                placeholder="위치 추가"
                              />
                              <GoLocation className="locationIcon" />
                            </div>
                            <div className="newPosterAccess">
                              {showAccess ? (
                                <div>
                                  <div
                                    className="accessContainer"
                                    onClick={changeAccessStatus}
                                  >
                                    <span
                                      className={
                                        showAccess
                                          ? "accessTextActive"
                                          : "accessText"
                                      }
                                    >
                                      접근성
                                    </span>
                                    <SlArrowUp />
                                  </div>
                                  <p className="replaceText">
                                    대체 텍스트는 시각적으로 사진을 보기 어려운
                                    사람들에게 사진 내용을 설명하는
                                    텍스트입니다. 대체 텍스트는 회원님의 사진에
                                    대해 자동으로 생성되며, 직접 입력할 수도
                                    있습니다.
                                  </p>
                                  <div className="replaceImageContainer">
                                    <img
                                      className="replaceImage"
                                      alt="사진"
                                      src={imageFile}
                                    />
                                    <div className="replaceImageTextContainer">
                                      <input
                                        className="replaceImageText"
                                        type="text"
                                        placeholder="대체 텍스트 입력..."
                                      />
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <div
                                    className="accessContainer"
                                    onClick={changeAccessStatus}
                                  >
                                    <span
                                      className={
                                        showAccess
                                          ? "accessTextActive"
                                          : "accessText"
                                      }
                                    >
                                      접근성
                                    </span>
                                    <SlArrowDown />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="newPosterAdvanced">
                              {showAdvancedStatus ? (
                                <div>
                                  <div
                                    className="advancedContainer"
                                    onClick={changeAdvancedStatus}
                                  >
                                    <span
                                      className={
                                        showAdvancedStatus
                                          ? "accessTextActive"
                                          : "accessText"
                                      }
                                    >
                                      고급 설정
                                    </span>
                                    <SlArrowUp />
                                  </div>
                                  <div className="hideLikeAndViewsContainer">
                                    <span className="hideLikeAndViewText">
                                      이 게시물의 좋아요 수 및 조회수 숨기기
                                    </span>
                                    <div>
                                      {hideLikeAndView ? (
                                        <BsToggleOn
                                          className="hideLikeAndViewToggleButtton"
                                          onClick={changeHideLikeAndViewStatus}
                                        />
                                      ) : (
                                        <BsToggleOff
                                          className="hideLikeAndViewToggleButtton"
                                          onClick={changeHideLikeAndViewStatus}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <p className="hideLikeAndViewDescriptionText">
                                    이 게시물의 총 좋아요 및 조회수는 회원님만
                                    볼 수 있습니다. 나중에 게시물 상단에 있는
                                    ··· 메뉴에서 이 설정을 변경할 수 있습니다.
                                    다른 사람의 게시물에서 좋아요 수를 숨기려면
                                    계정 설정으로 이동하세요.{" "}
                                    <a href="https://help.instagram.com/113355287252104">
                                      더 알아보기
                                    </a>
                                  </p>
                                  <div className="unlockCommentsContainer">
                                    <span className="unlockCommentsText">
                                      댓글 기능 해제
                                    </span>
                                    <div>
                                      {unlockComment ? (
                                        <BsToggleOn
                                          className="unlockCommentsToggleButtton"
                                          onClick={changeUnlockComment}
                                        />
                                      ) : (
                                        <BsToggleOff
                                          className="unlockCommentsToggleButtton"
                                          onClick={changeUnlockComment}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <p className="unlockCommentsDescriptionText">
                                    나중에 게시물 상단의 메뉴(···)에서 이 설정을
                                    변경할 수 있습니다.
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  <div
                                    className="advancedContainer"
                                    onClick={changeAdvancedStatus}
                                  >
                                    <span
                                      className={
                                        showAdvancedStatus
                                          ? "accessTextActive"
                                          : "accessText"
                                      }
                                    >
                                      고급 설정
                                    </span>
                                    <SlArrowDown />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
            </div>

            {/* <div className="backgroundContainer"></div> */}
          </div>

          {isCloseNewPosterModal && (
            <div className="closeCheckNewPosterContainer">
              <div className="closeCheckNewPosterModal">
                <div className="closeCheckNewPosterDescription">
                  <p className="closeCheckNewPosterDescription1">
                    게시물을 삭제하시겠어요?
                  </p>
                  <p className="closeCheckNewPosterDescription2">
                    지금 나가면 수정 내용이 저장되지 않습니다.
                  </p>
                </div>
                <div
                  className="deleteNewPosterContainer"
                  onClick={() => clickCloseNewPosterDeleteBtn()}
                >
                  <span className="deleteNewPosterText">삭제</span>
                </div>
                <div
                  className="cancelNewPosterContainer"
                  onClick={() => clickCloseNewPosterCancelBtn()}
                >
                  <span className="cancelNewPosterText">취소</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}