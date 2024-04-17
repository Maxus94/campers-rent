import { useState } from "react";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import css from "./CamperCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal, setCamper } from "../../store/modalSlice";
import { selectFavorites, selectModal } from "../../store/selectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/favoritesSlice";
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
      {/* <div className={css.camperPicture}></div> */}
      <div>
        <div>
          <div className={css.cardHeader}>
            <p>{name}</p>
            <p>
              {price}
              <button type="button" onClick={() => toggleFavorites(_id)}>
                *
              </button>
            </p>
          </div>
          <p>
            {rating}({reviews.length} Reviews)<span>{location}</span>
          </p>
          <p className={css.camperDescription}>{description}</p>
        </div>
        <ul className={css.camperDetails}>
          <li>{adults} adults</li>
          <li>{transmission}</li>
          <li>{engine}</li>
          {details.kitchen > 0 && <li>Kitchen</li>}
          {details.beds > 0 && <li>{details.beds} beds</li>}
          {details.airConditioner > 0 && <li>AC</li>}
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

{
  /* 
const [featuresActive, setFeaturesActive] = useState("css.isActive");
  const [reviewsActive, setReviewsActive] = useState("css.notActive");
  console.log(name);
  <p></p>
<ul>
  <li>
    <button
      className={featuresActive}
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
      className={reviewsActive}
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
{featuresActive === "css.isActive" && <CamperFeatures />}
{reviewsActive === "css.isActive" && <CamperReviews />} */
}
