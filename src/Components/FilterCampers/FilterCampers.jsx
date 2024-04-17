import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/selectors";
import { Field, Form, Formik } from "formik";
import { changeFilter } from "../../store/filterSlice";

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
      <Form>
        <span>location</span>
        <Field type="text" name="location" id="location" />
        <Field type="checkbox" name="equipment" value="AC" />
        <span>AC</span>
        <Field type="checkbox" name="equipment" value="Automatic" />
        <span>Automatic</span>
        <Field type="checkbox" name="equipment" value="Kitchen" />
        <span>Kitchen</span>
        <Field type="checkbox" name="equipment" value="TV" />
        <span>TV</span>
        <Field type="checkbox" name="equipment" value="Shower/WC" />
        <span>Shower/WC</span>
        <Field type="radio" name="type" value="Van" />
        <span>Van</span>
        <Field type="radio" name="type" value="Fully Integrated" />
        <span>Fully Integrated</span>
        <Field type="radio" name="type" value="Alcove" />
        <span>Alcove</span>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default FilterCampers;
