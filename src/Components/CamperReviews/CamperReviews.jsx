import { useSelector } from "react-redux";
import BookCamper from "../BookCamper/BookCamper";
import { selectCamper } from "../../store/selectors";
import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamper);
  console.log(reviews);
  const makeStars = (numberOfStars) => {
    let stars = "";
    for (let i = 0; i < numberOfStars; i++) {
      stars += "<span>*</span>";
    }
    return stars;
  };
  return (
    <ul className={css.campersReviewsContainer}>
      {reviews.map((review) => (
        <li key={reviews.indexOf(review)}>
          <div>{review.reviewer_name.slice(0, 1)}</div>
          <p>{review.reviewer_name}</p>
          <p>{makeStars(review.reviewer_rating)}</p>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
