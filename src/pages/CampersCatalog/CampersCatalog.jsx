import { useEffect, useState } from "react";
import CamperCard from "../../Components/CamperCard/CamperCard";
import { fetchCampers } from "../../api/campers";

const CampersCatalog = () => {
  const [campers, setCampers] = useState([]);
  useEffect(() => {
    const formCampersList = async () => {
      // setLoading(true);
      try {
        const data = await fetchCampers();
        setCampers(data);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
    formCampersList();
  }, []);
  console.log(campers);

  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper._id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CampersCatalog;
