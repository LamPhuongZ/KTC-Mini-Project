import instance from "../config/index";

const userAll = async () => {
  try {
    const response = await instance.get(`/api/user`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { userAll };
