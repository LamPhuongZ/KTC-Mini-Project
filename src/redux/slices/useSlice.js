import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { loginRequest } from "../Services/loginAPI";

// createAsyncThunk: xử lý action bất đồng bộ. Ở đây đang xử lý cho phần đăng nhập
export const login = createAsyncThunk("user/login", async (values) => {
  try {
    const response = await loginRequest(values);
    // lưu token từ api trả về vào localStorage
    const { token } = response;
    localStorage.setItem("token", token);
    // Sử dụng rejectWithValue để trả về lỗi có thể xử lý
    // return isRejectedWithValue(error.response.data || error.message);
    return response;
  } catch (error) {
    return error;
  }
});

const initialState = {
  token: null,
  isLoading: false, // Biến trạng thái để biết quá trình đăng nhập có đang diễn ra hay không.
  error: null,
};

// createSlice: giúp slice, tự động tạo các action và reducer
// reducers: Chứa các reducer thông thường. Ở đây chỉ có một reducer là logout, khi gọi action này thì sẽ xóa token và đăng xuất người dùng.
const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.token = null;
      localStorage.removeItem("token")
    },
  },
  // extraReducers: Được dùng để xử lý các action bất đồng bộ (như login). Nó có 3 trường hợp chính:
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// userSlice.reducer: Đây là reducer của slice, dùng để cập nhật trạng thái user.
// logout: Đây là một action để đăng xuất người dùng bằng cách xóa token trong trạng thái.
export default userSlice.reducer;
export const { logOut } = userSlice.actions;
