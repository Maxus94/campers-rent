import { useEffect, useState } from "react";
import CamperCard from "../../Components/CamperCard/CamperCard";
import { fetchCampers } from "../../api/campers";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectPage } from "../../store/selectors";
import { nextPage } from "../../store/pageSlice";
import FilterCampers from "../../Components/FilterCampers/FilterCampers";

const CampersCatalog = () => {
  const [campers, setCampers] = useState([]);
  const [camperLocation, setCamperLocation] = useState("");
  const [camperType, setCamperType] = useState("");
  const [camperAC, setCamperAC] = useState(0);
  const [camperKitchen, setCamperKitchen] = useState(0);
  const [camperTV, setCamperTV] = useState(0);
  const [camperShowerWC, setCamperShowerWC] = useState(0);
  const [camperGearBox, setCamperGearBox] = useState("");
  const [camperFilter, setCamperFilter] = useState(null);
  const [loadMoreIsVisible, setLoadMoreIsVisible] = useState(true);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const campersFilter = (
    location,
    type,
    AC,
    gearBox,
    kitchen,
    TV,
    showerWC
  ) => {
    setCamperLocation(location);
    setCamperType(type);
    setCamperAC(AC);
    setCamperGearBox(gearBox);
    setCamperKitchen(kitchen);
    setCamperTV(TV);
    setCamperShowerWC(showerWC);
  };
  const handleFilter = () => {
    console.log(filters);
    return campers.filter((camper) =>
      camper.location
        .toLowerCase()
        .includes(
          filters.location.toLowerCase() &&
            camper.form.toLowerCase().includes(filters.form.toLowerCase())
        )
    );
    // .filter((camper) =>
    //   camper.form.toLowerCase().includes(filters.form.toLowerCase())
    // );
    // .filter((camper) => camper.form.includes(filters.form));
    // .filter((camper) => camper.form === filters.form);
  };
  useEffect(() => {
    const formCampersList = async () => {
      // setLoading(true);
      console.log(page);
      try {
        console.log("fetch");
        console.log(filters);
        const data = await fetchCampers(page);
        if (data.length < 4) {
          setLoadMoreIsVisible(false);
        }
        setCampers([...campers, ...data]);
        // setCampers((prevState) => [...prevState, ...data]);
      } catch (error) {
        console.log(error);
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    formCampersList();
  }, [page]);

  return (
    <div>
      <FilterCampers campersFilter={campersFilter} />
      <ul>
        {campers
          .filter(
            (camper) =>
              camper.location
                .toLowerCase()
                .includes(camperLocation.toLowerCase()) &&
              camper.form.toLowerCase().includes(camperType.toLowerCase()) &&
              camper.details.airConditioner >= camperAC &&
              camper.details.kitchen >= camperKitchen &&
              camper.details.TV >= camperTV &&
              camper.details.toilet >= camperShowerWC &&
              camper.details.shower >= camperShowerWC &&
              camper.transmission
                .toLowerCase()
                .includes(camperGearBox.toLowerCase())
          )
          .map((camper) => (
            <li key={camper._id}>
              <CamperCard camper={camper} />
            </li>
          ))}
      </ul>
      {loadMoreIsVisible && (
        <button type="button" onClick={() => dispatch(nextPage())}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersCatalog;
