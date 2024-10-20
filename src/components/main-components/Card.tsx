import React, { useContext } from "react";
import { modalContext } from "../../context/ModalContext";
import FullscreenPlayer from "./FullscreenPlayer";

interface PropTypes {
  url: string;
  fullUrl: string;
  loaded: Boolean;
}

const Card: React.FC<PropTypes> = ({ url, loaded, fullUrl }) => {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const { modalState, updateModalState } = context;

  const clickHandler = () => {
    updateModalState({
      ...modalState,
      show_modal: true,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      child: <FullscreenPlayer url={fullUrl} />,
    });
  };

  if (!loaded)
    return (
      <div className="img-card align-column">
        <div className="loader"></div>
      </div>
    );

  console.log("url: ", url, " loaded ", loaded);
  return (
    <div className="img-card align-column">
      <div className="card-bar">
        <div className="enter-full center-div" onClick={clickHandler}>
          <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H3.5C4.05228 9.5 4.5 9.05228 4.5 8.5V4.5H8.5C9.05228 4.5 9.5 4.05228 9.5 3.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H4Z"
                fill="#000000"
              ></path>
              <path
                d="M20 1.5C21.3807 1.5 22.5 2.61929 22.5 4V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H20.5C19.9477 9.5 19.5 9.05228 19.5 8.5V4.5H15.5C14.9477 4.5 14.5 4.05228 14.5 3.5V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H20Z"
                fill="#000000"
              ></path>
              <path
                d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H20.5C19.9477 14.5 19.5 14.9477 19.5 15.5V19.5H15.5C14.9477 19.5 14.5 19.9477 14.5 20.5V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H20Z"
                fill="#000000"
              ></path>
              <path
                d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V20.5C9.5 19.9477 9.05228 19.5 8.5 19.5H4.5V15.5C4.5 14.9477 4.05228 14.5 3.5 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V20Z"
                fill="#000000"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <img src={url} alt="wallpaper-img" width={"100%"} />
    </div>
  );
};

export default Card;
