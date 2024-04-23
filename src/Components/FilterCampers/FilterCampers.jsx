import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/selectors";
import { Field, Form, Formik } from "formik";
import { changeFilter } from "../../store/filterSlice";
import css from "./FilterCampers.module.css";

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
    // actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ location: "", equipment: [], type: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.filterFormContainer}>
        <p className={css.subformTitle}>Location</p>
        <Field type="text" name="location" id="location" />
        <p className={css.subformTitle}>Filters</p>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <span>Shower/WC</span>
            </div>
          </label>
        </div>
        <h3>Vehicle type</h3>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <span>Van</span>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <span>Fully Integrated</span>
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
              <svg className={css.checkboxImage} width="20" height="20">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <svg className={css.checkboxImage} width="32" height="32">
                <use href="/src/img/sprite.svg#icon-ac"></use>
              </svg>
              <span>Alcove</span>
            </div>
          </label>
        </div>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default FilterCampers;
