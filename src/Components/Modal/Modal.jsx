import { useEffect } from "react";
import css from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { selectModal } from "../../store/selectors";

export const Modal = () => {
  const modalIsShown = useSelector(selectModal);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeModal());
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleOverlayClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeModal);
    }
  };
  console.log(modalIsShown);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>Modal!!!!!!!!!</div>
    </div>
  );
};
