// import axios from "axios";
// export const fetcher = (url) => {
//     return axios.get(url).then((res) => res.data);
//   };

//use SWR
// export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// import axios from "axios";
// export const fetcher = (url) => axios.get(url).then((res) => res.data);


import instance from "./config/index";

const fetcher = (url) => instance.get(url).then((res) => res.data);

export { fetcher };