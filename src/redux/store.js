import userSlice from "./slices/useSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

// combineReducers: Được sử dụng để kết hợp nhiều reducer khác nhau thành một reducer lớn hơn.
// persistReducer: Hàm này giúp tích hợp redux-persist với reducer chính, bằng cách bọc
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    userReducer: userSlice,
  })
);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);

// persistStore(store): Hàm này giúp duy trì trạng thái store theo cấu hình persistConfig. Nó sẽ tự động lưu và phục hồi trạng thái Redux từ storage.
// store: Đây là store chính của Redux, nơi chứa toàn bộ trạng thái của ứng dụng.
// persistor: Được dùng để theo dõi trạng thái store và duy trì nó qua các lần tải lại trang.
