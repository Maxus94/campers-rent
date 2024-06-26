import { useEffect, useState } from "react";
import css from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/modalSlice";
import { selectCamper, selectModal } from "../../store/selectors";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import BookCamper from "../BookCamper/BookCamper";

import sprite from "../../img/sprite.svg";

export const Modal = () => {
  const [featuresActive, setFeaturesActive] = useState("css.isActive");
  const [reviewsActive, setReviewsActive] = useState("css.notActive");

  const modalIsShown = useSelector(selectModal);
  const { name, price, rating, reviews, location, description, gallery } =
    useSelector(selectCamper);
  const dispatch = useDispatch();
  let style = featuresActive;

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
      dispatch(closeModal());
    }
  };

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
            }}
          >
            <svg className={css.closeImage} width="32" height="32">
              <use href={sprite + "#icon-close-window"}></use>
            </svg>
          </button>
        </div>
        <p className={css.ratingLocationContainer}>
          <svg className={css.starImage} width="16" height="16">
            <use href={sprite + "#icon-star"}></use>
          </svg>
          <span className={css.ratingUnderline}>
            {rating}({reviews.length} reviews)
          </span>
          <svg className={css.locationImage} width="16" height="16">
            <use href={sprite + "#icon-location"}></use>
          </svg>
          {location}
        </p>
        <p className={css.camperPrice}>&#8364;{price + ".00"}</p>
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
        <p className={css.camperDescription}>{description}</p>
        <ul className={css.switchButtonsContainer}>
          <li>
            <button
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
          <BookCamper />
        </div>
      </div>
    </div>
  );
};
