import instance from "../../config/index";

export const seatAll = async () => {
  try {
    const response = await instance.get(`/api/seats`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("seats API", response);

    return response.data;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
