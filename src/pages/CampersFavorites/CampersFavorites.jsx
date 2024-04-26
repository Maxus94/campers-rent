import { useEffect, useState } from "react";
import { fetchCampers } from "../../api/campers";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/selectors";
import CamperCard from "../../Components/CamperCard/CamperCard";

import css from "./CampersFavorites.module.css";

const CampersFavorites = () => {
  const favorites = useSelector(selectFavorites);
  const [favoriteCampers, setFavoriteCampers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const formCampersList = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCampers();
        setFavoriteCampers(
          data.filter((camper) => favorites.includes(camper._id))
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    formCampersList();
  }, [favorites]);

  return (
    <div>
      <ul>
        {favoriteCampers.map((camper) => (
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
    </div>
  );
};

export default CampersFavorites;
