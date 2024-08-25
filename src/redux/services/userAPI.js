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

const getUserByIdAPI = async (userId) => {
  try {
    const response = await instance.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

const changePassword = async (payload) => {
  try {
    const response = await instance.put(`/api/users/updatePassword`, payload);
    return response;
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

export { userAll, getMeAPI, getUserByIdAPI, changePassword };
