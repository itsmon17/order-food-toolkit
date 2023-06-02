import React from "react";
import styled from "@emotion/styled";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose} />;
};

const ModalContent = ({ children }) => {
  return <ModalStyle>{children}</ModalStyle>;
};

const backdrop = document.getElementById("backdrop");
const modalContent = document.getElementById("modal");

export const Modal = ({ children, onClick }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClick} />, backdrop)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalContent)}
    </>
  );
};

const ModalStyle = styled("div")(() => ({
  position: "fixed",
  top: "22vh",
  // left: " 4%",
  backgroundColor: "white",
  padding: "1rem",
  borderRadius: "14px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
  // zIndex: 30,
  animation: "slide-down 300ms ease-out forwards",
  width: "42rem",
  left: "calc(50% - 20rem)",
  zIndex: 999,

  "@keyframes slide-down": {
    " from ": {
      opacity: 0,
      transform: "translateY(-4rem)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const StyledBackdrop = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: " 100%",
  height: "1305px",
  backgroundColor: " rgba(0, 0, 0, 0.75)",

  backdropFilter: "blur(2px)",

  zIndex: 998,
}));
