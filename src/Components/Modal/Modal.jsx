import { useEffect, useState } from "react";
import css from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { selectCamper, selectModal } from "../../store/selectors";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import BookCamper from "../BookCamper/BookCamper";

export const Modal = () => {
  const [featuresActive, setFeaturesActive] = useState("css.isActive");
  const [reviewsActive, setReviewsActive] = useState("css.notActive");

  const modalIsShown = useSelector(selectModal);
  const { name, price, rating, reviews, location, description, gallery } =
    useSelector(selectCamper);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        dispatch(closeModal());
        // dispatch(cleanCamper());
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
      // dispatch(cleanCamper());
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
              // dispatch(cleanCamper());
            }}
          >
            X
          </button>
        </div>
        <p>
          {rating}({reviews.length} reviews)<span>{location}</span>
        </p>
        <p>{price}</p>
        <div className={css.camperPicturesContainer}>
          {gallery.map((camper) => (
            <img
              key={gallery.indexOf(camper)}
              className={css.camperPicture}
              src={camper}
              alt="name"
            />
          ))}
        </div>
        <p>{description}</p>
        <ul className={css.switchButtonsContainer}>
          <li>
            <button
              // className={featuresActive}
              className={css.switchButton}
              type="button"
              onClick={() => {
                setFeaturesActive("css.isActive");
                setReviewsActive("css.notActive");
              }}
            >
              Features
            </button>
          </li>
          <li>
            <button
              className={css.switchButton}
              // className={reviewsActive}
              type="button"
              onClick={() => {
                setReviewsActive("css.isActive");
                setFeaturesActive("css.notActive");
              }}
            >
              Reviews
            </button>
          </li>
        </ul>
        <div className={css.featuresReviewsContainer}>
        {featuresActive === "css.isActive" && <CamperFeatures />}
        {reviewsActive === "css.isActive" && <CamperReviews />}
        <BookCamper/> 
        </div>
      </div>
    </div>
  );
};
