import { useSelector } from "react-redux";
import BookCamper from "../BookCamper/BookCamper";
import { selectCamper } from "../../store/selectors";
import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamper);
  console.log(reviews);
  const makeStars = (numberOfStars) => {
    switch (numberOfStars) {
      case 1:
        return (
          <div>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        );
      case 2:
        return (
          <div>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        );
      case 3:
        return (
          <div>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        );
      case 4:
        return (
          <div>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        );
      case 5:
        return (
          <div>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.golgStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        );
      default:
        return (
          <div>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
            <svg className={css.greyStar} width="16" height="16">
              <use href="/src/img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        );
    }
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
                <p>{makeStars(review.reviewer_rating)}</p>
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
