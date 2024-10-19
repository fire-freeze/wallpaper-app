import React, { CSSProperties, useContext, useEffect, useRef } from "react";
import { modalContext } from "../context/ModalContext";

interface PropTypes {
  children?: React.ReactNode;
  show_modal: Boolean;
  style: CSSProperties | {};
}

const Modal: React.FC<PropTypes> = ({ children, show_modal, style }) => {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const { modalState, updateModalState } = context;
  let modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!modalState.show_modal) return;
    const mouseClickHandler = (event: MouseEvent) => {
      console.log(event.currentTarget);
      console.log(modalState, modalRef);
    };
    modalRef.current &&
      modalRef.current.addEventListener("click", mouseClickHandler);
    return () => document.removeEventListener("click", mouseClickHandler);
  }, [modalRef]);
  return show_modal ? (
    <div
      ref={modalRef}
      className="placeholder-modal clickable "
      style={style}
      onClick={() => updateModalState({ ...modalState, show_modal: false })}
      onContextMenu={(e) => {
        e.preventDefault();
        updateModalState({ ...modalState, show_modal: false });
      }}
    >
      {children}
    </div>
  ) : null;
};

export default Modal;
