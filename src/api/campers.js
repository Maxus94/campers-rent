import axios from "axios";

const instanceCampers = (page) => {
  return axios.get("https://661a0dd8125e9bb9f29b3e54.mockapi.io/adverts", {
    params: {
      limit: 4,
      page,
    },
  });
};

export const fetchCampers = async (page) => {
  const { data } = await instanceCampers(page);
  console.log(data);
  return data;
};
