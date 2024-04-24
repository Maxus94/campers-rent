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
    <div className={css.featuresContainer}>
      <div className={css.underlineActive}></div>
      <ul className={css.camperDetails}>
        <li className={css.camperDetailItem}>
          <svg className={css.camperDetailImage} width="20" height="20">
            <use href="/src/img/sprite.svg#icon-users"></use>
          </svg>
          {adults} adults
        </li>
        <li className={css.camperDetailItem + " " + css.capitalised}>
          <svg className={css.camperDetailImage} width="20" height="20">
            <use href="/src/img/sprite.svg#icon-gearbox"></use>
          </svg>
          {transmission}
        </li>
        {details.airConditioner > 0 && (
          <li className={css.camperDetailItem}>AC</li>
        )}
        <li className={css.camperDetailItem + " " + css.capitalised}>
          <svg className={css.camperDetailImage} width="20" height="20">
            <use href="/src/img/sprite.svg#icon-fuel-type"></use>
          </svg>
          {engine}
        </li>
        {details.kitchen > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-kitchen"></use>
            </svg>
            kitchen
          </li>
        )}
        <li className={css.camperDetailItem}>
          <svg className={css.camperDetailImage} width="20" height="20">
            <use href="/src/img/sprite.svg#icon-bed"></use>
          </svg>
          {details.beds} beds
        </li>
        {details.airConditioner > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-air-cond"></use>
            </svg>
            {details.airConditioner} air conditioner
          </li>
        )}
        {details.CD > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-cd"></use>
            </svg>
            CD
          </li>
        )}
        {details.radio > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-radio"></use>
            </svg>
            Radio
          </li>
        )}
        {details.hob > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-hob"></use>
            </svg>
            {details.hob} hob
          </li>
        )}
        {details.TV > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-tv"></use>
            </svg>
            TV
          </li>
        )}
        {details.shower > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-shover"></use>
            </svg>
            Shower
          </li>
        )}
        {details.toilet > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-toilet"></use>
            </svg>
            Toilet
          </li>
        )}
        {details.freezer > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-freege"></use>
            </svg>
            Freezer
          </li>
        )}
        {details.microwave > 0 && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-freege"></use>
            </svg>
            Microwave
          </li>
        )}
        {details.gas && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-gaz"></use>
            </svg>
            Gas
          </li>
        )}
        {details.water && (
          <li className={css.camperDetailItem}>
            <svg className={css.camperDetailImage} width="20" height="20">
              <use href="/src/img/sprite.svg#icon-water"></use>
            </svg>
            Water
          </li>
        )}
      </ul>
      <h2 className={css.camperDetailsTitle}>Vehicle details</h2>
      <ul className={css.camperFeatures}>
        <li className={css.vehicleDetail + " " + css.capitalised}>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li className={css.vehicleDetail}>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li className={css.vehicleDetail}>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li className={css.vehicleDetail}>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li className={css.vehicleDetail}>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li className={css.vehicleDetail}>
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
