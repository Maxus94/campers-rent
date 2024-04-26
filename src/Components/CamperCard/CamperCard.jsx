import { useDispatch, useSelector } from "react-redux";
import { openModal, setCamper } from "../../store/modalSlice";
import { selectFavorites, selectModal } from "../../store/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesSlice";

import css from "./CamperCard.module.css";

import sprite from "../../img/sprite.svg";

const CamperCard = ({
  camper: {
    _id,
    name,
    price,
    rating,
    reviews,
    location,
    transmission,
    description,
    gallery,
    adults,
    details,
    engine,
    consumption,
    tank,
    form,
    length,
    width,
    height,
  },
}) => {
  const dispatch = useDispatch();
  const modalIsShown = useSelector(selectModal);
  const favorites = useSelector(selectFavorites);
  const toggleFavorites = (num) => {
    if (favorites.includes(num)) {
      dispatch(removeFromFavorites(num));
    } else {
      dispatch(addToFavorites(num));
    }
  };

  return (
    <div className={css.cardContainer}>
      <img className={css.camperPicture} src={gallery[0]} alt="" />
      <div className={css.camperInfoContainer}>
        <div className={css.cardHeaderBlock}>
          <div className={css.cardHeader}>
            <p>{name}</p>
            <span>
              &#8364;{price + ".00"}
              <button
                className={css.favoritesButton}
                type="button"
                onClick={() => toggleFavorites(_id)}
              >
                <svg width="24" height="24">
                  <use
                    className={
                      favorites.includes(_id)
                        ? css.inFavorites
                        : css.notInFavorites
                    }
                    href={sprite + "#icon-heart1"}
                  ></use>
                </svg>
              </button>
            </span>
          </div>
          <p className={css.ratingLocation}>
            <svg className={css.starImage} width="16" height="16">
              <use href={sprite + "#icon-star"}></use>
            </svg>
            <span className={css.ratingUnderline}>
              {rating}({reviews.length} Reviews)
            </span>
            <svg className={css.locationImage} width="16" height="16">
              <use href={sprite + "#icon-location"}></use>
            </svg>
            {location}
          </p>
          <p className={css.camperDescription}>{description}</p>
        </div>
        <ul className={css.camperDetails}>
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href={sprite + "#icon-users"}></use>
            </svg>
            {adults} adults
          </li>
          <li className={css.camperDetailItem + " " + css.capitalised}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href={sprite + "#icon-gearbox"}></use>
            </svg>
            {transmission}
          </li>
          <li className={css.camperDetailItem + " " + css.capitalised}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href={sprite + "#icon-fuel-type"}></use>
            </svg>
            {engine}
          </li>
          {details.kitchen > 0 && (
            <li className={css.camperDetailItem}>
              <svg className={css.camperDetailImage} width="20" height="20">
                <use href={sprite + "#icon-kitchen"}></use>
              </svg>
              Kitchen
            </li>
          )}
          {details.beds > 0 && (
            <li className={css.camperDetailItem}>
              <svg className={css.camperDetailImage} width="20" height="20">
                <use href={sprite + "#icon-bed"}></use>
              </svg>
              {details.beds} beds
            </li>
          )}
          {details.airConditioner > 0 && (
            <li className={css.camperDetailItem}>
              <svg className={css.camperDetailImage} width="20" height="20">
                <use href={sprite + "#icon-ac"}></use>
              </svg>
              AC
            </li>
          )}
        </ul>
        <button
          className={css.showMoreButton}
          type="button"
          onClick={() => {
            dispatch(openModal());
            dispatch(
              setCamper({
                _id,
                name,
                price,
                rating,
                reviews,
                location,
                transmission,
                description,
                gallery,
                adults,
                details,
                engine,
                consumption,
                tank,
                form,
                length,
                width,
                height,
              })
            );
          }}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;
