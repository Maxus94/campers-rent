import axios from "axios";

// const optionsAxios = {
//   params: {
//     limit: 4,
//     page: 1,
//   },
// };
// const instanceCampers = axios.get(
//   "https://661a0dd8125e9bb9f29b3e54.mockapi.io/adverts",
//   optionsAxios
// );

// const params = new URLSearchParams();

// const instanceCampers = axios.create({
//   baseURL: "https://661a0dd8125e9bb9f29b3e54.mockapi.io/adverts",
// });

const optionsAxios = {
  params: {
    limit: 4,
    page: 1,
  },
};
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

// const instanceCampers = axios.create({
//   baseURL: 'https://661a0dd8125e9bb9f29b3e54.mockapi.io/',
// });

// export const fetchCampers = async () => {
//     const { data } = await instanceCampers(`adverts?limit=4&page=1`);
//     return data;
//   };
