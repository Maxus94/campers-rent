import { useEffect, useState } from "react";
import CamperCard from "../../Components/CamperCard/CamperCard";
import { fetchCampers } from "../../api/campers";
import { useDispatch, useSelector } from "react-redux";
import { nextPage } from "../../store/pageSlice";
import FilterCampers from "../../Components/FilterCampers/FilterCampers";
import css from "./CampersCatalog.module.css";
import { selectPage } from "../../store/selectors";

const CampersCatalog = () => {
  const [campers, setCampers] = useState([]);
  const [camperLocation, setCamperLocation] = useState("");
  const [camperType, setCamperType] = useState("");
  const [camperAC, setCamperAC] = useState(0);
  const [camperKitchen, setCamperKitchen] = useState(0);
  const [camperTV, setCamperTV] = useState(0);
  const [camperShowerWC, setCamperShowerWC] = useState(0);
  const [camperGearBox, setCamperGearBox] = useState("");
  const [loadMoreIsVisible, setLoadMoreIsVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const page = useSelector(selectPage);
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
  useEffect(() => {
    const formCampersList = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCampers(page);
        if (data.length < 4) {
          setLoadMoreIsVisible(false);
        }
        setCampers([...campers, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    formCampersList();
  }, [page]);

  return (
    <div className={css.catalogContainer}>
      <FilterCampers campersFilter={campersFilter} />
      <div className={css.cardsContainer}>
        <ul className={css.campersList}>
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
        {loading && (
          <p className={css.loadingMessage}>
            Please wait, loading information...
          </p>
        )}
        {error && <p className={css.errorMessage}>Error! {error}</p>}
        {!loading && !error && loadMoreIsVisible && (
          <button
            className={css.loadMore}
            type="button"
            onClick={() => dispatch(nextPage())}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CampersCatalog;
