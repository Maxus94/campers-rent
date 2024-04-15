import { useEffect, useState } from "react";
import { fetchCampers } from "../../api/campers";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../store/selectors";
import CamperCard from "../../Components/CamperCard/CamperCard";

const CampersFavorites = () => {
  const favorites = useSelector(selectFavorites);
  const [favoriteCampers, setFavoriteCampers] = useState([]);
  useEffect(() => {
    const formCampersList = async () => {
      // setLoading(true);
      try {
        console.log("fetch");
        const data = await fetchCampers();
        console.log(data.length);
        setFavoriteCampers(
          data.filter((camper) => favorites.includes(camper._id))
        );
        console.log(favoriteCampers);
        // if (data.length < 4) {
        //   setLoadMoreIsVisible(false);
        // }
        // setCampers((prevState) => [...prevState, ...data]);
      } catch (error) {
        console.log(error);
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    formCampersList();
  }, [favorites]);

  return (
    <ul>
      {favoriteCampers.map((camper) => (
        <li key={camper._id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CampersFavorites;
