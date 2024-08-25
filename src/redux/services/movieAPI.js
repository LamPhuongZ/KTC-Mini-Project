import instance from "../config/index";

const movieALL = async () => {
  try {
    const response = await instance.get(`/api/movies/all`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { movieALL };
