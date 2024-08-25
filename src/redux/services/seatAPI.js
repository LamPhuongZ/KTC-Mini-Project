import instance from "../../config/index";

const seatsAPI = async () => {
  try {
    const response = await instance.get(`/api/seats`);

    console.log("seats API: ", response.data);
    

    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { seatsAPI };
