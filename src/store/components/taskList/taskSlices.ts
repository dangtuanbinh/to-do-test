import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { taskApis } from "./taskApis";
import { ITask } from '../../../utils/types/commonTypes';

interface TaskState {
  taskList: ITask[]; 
}

const initialState: TaskState = {
  taskList: [], 
};


const taskList = createSlice({
  name: "task-list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        taskApis.endpoints.getTaskList.matchFulfilled,
        (state, action: PayloadAction<ITask[]>) => {
          state.taskList = action.payload;
        }
      )
      .addMatcher(
        taskApis.endpoints.addTask.matchFulfilled,
        (state, action: PayloadAction<ITask>) => {
          state.taskList.push(action.payload); 
        }
      )
      .addMatcher(
        taskApis.endpoints.updateTaskStatus.matchFulfilled,
        (state, action: PayloadAction<any>) => {
          const { id, status } = action.payload;
          const taskToUpdate = state.taskList.find((task: ITask) => task.id === id);
          if (taskToUpdate) {
            taskToUpdate.status = status;
          }
        }
      );}
});

const { reducer, actions } = taskList;
export const {} = actions;
export default reducer;
