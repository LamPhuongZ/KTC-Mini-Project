import instance from "../../config/index";

const userAll = async () => {
  try {
    const response = await instance.get(`/api/users`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

const getMeAPI = async () => {
  try {
    const response = await instance.get(`/api/users/me`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { userAll, getMeAPI };
