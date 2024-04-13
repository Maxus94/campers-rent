import axios from 'axios';

const instanceCampers = axios.create({
  baseURL: 'https://661a0dd8125e9bb9f29b3e54.mockapi.io/',
});

export const fetchCampers = async () => {
    const { data } = await instanceCampers(`adverts?limit=4&page=1`);
    return data;
  };