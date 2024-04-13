import { useState } from "react";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";

const CamperCard = () => {
  const [featuresActive, setFeaturesActive] = useState("css.isActive");
  const [reviewsActive, setReviewsActive] = useState("css.notActive");
  return (
    <div>
      <div>
        <ul>
          <li>tyretyy</li>
          <li>uytru</li>
          <li>rtyuytru</li>
        </ul>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p></p>
      <ul>
        <li><button className={featuresActive} type="button" onClick={() => { setFeaturesActive("css.isActive"); setReviewsActive("css.notActive") }}>Features</button></li>
        <li><button className={reviewsActive} type="button" onClick={() => { setReviewsActive("css.isActive"); setFeaturesActive("css.notActive") }}>Reviews</button></li>

      </ul>
      {featuresActive === "css.isActive" && <CamperFeatures />}
      {reviewsActive === "css.isActive" && <CamperReviews />}

    </div>
  );
};

export default CamperCard