import instance from "../../config/index";

const loginRequest = async (payload) => {
  try {
    const response = await instance.post(`/api/auth/users/login`, payload);

    console.log("login API: ", response.data)

    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { loginRequest };
