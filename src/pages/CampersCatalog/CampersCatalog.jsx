import { useEffect, useState } from "react";
import CamperCard from "../../Components/CamperCard/CamperCard";
import { fetchCampers } from "../../api/campers";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../store/selectors";
import { nextPage } from "../../store/pageSlice";

const CampersCatalog = () => {
  const [campers, setCampers] = useState([]);
  const [loadMoreIsVisible, setLoadMoreIsVisible] = useState(true);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  useEffect(() => {
    const formCampersList = async () => {
      // setLoading(true);
      console.log(page);
      try {
        console.log("fetch");
        const data = await fetchCampers(page);
        console.log(data.length);
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
  console.log(campers);

  return (
    <>
      <ul>
        {campers.map((camper) => (
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
    </>
  );
};

export default CampersCatalog;
