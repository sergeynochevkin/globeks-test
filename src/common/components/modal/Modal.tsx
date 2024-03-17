import React from "react";
import classes from "./Modal.module.sass";
import modalClose from "../../../assets/images/icons/modalClose.svg";

type Props = {
  children: JSX.Element | JSX.Element[];
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ children, modalActive, setModalActive }: Props) => {
  return (
    <>
      {modalActive && (
        <div
          onClick={(e) => {
            e.stopPropagation();
            setModalActive(false);
          }}
          className={classes.Container}
        >
          <div
            className={classes.ModalContentContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={classes.CloseIconAnchor}>
              <img
                className={classes.CloseIcon}
                src={modalClose}
                alt="Закрыть модальное окно"
                onClick={(e) => {
                  e.stopPropagation();
                  setModalActive(false);
                }}
              />
            </div>

            {children}
          </div>
        </div>
      )}
    </>
  );
};
