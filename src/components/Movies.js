import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import Modal from "react-modal";
import "../styles/Movies.css";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";



const Movies = ({title, image, overview, id}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const { addToWatchList } = useContext(Context);
  const { watchList } = useContext(Context);
  
   const firedFunction = () => {
     addToWatchList({image, title, id});
     setDisable(true);
   };
  
  console.log(watchList)

  return (
    <div className="movie">
      <img src={image} alt="" onClick={() => setModalIsOpen(true)} />
      <Modal
        className="movie__modal"
        isOpen={modalIsOpen}
        style={{ overlay: { background: "rgba(20, 20, 20, .9)" } }}
      >
        <CloseIcon
          className="icon"
          onClick={() => setModalIsOpen(false)}
          style={{
            position: "absolute",
            zIndex: "3",
          }}
        />
        <img src={image} alt="" />
        <div className="movie__info">
          {!title && <h1>No title</h1>}
          {title && <h1>{title}</h1>}
          <p>{overview}</p>
        </div>
      </Modal>

      <div className="add__box">
        <button
          disabled={disable}
          onClick={firedFunction}
          style={{ background: "none", outline: "none", border: "none" }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Movies;
