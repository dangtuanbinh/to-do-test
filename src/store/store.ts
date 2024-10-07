import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./components/taskList/taskSlices"
import { taskApis } from "./components/taskList/taskApis";

const rootReducer = {
  [taskApis.reducerPath]: taskApis.reducer,
  task: taskReducer
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([taskApis.middleware]),
});

export default store;
