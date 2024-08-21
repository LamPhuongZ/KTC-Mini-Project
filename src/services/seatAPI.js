import instance from "../config/index";

const seatsAPI = async () => {
  try {
    const response = await instance.get(`/api/seats/findAll`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { seatsAPI };
