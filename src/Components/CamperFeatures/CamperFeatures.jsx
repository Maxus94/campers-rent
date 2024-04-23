import { useSelector } from "react-redux";
import BookCamper from "../BookCamper/BookCamper";
import { selectCamper } from "../../store/selectors";
import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const {
    adults,
    engine,
    transmission,
    details,
    consumption,
    tank,
    form,
    length,
    width,
    height,
  } = useSelector(selectCamper);
  return (
    <div className={css.featuresReviewsContainer}>
      <ul>
        <li>{adults} adults</li>
        <li>{transmission}</li>
        {details.airConditioner > 0 && <li>AC</li>}
        <li>{engine}</li>
        {details.kitchen > 0 && <li>kitchen</li>}
        <li>{details.beds} beds</li>
        {details.airConditioner > 0 && (
          <li>{details.airConditioner} air conditioner</li>
        )}
        {details.CD > 0 && <li>CD</li>}
        {details.radio > 0 && <li>Radio</li>}
        {details.hob > 0 && <li>{details.hob} hob</li>}
        {details.TV > 0 && <li>TV</li>}
        {details.shower > 0 && details.toilet > 0 && <li>Shower/WC</li>}
      </ul>
      <h2>Vehicle details</h2>
      <ul>
        <li className={css.vehicleDetail}>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li>
          <span>Consumpson</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;

// name,
// price,
// rating,
// reviews,
// location,
// transmission,
// description,
// gallery,
// adults,
// details,
// engine,
