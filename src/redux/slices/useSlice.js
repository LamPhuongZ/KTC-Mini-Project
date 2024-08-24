import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest } from "../Services/loginAPI";

export const login = createAsyncThunk("user/login", async (values) => {
  try {
    const response = await loginRequest(values);
    // lưu token từ api trả về vào localStorage
    const { token } = response.data;
    localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.data.token;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
