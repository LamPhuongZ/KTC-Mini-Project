import instance from "../../config";

const userAll = async () => {
  try {
    const response = await instance.get(`/api/users`);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export { userAll };
