// import axios from "axios";
// export const fetcher = (url) => {
//     return axios.get(url).then((res) => res.data);
//   };

//use SWR
// export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// import axios from "axios";
// export const fetcher = (url) => axios.get(url).then((res) => res.data);

import axios from 'axios';

const fetcher = (url) => {
  return axios.get(url, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    }
  }).then(response => response.data);
};

export { fetcher };
