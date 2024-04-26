import { useSelector } from "react-redux";
import { selectCamper } from "../../store/selectors";
import css from "./CamperReviews.module.css";

import sprite from "../../img/sprite.svg";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamper);
  console.log(reviews);
  const createStars = (numberOfStars) => {
    const markup = [];
    for (let i = 0; i < 5; i++) {
      markup.push(
        <svg
          className={i < numberOfStars ? css.golgStar : css.greyStar}
          width="16"
          height="16"
        >
          <use href={sprite + "#icon-star"}></use>
        </svg>
      );
    }
    return markup;
  };
  return (
    <div className={css.campersReviewsContainer}>
      <div className={css.underlineActive}></div>
      <ul>
        {reviews.map((review) => (
          <li className={css.reviewContainer} key={reviews.indexOf(review)}>
            <div className={css.reviewerContainer}>
              <div className={css.reviewerIcon}>
                {review.reviewer_name.slice(0, 1)}
              </div>
              <div>
                <p className={css.reviewerName}>{review.reviewer_name}</p>
                <p>{createStars(review.reviewer_rating)}</p>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
