import React, { useContext } from "react";
import AppHeader from "./header-components/AppHeader";
import Bar from "./header-components/Bar";
import MainContent from "./main-components/MainContent";
import Modal from "./Modal";
import { modalContext } from "../context/ModalContext";

interface PropTypes {}

const Container: React.FC<PropTypes> = () => {
  const context = useContext(modalContext);
  if (!context) throw new Error("not found");
  const { modalState } = context;
  return (
    <div className="app-container">
      <main>
        <AppHeader>
          <Bar/>
        </AppHeader>
        <MainContent/>
        <Modal show_modal={modalState.show_modal} style={modalState.style} children={modalState.child}/>
      </main>
    </div>
  );
};

export default Container;
