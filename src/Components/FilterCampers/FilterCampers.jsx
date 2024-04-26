import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/selectors";
import { Field, Form, Formik } from "formik";
import { changeFilter } from "../../store/filterSlice";
import css from "./FilterCampers.module.css";
import sprite from "../../img/sprite.svg";

const FilterCampers = ({ campersFilter }) => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    campersFilter(
      values.location,
      values.type,
      values.equipment.includes("AC") ? 1 : 0,
      values.equipment.includes("Automatic") ? "automatic" : "",
      values.equipment.includes("Kitchen") ? 1 : 0,
      values.equipment.includes("TV") ? 1 : 0,
      values.equipment.includes("Shower/WC") ? 1 : 0
    );
    const filter = {
      location: values.location,
      form: values.type,
      ac: values.equipment.includes("AC"),
      gearBox: values.equipment.includes("Automatic"),
      kitchen: values.equipment.includes("Kitchen"),
      tv: values.equipment.includes("TV"),
      shover: values.equipment.includes("Shower/WC"),
    };
    console.log(filters);
    console.log(filter);
    dispatch(changeFilter(filter));
  };
  return (
    <Formik
      initialValues={{ location: "", equipment: [], type: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.filterFormContainer}>
        <fieldset className={css.fieldsGroup}>
          <label className={css.subformLocationTitle} htmlFor="location">
            Location
            <Field
              className={css.locationInput}
              type="text"
              name="location"
              id="location"
              placeholder="City"
            />
            <svg className={css.locationImage} width="18" height="20">
              <use href={sprite + "#icon-location"}></use>
            </svg>
          </label>
        </fieldset>
        <p className={css.subformFiltersTitle}>Filters</p>
        <fieldset className={css.fieldsGroup}>
          <legend className={css.filtersType}>Vehicle equipment</legend>
          <div className={css.legendUnderline}></div>
          <div className={css.selectEquipmentContainer}>
            <label className={css.equipmentLabel} htmlFor="AC">
              <Field
                className={css.originalCheckBox}
                type="checkbox"
                name="equipment"
                value="AC"
                id="AC"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="32" height="32">
                  <use href={sprite + "#icon-ac"}></use>
                </svg>
                <span>AC</span>
              </div>
            </label>
            <label className={css.equipmentLabel} htmlFor="Automatic">
              <Field
                className={css.originalCheckBox}
                type="checkbox"
                name="equipment"
                value="Automatic"
                id="Automatic"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="32" height="32">
                  <use href={sprite + "#icon-gearbox"}></use>
                </svg>
                <span>Automatic</span>
              </div>
            </label>
            <label className={css.equipmentLabel} htmlFor="Kitchen">
              <Field
                className={css.originalCheckBox}
                type="checkbox"
                name="equipment"
                value="Kitchen"
                id="Kitchen"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="32" height="32">
                  <use href={sprite + "#icon-kitchen"}></use>
                </svg>
                <span>Kitchen</span>
              </div>
            </label>
            <label className={css.equipmentLabel} htmlFor="TV">
              <Field
                className={css.originalCheckBox}
                type="checkbox"
                name="equipment"
                value="TV"
                id="TV"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="32" height="32">
                  <use href={sprite + "#icon-tv"}></use>
                </svg>
                <span>TV</span>
              </div>
            </label>
            <label className={css.equipmentLabel} htmlFor="Shower/WC">
              <Field
                className={css.originalCheckBox}
                type="checkbox"
                name="equipment"
                value="Shower/WC"
                id="Shower/WC"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="32" height="32">
                  <use href={sprite + "#icon-shover"}></use>
                </svg>
                <span>Shower/WC</span>
              </div>
            </label>
          </div>
        </fieldset>
        <fieldset className={css.fieldsGroup}>
          <legend className={css.filtersType}>Vehicle equipment</legend>
          <div className={css.selectEquipmentContainer}>
            <label className={css.equipmentLabel} htmlFor="Van">
              <Field
                className={css.originalCheckBox}
                type="radio"
                name="type"
                value="panelTruck"
                id="Van"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="40" height="28">
                  <use href={sprite + "#icon-van"}></use>
                </svg>
                <span className={css.typeCamper}>Van</span>
              </div>
            </label>
            <label className={css.equipmentLabel} htmlFor="Integrated">
              <Field
                className={css.originalCheckBox}
                type="radio"
                name="type"
                value="fullyIntegrated"
                id="Integrated"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="40" height="28">
                  <use href={sprite + "#icon-fully-integrated"}></use>
                </svg>
                <span className={css.typeCamper}>Fully Integrated</span>
              </div>
            </label>
            <label className={css.equipmentLabel} htmlFor="Alcove">
              <Field
                className={css.originalCheckBox}
                type="radio"
                name="type"
                value="Alcove"
                id="Alcove"
              />
              <div className={css.equipmentButton}>
                <svg className={css.checkboxImage} width="40" height="28">
                  <use href={sprite + "#icon-alcove"}></use>
                </svg>
                <span className={css.typeCamper}>Alcove</span>
              </div>
            </label>
          </div>
        </fieldset>
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default FilterCampers;
