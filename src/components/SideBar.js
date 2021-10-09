import React, { useState, useContext } from "react";
import Modal from "react-modal";
import "../styles/SideBar.css";
import { Context } from "../context/Context";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
const SideBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { watchList } = useContext(Context);
  const { removeFromWatchList } = useContext(Context);

  return (
    <nav className="sidebar">
      <div className="hamburger">
        <div></div>
        <div className="middle__line"></div>
        <div></div>
      </div>
      <div className="sidebar__icons">
        {(watchList.length > 0 && (
          <FavoriteIcon className="icon" onClick={() => setModalIsOpen(true)} />
        )) || (
          <FavoriteBorderIcon
            className="icon"
            onClick={() => setModalIsOpen(true)}
          />
        )}

        <LanguageOutlinedIcon className="icon" />
        <ChatBubbleOutlineOutlinedIcon
          className="icon"
          style={{ fontSize: "20px", marginLeft: "2px" }}
        />
      </div>
      <Modal
        className="watchlist__modal"
        isOpen={modalIsOpen}
        style={{ overlay: { background: "rgba(20, 20, 20, .9)" } }}
      >
        <CloseIcon
          className="icon"
          onClick={() => setModalIsOpen(false)}
          style={{
            position: "absolute",
            zIndex: "3",
            color: "#000",
            height: "3vh",
          }}
        />

        <div className="watchList__container">
          {watchList.map((movie) => (
            <>
              <div className="watchList__movie__container">
                <img className="watchList__movie" src={movie.image} />
                <div className="watchList__movie__bottom">
                  <CloseIcon
                    style={{ color: "rgba(256, 196, 36)" }}
                    onClick={() => removeFromWatchList(movie.id)}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </Modal>
    </nav>
  );
};

export default SideBar;
