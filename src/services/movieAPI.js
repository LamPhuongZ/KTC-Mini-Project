import instance from "../config/index";

const movieALL = async () => {
  try {
    const response = await instance.get(`/api/movies/findAll`);
    return response;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { movieALL };
