import instance from "../../config/index";

const registerUser = async (payload) => {
  try {
    const response = await instance.post(`/api/users`, payload);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { registerUser };
