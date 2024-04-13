import { useEffect } from "react";
import css from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { selectCamper, selectModal } from "../../store/selectors";

export const Modal = () => {
  const modalIsShown = useSelector(selectModal);
  const { name, price, rating, reviews, location, description, gallery } =
    useSelector(selectCamper);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeModal());
        dispatch(cleanCamper());
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleOverlayClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      dispatch(closeModal());
      dispatch(cleanCamper());
    }
  };
  console.log(modalIsShown);

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <div className={css.modalHeader}>
          <h1 className={css.modalTitle}>{name}</h1>
          <button
            type="button"
            className={css.modalClose}
            onClick={() => {
              dispatch(closeModal());
              dispatch(cleanCamper());
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};
